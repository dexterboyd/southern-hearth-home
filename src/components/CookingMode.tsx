import { useEffect, useMemo, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, RotateCcw, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CookingModeProps {
  title: string;
  steps: string[];
  onClose: () => void;
}

// Parse a duration mention from a step, e.g. "simmer 15 minutes", "1 hour",
// "3-5 minutes", "45 min", "1.5 hours". Returns seconds, or null.
const parseStepDuration = (text: string): number | null => {
  // Match a number (or range like 3-5, 1 1/2) followed by a unit.
  const re = /(\d+(?:\.\d+)?)(?:\s*[-–]\s*(\d+(?:\.\d+)?))?\s*(hours?|hrs?|minutes?|mins?|seconds?|secs?)\b/i;
  const m = text.match(re);
  if (!m) return null;
  const value = parseFloat(m[1]);
  if (Number.isNaN(value)) return null;
  const unit = m[3].toLowerCase();
  const multiplier = unit.startsWith('hour') || unit.startsWith('hr')
    ? 3600
    : unit.startsWith('min')
      ? 60
      : 1;
  return Math.round(value * multiplier);
};

const formatClock = (seconds: number): string => {
  const s = Math.max(0, Math.floor(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n: number) => n.toString().padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(sec)}` : `${m}:${pad(sec)}`;
};

export function CookingMode({ title, steps, onClose }: CookingModeProps) {
  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState<boolean[]>(() => steps.map(() => false));

  const stepDuration = useMemo(() => parseStepDuration(steps[index] || ''), [steps, index]);
  const [remaining, setRemaining] = useState<number | null>(stepDuration);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Reset timer whenever the active step changes.
  useEffect(() => {
    setRemaining(stepDuration);
    setRunning(false);
  }, [stepDuration, index]);

  // Countdown tick.
  useEffect(() => {
    if (!running || remaining === null) return;
    intervalRef.current = window.setInterval(() => {
      setRemaining((r) => {
        if (r === null) return r;
        if (r <= 1) {
          setRunning(false);
          try {
            // Gentle beep — best effort, no error if browser blocks it.
            const AudioCtx = (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }).AudioContext
              || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
            if (AudioCtx) {
              const ctx = new AudioCtx();
              const osc = ctx.createOscillator();
              const gain = ctx.createGain();
              osc.type = 'sine';
              osc.frequency.value = 880;
              osc.connect(gain);
              gain.connect(ctx.destination);
              gain.gain.setValueAtTime(0.15, ctx.currentTime);
              osc.start();
              osc.stop(ctx.currentTime + 0.6);
            }
          } catch { /* ignore */ }
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    };
  }, [running, remaining]);

  // Keyboard shortcuts: Esc closes, arrows navigate.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(steps.length - 1, i + 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1));
    };
    window.addEventListener('keydown', handler);
    // Lock body scroll while open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, steps.length]);

  const total = steps.length;
  const isLast = index === total - 1;
  const isFirst = index === 0;
  const doneCount = checked.filter(Boolean).length;
  const progress = total ? Math.round((doneCount / total) * 100) : 0;

  const toggleChecked = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const markAndAdvance = () => {
    toggleChecked(index);
    if (!isLast) setIndex(index + 1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Cooking mode: ${title}`}
      className="fixed inset-0 z-[100] bg-background flex flex-col"
    >
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 px-4 py-4">
          <div className="min-w-0">
            <p className="font-body text-xs uppercase tracking-wider text-primary">Cooking Mode</p>
            <h2 className="font-display text-lg md:text-xl font-semibold text-foreground truncate">
              {title}
            </h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Exit cooking mode">
            <X className="w-5 h-5" />
          </Button>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-muted">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
          <p className="font-body text-sm text-muted-foreground mb-4">
            Step {index + 1} of {total}
          </p>
          <p className="font-display text-2xl md:text-4xl leading-relaxed text-foreground mb-8">
            {steps[index]}
          </p>

          {/* Timer */}
          {stepDuration !== null && remaining !== null && (
            <div className="bg-card border border-border rounded-xl p-6 mb-8 flex flex-col items-center gap-4">
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                Step Timer
              </p>
              <p className="font-display text-5xl md:text-6xl font-semibold tabular-nums text-primary">
                {formatClock(remaining)}
              </p>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => setRunning((r) => !r)}
                  variant={running ? 'secondary' : 'default'}
                  size="sm"
                >
                  {running ? (
                    <><Pause className="w-4 h-4 mr-2" /> Pause</>
                  ) : (
                    <><Play className="w-4 h-4 mr-2" /> {remaining === 0 ? 'Restart' : 'Start'}</>
                  )}
                </Button>
                <Button
                  onClick={() => { setRunning(false); setRemaining(stepDuration); }}
                  variant="outline"
                  size="sm"
                  aria-label="Reset timer"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Check step */}
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <span
              className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                checked[index]
                  ? 'bg-primary border-primary text-primary-foreground'
                  : 'border-border bg-background'
              }`}
            >
              {checked[index] && <Check className="w-4 h-4" />}
            </span>
            <input
              type="checkbox"
              className="sr-only"
              checked={!!checked[index]}
              onChange={() => toggleChecked(index)}
            />
            <span className="font-body text-foreground">Mark this step done</span>
          </label>
        </div>
      </div>

      {/* Footer nav */}
      <div className="border-t border-border bg-background">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 px-4 py-4">
          <Button
            variant="outline"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={isFirst}
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </Button>
          <p className="font-body text-sm text-muted-foreground hidden sm:block">
            {doneCount} of {total} done
          </p>
          {isLast ? (
            <Button onClick={() => { toggleChecked(index); onClose(); }}>
              Finish
              <Check className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button onClick={markAndAdvance}>
              Next Step
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
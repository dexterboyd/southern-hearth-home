import { useState, useEffect, type MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Recipes', href: '/recipes' },
  { name: 'About', href: '/about' },
  { name: 'Cookbooks', href: '/cookbooks' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToNewsletter = () => {
    if (location.pathname === '/') {
      const element = document.getElementById('newsletter');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: 'newsletter' } });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const handleNavClick =
    (href: string) =>
    (e: MouseEvent<HTMLAnchorElement>) => {
      // If user clicks the current route, react-router won't navigate — so we scroll to top manually.
      if (href === location.pathname) {
        e.preventDefault();
        scrollToTop();
      }

      setIsOpen(false);
    };
  useEffect(() => {
    if (location.state?.scrollTo === 'newsletter') {
      setTimeout(() => {
        const element = document.getElementById('newsletter');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-blog">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Flavor <span className="text-primary">First</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={handleNavClick(link.href)}
                className={cn(
                  "font-body text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" size="sm" onClick={scrollToNewsletter}>
              Free Recipes
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 px-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleNavClick(link.href)}
                  className={cn(
                    "font-body text-base font-medium py-2 transition-colors",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                variant="default" 
                className="mt-2" 
                onClick={() => {
                  setIsOpen(false);
                  scrollToNewsletter();
                }}
              >
                Free Recipes
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

// Utilities to scale ingredient quantities proportionally.

const parseNumber = (token: string): number | null => {
  const trimmed = token.trim();
  // Mixed number: "1 1/2"
  const mixed = trimmed.match(/^(\d+)\s+(\d+)\/(\d+)$/);
  if (mixed) {
    return parseInt(mixed[1], 10) + parseInt(mixed[2], 10) / parseInt(mixed[3], 10);
  }
  // Fraction: "1/2"
  const frac = trimmed.match(/^(\d+)\/(\d+)$/);
  if (frac) {
    return parseInt(frac[1], 10) / parseInt(frac[2], 10);
  }
  // Decimal or integer
  const num = trimmed.match(/^\d*\.?\d+$/);
  if (num) return parseFloat(trimmed);
  return null;
};

const formatNumber = (value: number): string => {
  if (!isFinite(value) || value <= 0) return '0';
  const whole = Math.floor(value);
  const remainder = value - whole;
  // Snap to common fractions
  const fractions: Array<[number, string]> = [
    [1 / 8, '1/8'],
    [1 / 4, '1/4'],
    [1 / 3, '1/3'],
    [1 / 2, '1/2'],
    [2 / 3, '2/3'],
    [3 / 4, '3/4'],
    [7 / 8, '7/8'],
  ];
  const tolerance = 0.04;
  if (remainder < tolerance) return `${whole || 0}`;
  if (remainder > 1 - tolerance) return `${whole + 1}`;
  for (const [val, label] of fractions) {
    if (Math.abs(remainder - val) < tolerance) {
      return whole > 0 ? `${whole} ${label}` : label;
    }
  }
  // Fallback: round to 2 decimals, strip trailing zeros
  return value.toFixed(2).replace(/\.?0+$/, '');
};

const NUMBER_TOKEN =
  /^(\d+\s+\d+\/\d+|\d+\/\d+|\d*\.?\d+)(\s*-\s*(\d+\s+\d+\/\d+|\d+\/\d+|\d*\.?\d+))?/;

export const scaleIngredient = (ingredient: string, factor: number): string => {
  if (factor === 1) return ingredient;
  const match = ingredient.match(NUMBER_TOKEN);
  if (!match) return ingredient;
  const [full, first, , second] = match;
  const firstNum = parseNumber(first);
  if (firstNum === null) return ingredient;
  let replacement = formatNumber(firstNum * factor);
  if (second) {
    const secondNum = parseNumber(second);
    if (secondNum !== null) {
      replacement = `${replacement}-${formatNumber(secondNum * factor)}`;
    }
  }
  return replacement + ingredient.slice(full.length);
};
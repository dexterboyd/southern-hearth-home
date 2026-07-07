// Curated recipe collections — hand-picked groupings of existing recipes.
// Each collection references recipe IDs from src/data/recipes.ts.

export interface Collection {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  recipeIds: number[];
}

export const collections: Collection[] = [
  {
    slug: 'sunday-dinner',
    title: 'Sunday Dinner',
    tagline: 'The table everyone comes home to',
    description:
      'A slow-cooked, gather-round Southern spread built for the one meal a week that still slows the world down. Fried chicken, buttery mac, greens simmered low, and dessert worth waiting for.',
    recipeIds: [71, 40, 21, 41, 45, 36],
  },
  {
    slug: 'mardi-gras-menu',
    title: 'Mardi Gras Menu',
    tagline: 'A New Orleans feast for the whole crew',
    description:
      'The full Big Easy playlist — a dark-roux gumbo, red beans on the side, jambalaya on the stove, and a King Cake to close it out in purple, green, and gold.',
    recipeIds: [2, 1, 4, 15, 31, 35],
  },
  {
    slug: 'backyard-bbq',
    title: 'Backyard BBQ',
    tagline: 'Smoke, sear, and everything in between',
    description:
      'Fire up the pit. Low-and-slow brisket and ribs, quick-searing burgers and wings, and the sides that make a cookout feel like a holiday.',
    recipeIds: [47, 48, 49, 53, 55, 41, 43],
  },
  {
    slug: 'weeknight-comfort',
    title: 'Weeknight Comfort',
    tagline: 'Big flavor, small window',
    description:
      'One-pan, one-pot, and under-an-hour Southern classics for the nights you want something soulful without babysitting a stove all evening.',
    recipeIds: [6, 7, 3, 51, 44, 62],
  },
  {
    slug: 'holiday-dessert-table',
    title: 'Holiday Dessert Table',
    tagline: 'The finale worth the wait',
    description:
      'Bread pudding, pralines, sweet potato pie, and the kind of bourbon-forward brownies that quietly steal the show. Build the dessert table that ends every holiday on the right note.',
    recipeIds: [30, 33, 36, 38, 61, 32],
  },
  {
    slug: 'copycat-favorites',
    title: 'Copycat Favorites',
    tagline: 'Better-than-the-drive-thru versions',
    description:
      'Homemade takes on the fast-food and chain classics you actually crave — dialed-in seasoning, honest ingredients, and none of the wait in line.',
    recipeIds: [68, 69, 72, 73, 74, 70],
  },
];

export const getCollectionBySlug = (slug: string) =>
  collections.find((c) => c.slug === slug);
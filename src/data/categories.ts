import { getRecipeImage } from './recipeImages';

export interface CategoryMeta {
  slug: string;
  name: string;
  shortName: string;
  heroKicker: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroSubtitle: string;
  intro: string[];
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
}

// Uses a signature recipe image per category for the hero.
export const categoryMeta: CategoryMeta[] = [
  {
    slug: 'cajun',
    name: 'Cajun & Creole',
    shortName: 'Cajun & Creole',
    heroKicker: 'From the Bayou',
    heroTitle: 'Cajun & Creole',
    heroTitleAccent: 'Recipes',
    heroSubtitle: 'The bold, soulful cooking of South Louisiana — built on the holy trinity, smoke, and seasoning that means business.',
    intro: [
      'Cajun and Creole cooking is where French technique, West African depth, and Louisiana ingredients collide. From a properly built roux to a rolling crawfish boil, these are the dishes that define the Big Easy table.',
      'Every recipe here is tested in a home kitchen and written for cooks who want the real thing — jambalaya with the crust on the bottom, gumbo dark enough to stand up to rice, and étouffée thick with sweet gulf shrimp.',
    ],
    seoTitle: 'Cajun & Creole Recipes | Authentic Louisiana Cooking',
    seoDescription:
      'Authentic Cajun and Creole recipes from New Orleans and South Louisiana — gumbo, jambalaya, étouffée, red beans and rice, po\u2019boys, and more.',
    heroImage: getRecipeImage(2, 'cajun'), // gumbo
  },
  {
    slug: 'soulfood',
    name: 'Southern Soul Food',
    shortName: 'Soul Food',
    heroKicker: 'Rooted in Tradition',
    heroTitle: 'Southern Soul',
    heroTitleAccent: 'Food',
    heroSubtitle: 'Sunday-supper classics passed down through generations — greens with pot likker, fried chicken with a crust that shatters, and cornbread that means it.',
    intro: [
      'Soul food is memory on a plate. It\u2019s the food of family reunions, church potlucks, and grandmothers who never measured a thing. These recipes honor that lineage while making sure your version comes out right the first time.',
      'Expect slow-simmered collards, buttermilk-brined fried chicken, candied yams, mac and cheese with a real cheese sauce, and desserts that finish the meal the way it deserves.',
    ],
    seoTitle: 'Southern Soul Food Recipes | Classic Sunday Dinner Dishes',
    seoDescription:
      'Traditional Southern soul food recipes — fried chicken, collard greens, mac and cheese, candied yams, cornbread, and Sunday dinner classics.',
    heroImage: getRecipeImage(40, 'soulfood'), // mac and cheese
  },
  {
    slug: 'bbq',
    name: 'BBQ & Smokehouse',
    shortName: 'BBQ',
    heroKicker: 'Low, Slow, and Smoked',
    heroTitle: 'BBQ & Smokehouse',
    heroTitleAccent: 'Recipes',
    heroSubtitle: 'Backyard barbecue built for real fire and real bark — brisket, ribs, pulled pork, and the rubs and sauces that carry them.',
    intro: [
      'Great barbecue is patience with a payoff. These recipes cover the whole smokehouse playbook — from choosing wood and building a fire, to nailing the stall on a brisket, to slicing ribs that pull clean without falling apart.',
      'You\u2019ll also find the sides that belong beside them: smoked baked beans, brisket burnt ends, slaw, and cornbread. Everything is written for a home pit — offset, kettle, or pellet — no restaurant equipment required.',
    ],
    seoTitle: 'BBQ & Smokehouse Recipes | Brisket, Ribs, Rubs & Sauces',
    seoDescription:
      'Backyard BBQ and smokehouse recipes — smoked brisket, pulled pork, ribs, burnt ends, plus homemade dry rubs and barbecue sauces.',
    heroImage: getRecipeImage(39, 'bbq'), // bbq beans
  },
  {
    slug: 'desserts',
    name: 'Southern Desserts',
    shortName: 'Desserts',
    heroKicker: 'The Sweet Finish',
    heroTitle: 'Southern',
    heroTitleAccent: 'Desserts',
    heroSubtitle: 'From bourbon banana pudding to pecan pie with a proper flaky crust — the desserts that finish a Southern meal the way it should end.',
    intro: [
      'Southern desserts don\u2019t apologize. They\u2019re buttery, boozy, and built to be shared. These recipes cover the classics — pecan pie, sweet potato pie, bread pudding, king cake, pralines, and banana pudding — plus a few showpieces for special occasions.',
      'Every recipe includes the small details that separate a good dessert from one people ask about for years.',
    ],
    seoTitle: 'Southern Dessert Recipes | Pecan Pie, Banana Pudding & More',
    seoDescription:
      'Classic Southern dessert recipes — pecan pie, sweet potato pie, banana pudding, bread pudding, king cake, pralines, and beignets.',
    heroImage: getRecipeImage(35, 'desserts'), // king cake
  },
  {
    slug: 'copycat',
    name: 'Restaurant Copycat Recipes',
    shortName: 'Copycat',
    heroKicker: 'Restaurant Favorites at Home',
    heroTitle: 'Copycat',
    heroTitleAccent: 'Recipes',
    heroSubtitle: 'Recreations of famous Southern restaurant dishes — reverse-engineered, tested, and dialed in for the home kitchen.',
    intro: [
      'Some dishes you order every time you sit down. These are the ones worth learning to make at home. Every copycat here is built from scratch — no shortcuts, no mystery packets — and matches what you remember about the original.',
      'You get the exact flavor without the drive, the wait, or the check at the end.',
    ],
    seoTitle: 'Southern Restaurant Copycat Recipes | Make Them at Home',
    seoDescription:
      'Copycat recipes for famous Southern restaurant dishes — recreate your favorites at home with tested, from-scratch ingredients and technique.',
    heroImage: getRecipeImage(38, 'copycat'),
  },
];

export function getCategoryMeta(slug: string): CategoryMeta | undefined {
  return categoryMeta.find((c) => c.slug === slug);
}
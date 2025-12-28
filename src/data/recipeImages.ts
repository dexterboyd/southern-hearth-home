// Recipe image imports
import redBeansRice from '@/assets/recipes/red-beans-rice.jpg';
import gumbo from '@/assets/recipes/gumbo.jpg';
import crawfishEtouffee from '@/assets/recipes/crawfish-etouffee.jpg';
import jambalaya from '@/assets/recipes/jambalaya.jpg';
import crawfishBoil from '@/assets/recipes/crawfish-boil.jpg';
import bbqShrimp from '@/assets/recipes/bbq-shrimp.jpg';
import blackenedRedfish from '@/assets/recipes/blackened-redfish.jpg';
import dirtyRice from '@/assets/recipes/dirty-rice.jpg';
import shrimpCreole from '@/assets/recipes/shrimp-creole.jpg';
import oystersRockefeller from '@/assets/recipes/oysters-rockefeller.jpg';
import roastBeefPoboy from '@/assets/recipes/roast-beef-poboy.jpg';
import shrimpOysterPoboy from '@/assets/recipes/shrimp-oyster-poboy.jpg';
import muffuletta from '@/assets/recipes/muffuletta.jpg';
import stuffedPeppers from '@/assets/recipes/stuffed-peppers.jpg';
import yakamein from '@/assets/recipes/yakamein.jpg';
import maqueChoux from '@/assets/recipes/maque-choux.jpg';
import calas from '@/assets/recipes/calas.jpg';
import collardGreens from '@/assets/recipes/collard-greens.jpg';
import meatPies from '@/assets/recipes/meat-pies.jpg';
import boudinBalls from '@/assets/recipes/boudin-balls.jpg';
import crawfishBisque from '@/assets/recipes/crawfish-bisque.jpg';
import chickenSausageGumbo from '@/assets/recipes/chicken-sausage-gumbo.jpg';
import whiteBeansSausage from '@/assets/recipes/white-beans-sausage.jpg';
import sweetHeatRub from '@/assets/recipes/sweet-heat-rub.jpg';
import cajunRub from '@/assets/recipes/cajun-rub.jpg';
import jerkRub from '@/assets/recipes/jerk-rub.jpg';
import breadPudding from '@/assets/recipes/bread-pudding.jpg';
import beignets from '@/assets/recipes/beignets.jpg';
import bananasFoster from '@/assets/recipes/bananas-foster.jpg';
import pralines from '@/assets/recipes/pralines.jpg';
import pecanPie from '@/assets/recipes/pecan-pie.jpg';
import kingCake from '@/assets/recipes/king-cake.jpg';
import sweetPotatoPie from '@/assets/recipes/sweet-potato-pie.jpg';
import cheesecake from '@/assets/recipes/cheesecake.jpg';
import pecanBrownies from '@/assets/recipes/pecan-brownies.jpg';
import potsDeCreme from '@/assets/recipes/pots-de-creme.jpg';
import macAndCheese from '@/assets/recipes/mac-and-cheese.jpg';
import bbqBeans from '@/assets/recipes/bbq-beans.jpg';
import deviledEggs from '@/assets/recipes/deviled-eggs.jpg';
import coleslaw from '@/assets/recipes/coleslaw.jpg';
import elotes from '@/assets/recipes/elotes.jpg';
import cornbread from '@/assets/recipes/cornbread.jpg';
import beefRibs from '@/assets/recipes/beef-ribs.jpg';
import brisket from '@/assets/recipes/brisket.jpg';
import babyBackRibs from '@/assets/recipes/baby-back-ribs.jpg';
import pulledPork from '@/assets/recipes/pulled-pork.jpg';
import ribeye from '@/assets/recipes/ribeye.jpg';
import bbqChicken from '@/assets/recipes/bbq-chicken.jpg';
import jerkChicken from '@/assets/recipes/jerk-chicken.jpg';
import smashBurgers from '@/assets/recipes/smash-burgers.jpg';
import smokedSausage from '@/assets/recipes/smoked-sausage.jpg';
import lemonPepperWings from '@/assets/recipes/lemon-pepper-wings.jpg';
import brisketPoppers from '@/assets/recipes/brisket-poppers.jpg';
import lambChops from '@/assets/recipes/lamb-chops.jpg';
import chickenDust from '@/assets/recipes/chicken-dust.jpg';
import steakBlend from '@/assets/recipes/steak-blend.jpg';
import memphisRub from '@/assets/recipes/memphis-rub.jpg';

// Map recipe IDs to their images
export const recipeImages: Record<number, string> = {
  1: redBeansRice,
  2: gumbo,
  3: crawfishEtouffee,
  4: jambalaya,
  5: crawfishBoil,
  6: bbqShrimp,
  7: blackenedRedfish,
  8: dirtyRice,
  9: shrimpCreole,
  10: oystersRockefeller,
  14: roastBeefPoboy,
  15: shrimpOysterPoboy,
  16: muffuletta,
  17: stuffedPeppers,
  18: yakamein,
  19: maqueChoux,
  20: calas,
  21: collardGreens,
  22: meatPies,
  23: boudinBalls,
  24: crawfishBisque,
  25: chickenSausageGumbo,
  26: whiteBeansSausage,
  27: sweetHeatRub,
  28: cajunRub,
  29: jerkRub,
  30: breadPudding,
  31: beignets,
  32: bananasFoster,
  33: pralines,
  34: pecanPie,
  35: kingCake,
  36: sweetPotatoPie,
  37: cheesecake,
  38: pecanBrownies,
  39: potsDeCreme,
  40: macAndCheese,
  41: bbqBeans,
  42: deviledEggs,
  43: coleslaw,
  44: elotes,
  45: cornbread,
  46: beefRibs,
  47: brisket,
  48: babyBackRibs,
  49: pulledPork,
  50: ribeye,
  51: bbqChicken,
  52: jerkChicken,
  53: smashBurgers,
  54: smokedSausage,
  55: lemonPepperWings,
  56: brisketPoppers,
  57: lambChops,
  58: chickenDust,
  59: steakBlend,
  60: memphisRub,
  // Remaining recipes use category-based fallbacks
};

export const getRecipeImage = (id: number, categorySlug: string): string => {
  if (recipeImages[id]) {
    return recipeImages[id];
  }
  // Fallback based on category
  const categoryFallbacks: Record<string, string> = {
    cajun: gumbo,
    comfort: roastBeefPoboy,
    sides: macAndCheese,
    bbq: brisket,
    rubs: sweetHeatRub,
    desserts: breadPudding,
  };
  return categoryFallbacks[categorySlug] || gumbo;
};

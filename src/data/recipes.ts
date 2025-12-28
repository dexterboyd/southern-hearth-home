// Recipe data from "Flavors of the Big Easy" and "Flavor First" cookbooks by Dexter M. Boyd
// Categories: Cajun & Creole, Southern Classics, Comfort Food, Southern Sides, BBQ & Smokehouse, Rubs & Marinades, Desserts

export interface Recipe {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  categorySlug: string;
  time: string;
  servings: number;
  image: string | null;
  featured: boolean;
  ingredients?: string[];
  instructions?: string[];
  yield?: string;
  proTip?: string;
}

export const recipes: Recipe[] = [
  // CAJUN & CREOLE
  {
    id: 1,
    title: 'New Orleans Red Beans & Rice',
    subtitle: 'A True Monday Tradition',
    description: 'Creamy red beans slow-simmered with pickled pork, smoky sausage, and the holy trinity. Rich, soulful, and undeniably Louisiana.',
    category: 'Cajun & Creole',
    categorySlug: 'cajun',
    time: '2.5 hours',
    servings: 10,
    image: null,
    featured: true,
    ingredients: [
      '1 lb dried red kidney beans, soaked overnight',
      '1 lb smoked sausage, sliced',
      '1/2 lb pickled pork or ham hock',
      '1 large onion, diced',
      '1 green bell pepper, diced',
      '3 celery stalks, diced',
      '4 cloves garlic, minced',
      '2 bay leaves',
      '1 tsp dried thyme',
      '1 tsp Creole seasoning',
      'Kosher salt and black pepper to taste',
      'Hot sauce to taste',
      'Cooked white rice for serving'
    ],
    instructions: [
      'Drain soaked beans and add to a large Dutch oven with 8 cups of water.',
      'Add pickled pork and bring to a boil. Reduce heat and simmer for 1 hour.',
      'In a skillet, brown the sausage. Remove and set aside.',
      'Sauté onion, bell pepper, and celery in the sausage drippings until softened.',
      'Add garlic and cook 1 minute more.',
      'Add vegetables, sausage, bay leaves, thyme, and Creole seasoning to the beans.',
      'Simmer for 1-1.5 hours, mashing some beans against the pot to thicken.',
      'Season with salt, pepper, and hot sauce.',
      'Serve over hot white rice.'
    ]
  },
  {
    id: 2,
    title: 'Traditional New Orleans Gumbo',
    subtitle: 'Dark Roux Perfection',
    description: 'A tantalizing blend of shrimp, crabs, smoked sausage, and okra in a savory roux-based broth—authentic Southern soul.',
    category: 'Cajun & Creole',
    categorySlug: 'cajun',
    time: '3 hours',
    servings: 8,
    image: null,
    featured: true,
    ingredients: [
      '1 cup vegetable oil',
      '1 cup all-purpose flour',
      '1 large onion, diced',
      '1 green bell pepper, diced',
      '3 celery stalks, diced',
      '4 cloves garlic, minced',
      '1 lb andouille sausage, sliced',
      '1 lb okra, sliced',
      '8 cups chicken or seafood stock',
      '1 lb shrimp, peeled and deveined',
      '1 lb crab legs or crab meat',
      'File powder, bay leaves, thyme',
      'Cooked white rice for serving'
    ],
    instructions: [
      'Make a dark roux by whisking oil and flour over medium heat for 45 minutes until chocolate brown.',
      'Add the holy trinity (onion, bell pepper, celery) and cook until softened.',
      'Add garlic and cook 1 minute.',
      'Slowly add stock while stirring constantly.',
      'Add sausage, okra, bay leaves, and thyme. Simmer for 1 hour.',
      'Add shrimp and crab in the last 10 minutes of cooking.',
      'Season with salt, pepper, and file powder.',
      'Serve over steaming white rice.'
    ]
  },
  {
    id: 3,
    title: 'Classic Crawfish Étouffée',
    subtitle: 'Pure Cajun Soul',
    description: "Louisiana's crown jewel—tender crawfish tails smothered in a rich, buttery roux with the holy trinity.",
    category: 'Cajun & Creole',
    categorySlug: 'cajun',
    time: '1 hour',
    servings: 8,
    image: null,
    featured: true,
    ingredients: [
      '2 lbs crawfish tails',
      '1 stick butter',
      '1 large onion, diced',
      '1 green bell pepper, diced',
      '2 celery stalks, diced',
      '4 cloves garlic, minced',
      '3 tbsp flour',
      '2 cups crawfish or seafood stock',
      '1 tsp Cajun seasoning',
      'Green onions and parsley for garnish',
      'Cooked white rice for serving'
    ],
    instructions: [
      'Melt butter in a large skillet over medium heat.',
      'Add onion, bell pepper, and celery. Cook until softened.',
      'Add garlic and cook 1 minute.',
      'Sprinkle in flour and stir to make a blonde roux.',
      'Slowly add stock, stirring constantly.',
      'Add Cajun seasoning and simmer 15 minutes.',
      'Add crawfish tails and cook 10 minutes until heated through.',
      'Garnish with green onions and parsley. Serve over rice.'
    ]
  },
  {
    id: 4,
    title: 'Jambalaya',
    subtitle: 'One-Pot Wonder',
    description: 'A true one-pot dish—layered with smoky sausage, tasso ham, and Gulf shrimp, built on homemade shrimp stock.',
    category: 'Cajun & Creole',
    categorySlug: 'cajun',
    time: '1.5 hours',
    servings: 8,
    image: null,
    featured: true,
    ingredients: [
      '1 lb andouille sausage, sliced',
      '1/2 lb tasso ham, diced',
      '1 lb shrimp, peeled',
      '2 cups long grain rice',
      '1 large onion, diced',
      '1 green bell pepper, diced',
      '2 celery stalks, diced',
      '4 cloves garlic, minced',
      '1 can diced tomatoes',
      '4 cups shrimp or chicken stock',
      '2 tsp Creole seasoning',
      'Bay leaves, thyme, hot sauce'
    ],
    instructions: [
      'Brown sausage and tasso in a large Dutch oven. Remove and set aside.',
      'Sauté onion, bell pepper, and celery in the drippings.',
      'Add garlic and cook 1 minute.',
      'Add tomatoes, stock, rice, and seasonings.',
      'Return meat to pot and bring to a boil.',
      'Reduce heat, cover, and simmer 25 minutes.',
      'Add shrimp in the last 10 minutes.',
      'Let rest 5 minutes before serving.'
    ]
  },
  {
    id: 5,
    title: 'Backyard Crawfish Boil',
    subtitle: 'Ultimate Communal Feast',
    description: 'A Louisiana celebration in a pot—spicy crawfish with corn, potatoes, and sausage. The ultimate gathering.',
    category: 'Cajun & Creole',
    categorySlug: 'cajun',
    time: '1.5 hours',
    servings: 12,
    image: null,
    featured: true,
    ingredients: [
      '30 lbs live crawfish, purged',
      '5 lbs small red potatoes',
      '12 ears corn, halved',
      '2 lbs smoked sausage',
      '6 whole heads garlic',
      '6 lemons, halved',
      '2 bags crawfish boil seasoning',
      '1 cup Cajun seasoning',
      '1/2 cup cayenne pepper',
      'Butter and extra seasoning for serving'
    ],
    instructions: [
      'Fill a large outdoor pot with water and bring to a rolling boil.',
      'Add crawfish boil seasoning, Cajun seasoning, cayenne, lemons, and garlic.',
      'Add potatoes and cook 10 minutes.',
      'Add corn and sausage, cook 10 minutes more.',
      'Add crawfish and cook 3-5 minutes.',
      'Turn off heat and let soak 20-30 minutes.',
      'Drain and pour onto newspaper-covered table.',
      'Sprinkle with extra seasoning and serve with melted butter.'
    ]
  },
  {
    id: 6,
    title: 'New Orleans BBQ Shrimp',
    subtitle: 'Buttery & Peppery',
    description: 'Not BBQ at all—buttery, peppery, Worcestershire-drenched Gulf shrimp. Grab French bread and get messy.',
    category: 'Cajun & Creole',
    categorySlug: 'cajun',
    time: '35 min',
    servings: 6,
    image: null,
    featured: true,
    ingredients: [
      '2 lbs large shrimp, head-on preferred',
      '1 cup butter',
      '1/4 cup Worcestershire sauce',
      '4 cloves garlic, minced',
      '2 tbsp Creole seasoning',
      '1 tbsp black pepper',
      '1 tsp cayenne',
      'Juice of 2 lemons',
      '1/2 cup white wine',
      'French bread for dipping'
    ],
    instructions: [
      'Preheat oven to 400°F.',
      'Melt butter in a large cast iron skillet.',
      'Add Worcestershire, garlic, Creole seasoning, pepper, and cayenne.',
      'Add shrimp and toss to coat.',
      'Add wine and lemon juice.',
      'Bake 15-20 minutes until shrimp are pink and cooked through.',
      'Serve immediately with plenty of French bread for sopping up the sauce.'
    ]
  },
  {
    id: 7,
    title: 'Blackened Redfish',
    subtitle: "Chef Paul's Legacy",
    description: "Chef Paul Prudhomme's legendary creation—fiery Cajun spices seared in a smoking hot cast iron. Bold and unforgettable.",
    category: 'Cajun & Creole',
    categorySlug: 'cajun',
    time: '25 min',
    servings: 4,
    image: null,
    featured: true,
    ingredients: [
      '4 redfish fillets (or red snapper)',
      '1 stick butter, melted',
      '2 tbsp paprika',
      '1 tbsp garlic powder',
      '1 tbsp onion powder',
      '1 tsp cayenne',
      '1 tsp black pepper',
      '1 tsp white pepper',
      '1 tsp dried thyme',
      '1 tsp dried oregano',
      '1 tsp kosher salt'
    ],
    instructions: [
      'Mix all spices together to make blackening seasoning.',
      'Heat cast iron skillet over high heat until smoking hot.',
      'Dip fillets in melted butter, then coat generously with seasoning.',
      'Place fish in dry, smoking hot skillet.',
      'Cook 2-3 minutes per side until blackened.',
      'Drizzle with remaining butter and serve immediately.'
    ]
  },
  {
    id: 9,
    title: 'New Orleans Shrimp Creole',
    subtitle: 'Bold Bayou Flavor',
    description: 'Spicy, bold, and full of Bayou flavor—fresh Gulf shrimp simmered in a tomato-herb sauce with homemade shrimp stock.',
    category: 'Cajun & Creole',
    categorySlug: 'cajun',
    time: '1 hour',
    servings: 10,
    image: null,
    featured: true,
    ingredients: [
      '2 lbs shrimp, peeled and deveined',
      '1 can crushed tomatoes',
      '1 can tomato sauce',
      '1 large onion, diced',
      '1 green bell pepper, diced',
      '2 celery stalks, diced',
      '4 cloves garlic, minced',
      '2 cups shrimp stock',
      '2 tsp Creole seasoning',
      'Bay leaves, thyme, hot sauce',
      'Cooked white rice for serving'
    ],
    instructions: [
      'Sauté onion, bell pepper, and celery in butter until softened.',
      'Add garlic and cook 1 minute.',
      'Add tomatoes, tomato sauce, stock, and seasonings.',
      'Simmer 30 minutes to develop flavors.',
      'Add shrimp and cook 8-10 minutes until pink.',
      'Serve over steaming white rice.'
    ]
  },
  
  // SOUTHERN SOUL FOOD (combined Comfort Food & Southern Sides)
  {
    id: 15,
    title: "Shrimp & Oyster Po'Boy",
    subtitle: 'The Classic Half and Half',
    description: "The revered 'half and half' combines fried shrimp and oysters—served dressed on Leidenheimer French bread.",
    category: 'Cajun & Creole',
    categorySlug: 'cajun',
    time: '35 min',
    servings: 2,
    image: null,
    featured: false,
    ingredients: [
      '1/2 lb shrimp, peeled',
      '12 oysters, shucked',
      '1 cup flour',
      '1 cup cornmeal',
      'Creole seasoning',
      'Oil for frying',
      'French bread loaves',
      'Mayonnaise, lettuce, tomatoes, pickles',
      'Hot sauce'
    ],
    instructions: [
      'Mix flour, cornmeal, and Creole seasoning.',
      'Dredge shrimp and oysters in the mixture.',
      'Fry in 350°F oil until golden, about 3 minutes.',
      'Toast French bread.',
      'Spread with mayo, add lettuce and tomatoes.',
      'Pile fried seafood on bread.',
      'Top with pickles and hot sauce.'
    ]
  },
  {
    id: 16,
    title: 'Classic Muffuletta Sandwich',
    subtitle: "Central Grocery's Creation",
    description: 'Layers of Italian meats and cheese with briny olive salad on sesame bread.',
    category: 'Cajun & Creole',
    categorySlug: 'cajun',
    time: '20 min + overnight',
    servings: 6,
    image: null,
    featured: false,
    ingredients: [
      '1 large muffuletta loaf',
      '1/4 lb Genoa salami',
      '1/4 lb ham',
      '1/4 lb mortadella',
      '1/4 lb provolone cheese',
      '1/4 lb mozzarella cheese',
      '1 cup green olives, chopped',
      '1/2 cup Kalamata olives, chopped',
      '1/2 cup giardiniera, chopped',
      '1/4 cup olive oil',
      '2 cloves garlic, minced'
    ],
    instructions: [
      'Make olive salad by mixing olives, giardiniera, olive oil, and garlic. Refrigerate overnight.',
      'Slice bread in half horizontally.',
      'Spread generous layer of olive salad on both cut sides.',
      'Layer meats and cheeses on bottom half.',
      'Top with more olive salad and the bread top.',
      'Press and let sit 30 minutes. Slice into wedges.'
    ]
  },
  {
    id: 25,
    title: 'Chicken & Sausage Gumbo',
    subtitle: 'A Labor of Love',
    description: 'Dark chocolate-brown roux, succulent chicken, smoky sausage, and aromatic vegetables—a celebration of Creole heritage.',
    category: 'Cajun & Creole',
    categorySlug: 'cajun',
    time: '3 hours',
    servings: 8,
    image: null,
    featured: false,
    ingredients: [
      '1 whole chicken, cut into pieces',
      '1 lb andouille sausage, sliced',
      '1 cup vegetable oil',
      '1 cup all-purpose flour',
      '1 large onion, diced',
      '1 green bell pepper, diced',
      '3 celery stalks, diced',
      '4 cloves garlic, minced',
      '8 cups chicken stock',
      'Bay leaves, thyme, Creole seasoning',
      'File powder, cooked rice'
    ],
    instructions: [
      'Season chicken and brown in a large pot. Remove and set aside.',
      'Make a dark roux by whisking oil and flour for 45 minutes until chocolate brown.',
      'Add holy trinity and cook until softened.',
      'Add garlic, stock, and seasonings.',
      'Return chicken to pot and simmer 1.5 hours.',
      'Add sausage and cook 30 minutes more.',
      'Serve over rice with file powder.'
    ]
  },
  {
    id: 26,
    title: 'White Beans with Smoked Sausage',
    subtitle: 'Rustic & Soulful',
    description: 'Creamy baby limas, bold Creole seasonings, smoked sausage, and tender pickled pork.',
    category: 'Cajun & Creole',
    categorySlug: 'cajun',
    time: '2.5 hours',
    servings: 10,
    image: null,
    featured: false,
    ingredients: [
      '1 lb dried baby lima beans, soaked overnight',
      '1 lb smoked sausage, sliced',
      '1/2 lb pickled pork or ham hock',
      '1 large onion, diced',
      '3 celery stalks, diced',
      '4 cloves garlic, minced',
      '2 bay leaves',
      '1 tsp dried thyme',
      '1 tsp Creole seasoning',
      'Cooked rice for serving'
    ],
    instructions: [
      'Drain beans and add to pot with 8 cups water.',
      'Add pickled pork and bring to a boil.',
      'Reduce heat and simmer 1 hour.',
      'Brown sausage in a skillet. Add to beans.',
      'Sauté onion, celery, and garlic. Add to beans.',
      'Add bay leaves, thyme, and Creole seasoning.',
      'Simmer 1 more hour until beans are creamy.',
      'Serve over rice.'
    ]
  },
  
  {
    id: 19,
    title: 'Corn Maque Choux',
    subtitle: 'Louisiana Summer Side',
    description: 'Smothered Creole corn with tomatoes, peppers, and onions—a vibrant Louisiana summer side dish.',
    category: 'Cajun & Creole',
    categorySlug: 'cajun',
    time: '50 min',
    servings: 8,
    image: null,
    featured: false,
    ingredients: [
      '6 ears fresh corn, kernels cut off',
      '4 tbsp butter',
      '1 onion, diced',
      '1 green bell pepper, diced',
      '2 tomatoes, diced',
      '1/2 cup heavy cream',
      '1 tsp Cajun seasoning',
      'Green onions for garnish'
    ],
    instructions: [
      'Melt butter in a large skillet over medium heat.',
      'Sauté onion and bell pepper until softened.',
      'Add corn kernels and cook 10 minutes, stirring often.',
      'Add tomatoes and cook 5 minutes.',
      'Stir in cream and Cajun seasoning.',
      'Simmer 10 minutes until thickened.',
      'Garnish with green onions.'
    ]
  },
  {
    id: 21,
    title: 'Gumbo Style Collard Greens',
    subtitle: 'Southern Harmony Meets Creole Soul',
    description: 'Assorted greens simmered with roux, smoked turkey, and andouille in a rich, spiced broth.',
    category: 'Southern Soul Food',
    categorySlug: 'soulfood',
    time: '1.5 hours',
    servings: 10,
    image: null,
    featured: false,
    ingredients: [
      '2 lbs collard greens, cleaned and chopped',
      '1 lb smoked turkey legs',
      '1/2 lb andouille sausage, sliced',
      '1 onion, diced',
      '4 cloves garlic, minced',
      '4 cups chicken broth',
      '2 tbsp oil',
      '2 tbsp flour',
      'Hot sauce, vinegar'
    ],
    instructions: [
      'Make a light roux with oil and flour.',
      'Add onion and garlic, cook until softened.',
      'Add broth and bring to a simmer.',
      'Add smoked turkey and cook 30 minutes.',
      'Add greens and sausage.',
      'Simmer 1 hour until greens are tender.',
      'Season with hot sauce and vinegar to taste.'
    ]
  },
  {
    id: 40,
    title: 'Southern Baked Mac & Cheese',
    subtitle: 'Creamy & Golden',
    description: 'Rich, creamy, and baked with a cheesy crust. Loaded with sharp cheddar and baked until golden and bubbling.',
    category: 'Southern Soul Food',
    categorySlug: 'soulfood',
    time: '1 hour',
    servings: 10,
    image: null,
    featured: false,
    ingredients: [
      '1 lb elbow macaroni',
      '2 cups sharp cheddar, shredded',
      '4 tbsp butter',
      '1 cup Monterey Jack, shredded',
      '1/4 cup flour',
      '1/2 tsp garlic powder',
      '3 cups whole milk',
      '1/2 tsp paprika',
      'Kosher salt and black pepper'
    ],
    instructions: [
      'Boil pasta just until tender, drain and set aside.',
      'Melt butter in a saucepan, stir in flour, and cook 1-2 minutes.',
      'Slowly whisk in milk and then cheeses, simmer until melted and thickened.',
      'Add seasonings and pasta.',
      'Pour into a greased baking dish.',
      'Bake at 375°F for 25-30 minutes until golden and bubbling.'
    ]
  },
  {
    id: 41,
    title: 'BBQ Baked Beans',
    subtitle: 'Smoky & Sweet',
    description: 'Slow-cooked with crispy bacon, caramelized onions, molasses, and brown sugar for sticky, savory perfection.',
    category: 'Southern Soul Food',
    categorySlug: 'soulfood',
    time: '1.5 hours',
    servings: 8,
    image: null,
    featured: false,
    ingredients: [
      '2 (15 oz) cans pinto beans, drained',
      '1/2 cup Sweet BBQ Sauce',
      '1/4 cup brown sugar',
      '1/2 small onion, diced',
      '4 slices bacon, chopped',
      '1 tbsp yellow mustard',
      '1 tbsp molasses',
      '1/2 tsp cracked black pepper'
    ],
    instructions: [
      'Cook bacon in a skillet until crispy. Remove and set aside.',
      'Sauté onion in bacon drippings.',
      'Combine beans, all seasonings, bacon, and onion in a Dutch oven.',
      'Smoke at 250°F uncovered for 45 minutes until bubbly and thickened.',
      'For extra smokiness, add a dash of liquid smoke.'
    ]
  },
  {
    id: 42,
    title: 'Classic Deviled Eggs',
    subtitle: 'Picnic Perfect',
    description: 'Smooth, rich, tangy, and picnic-perfect. Whipped with mayo, mustard, and topped with smoked paprika.',
    category: 'Southern Soul Food',
    categorySlug: 'soulfood',
    time: '30 min',
    servings: 12,
    image: null,
    featured: false,
    ingredients: [
      '6 large eggs',
      '3 tbsp mayonnaise',
      '1 tsp yellow mustard',
      '1 tsp apple cider vinegar or pickle juice',
      'Kosher salt and cracked black pepper',
      'Paprika for garnish',
      'Finely chopped pickles or relish'
    ],
    instructions: [
      'Boil eggs for 15-20 minutes, then transfer to ice bath.',
      'Peel and slice eggs in half lengthwise.',
      'Remove yolks and mash in a bowl.',
      'Mix yolks with mayo, mustard, vinegar, pickles, salt, and pepper.',
      'Pipe or spoon mixture back into egg whites.',
      'Sprinkle with paprika. Chill before serving.'
    ]
  },
  {
    id: 43,
    title: 'Creamy Southern Coleslaw',
    subtitle: 'Cool & Tangy',
    description: 'Crisp cabbage, shredded carrots, and a rich, tangy mayo-based dressing. Perfect for cutting through smoky meats.',
    category: 'Southern Soul Food',
    categorySlug: 'soulfood',
    time: '15 min',
    servings: 8,
    image: null,
    featured: false,
    ingredients: [
      '1 small head green cabbage, shredded',
      '1/2 red onion, thinly sliced',
      '1 carrot, grated',
      '1/2 cup mayo',
      '2 tbsp apple cider vinegar',
      '1 tbsp sugar',
      '1 tsp celery seed',
      'Kosher salt and pepper'
    ],
    instructions: [
      'Mix shredded cabbage, onion, and carrot in a large bowl.',
      'Whisk together mayo, vinegar, sugar, and seasonings.',
      'Toss dressing with vegetables.',
      'Chill 1 hour before serving.'
    ]
  },
  {
    id: 44,
    title: 'Mexican Street Corn (Elotes)',
    subtitle: 'Bold & Crave-Worthy',
    description: 'Tender corn brushed with zesty cream sauce, layered with spices, cheese, and fresh herbs.',
    category: 'Southern Soul Food',
    categorySlug: 'soulfood',
    time: '25 min',
    servings: 4,
    image: null,
    featured: false,
    ingredients: [
      '4 ears fresh sweet corn',
      '1/4 cup mayonnaise',
      '1/4 cup sour cream',
      'Juice of 1 lime',
      '1 tsp paprika',
      '1 tsp garlic powder',
      '1/4 tsp cayenne pepper',
      '1/2 cup cotija cheese, grated',
      'Fresh cilantro'
    ],
    instructions: [
      'Boil corn for 10 minutes. Let cool slightly.',
      'Mix mayo, sour cream, and lime juice.',
      'Combine paprika, garlic powder, cayenne, salt, and pepper.',
      'Brush corn with cream mixture.',
      'Sprinkle with cotija cheese and spice mixture.',
      'Top with cilantro.'
    ]
  },
  {
    id: 45,
    title: 'Sweet Cornbread Honey Cakes',
    subtitle: 'Golden & Sweet',
    description: 'Fluffy, golden bites kissed with honey. Crisp outside, tender inside, brushed with honey butter.',
    category: 'Southern Soul Food',
    categorySlug: 'soulfood',
    time: '30 min',
    servings: 12,
    image: null,
    featured: false,
    ingredients: [
      '1 cup cornmeal',
      '1 cup flour',
      '1/2 cup sugar',
      '1 tbsp baking powder',
      '2 eggs',
      '1 cup buttermilk',
      '1/4 cup melted butter',
      '2 tbsp honey'
    ],
    instructions: [
      'Mix dry ingredients, then add wet. Stir until just combined.',
      'Pour into muffin tin or mini loaf pans.',
      'Bake at 350°F for 20-25 minutes.',
      'Brush with more honey before serving.',
      'Optional: Add a pinch of cayenne for sweet heat.'
    ]
  },
  
  // BBQ & SMOKEHOUSE
  {
    id: 23,
    title: 'Boudin Balls',
    subtitle: 'Ultimate Louisiana Bar Snack',
    description: 'Crispy fried spheres of Cajun boudin sausage—crunchy outside, savory rice and pork inside.',
    category: 'Cajun & Creole',
    categorySlug: 'cajun',
    time: '40 min',
    servings: 24,
    image: null,
    featured: false,
    ingredients: [
      '2 lbs boudin sausage',
      '1 cup flour',
      '2 eggs, beaten',
      '2 cups panko breadcrumbs',
      '1 tsp Cajun seasoning',
      'Oil for frying',
      'Creole mustard for dipping'
    ],
    instructions: [
      'Remove boudin from casings.',
      'Roll into 1-inch balls.',
      'Set up breading station: flour, eggs, seasoned panko.',
      'Dredge balls in flour, dip in egg, coat in panko.',
      'Fry at 350°F for 3-4 minutes until golden.',
      'Serve with Creole mustard.'
    ]
  },
  {
    id: 46,
    title: 'Smoked Beef Ribs',
    subtitle: 'The Caveman Cut',
    description: 'Thick, meaty, and primal with a deep smoky bark and bone-deep flavor. For serious BBQ lovers.',
    category: 'BBQ & Smokehouse',
    categorySlug: 'bbq',
    time: '6 hours',
    servings: 4,
    image: null,
    featured: true,
    ingredients: [
      '5-7 lb trimmed, 3-bone Dino Ribs',
      'Garlic Butter Steak Blend',
      'Apple cider vinegar',
      'Kosher salt & black pepper'
    ],
    instructions: [
      'Remove top layer fat and silver skin so seasoning can penetrate.',
      'Coat ribs generously with 50/50 salt and pepper, plus Steak Blend. Rest 1-2 hours.',
      'Smoke at 250°F, fat side up, for 3-4 hours until internal temp reaches 190°F.',
      'Spritz with 50/50 water and apple cider vinegar.',
      'Wrap in foil or butcher paper, smoke 2 hours until internal temp reaches 195-200°F.',
      'Rest 1-2 hours before slicing.'
    ],
    proTip: 'The bark on top should feel like butter when you press it.'
  },
  {
    id: 47,
    title: 'Slow Smoked Brisket',
    subtitle: 'Low & Slow Perfection',
    description: 'Tender, bark-covered brisket with deep smoke flavor. Seasoned with bold dry rub and smoked for hours.',
    category: 'BBQ & Smokehouse',
    categorySlug: 'bbq',
    time: '14 hours',
    servings: 12,
    image: null,
    featured: true,
    ingredients: [
      '1 full packer brisket (point and flat)',
      'Kosher salt and ground black pepper',
      'Mississippi Delta Mop Sauce'
    ],
    instructions: [
      'Trim excess fat, leaving 1/4-inch fat cap. Square off edges.',
      'Apply rub generously. Wrap and refrigerate overnight.',
      'Bring to room temperature before smoking.',
      'Smoke fat-side up at 225-250°F for 10-14 hours, mopping every 2 hours.',
      'Wrap in butcher paper when bark is set (around 165°F).',
      'Continue until internal temp reaches 195-205°F.',
      'Rest 1 hour. Slice against the grain. Drizzle with saved juices.'
    ]
  },
  {
    id: 48,
    title: 'Sweet Baby Back Ribs',
    subtitle: 'Caramelized Perfection',
    description: 'Juicy, tender ribs with a caramelized finish. The perfect balance of savory, smoky, and sweet.',
    category: 'BBQ & Smokehouse',
    categorySlug: 'bbq',
    time: '6 hours',
    servings: 6,
    image: null,
    featured: true,
    ingredients: [
      '2 racks baby back ribs',
      'Apple juice for spritzing',
      'Sweet Heat Rib Rub',
      'BBQ Sauce'
    ],
    instructions: [
      'Score membrane on back of ribs to let seasoning and smoke penetrate.',
      'Rub generously with seasoning. Rest 1-2 hours.',
      'Preheat smoker to 225°F.',
      'Smoke 3 hours, spritzing with apple juice every hour.',
      'Wrap in foil with a splash of apple juice. Cook 2 more hours.',
      'Unwrap and baste with BBQ sauce. Finish until caramelized.'
    ]
  },
  {
    id: 49,
    title: 'Perfect Pulled Pork',
    subtitle: 'Melt-in-Your-Mouth',
    description: 'Smoky, tender pork butt with perfect bark. Slow-smoked until it shreds effortlessly.',
    category: 'BBQ & Smokehouse',
    categorySlug: 'bbq',
    time: '10 hours',
    servings: 12,
    image: null,
    featured: true,
    ingredients: [
      '1 bone-in pork butt with fat cap',
      'Salt and pepper mix or dry rub',
      'Mississippi Delta Mop Sauce',
      'Apple cider vinegar'
    ],
    instructions: [
      'Score the fat on top of the pork butt.',
      'Apply your choice of salt/pepper mix or rub.',
      'Smoke at 250°F fat side up for 3-4 hours, spritzing with vinegar every hour.',
      'Lightly mop with Mississippi Delta Mop Sauce.',
      'Wrap in foil and cook 2-3 more hours until internal temp reaches 200-203°F.',
      'Rest 1 hour before shredding.'
    ],
    proTip: 'Shred only as needed to keep meat moist. Serve on King\'s Hawaiian rolls.'
  },
  {
    id: 50,
    title: 'Grilled Ribeye Steak',
    subtitle: 'Steakhouse Quality',
    description: 'Charred outside, juicy inside. Melt-in-your-mouth with unmistakable smoky char.',
    category: 'BBQ & Smokehouse',
    categorySlug: 'bbq',
    time: '30 min',
    servings: 4,
    image: null,
    featured: false,
    ingredients: [
      '2 ribeye steaks (1-1.5 inches thick)',
      'Garlic Butter Steak Blend',
      'Olive oil',
      'Butter for finishing'
    ],
    instructions: [
      'Pat steaks dry. Rub with olive oil and season generously.',
      'Let sit at room temperature for 30-45 minutes.',
      'Grill over high heat at 375°F for 3-5 minutes per side.',
      'Flip only once. Rest 5-10 minutes before slicing.',
      'Top with a pat of garlic herb butter.'
    ]
  },
  {
    id: 51,
    title: 'BBQ Chicken Quarters',
    subtitle: 'Crispy & Juicy',
    description: 'Crispy skin, juicy meat, bold flavor. Great for cookouts or weeknight dinners.',
    category: 'BBQ & Smokehouse',
    categorySlug: 'bbq',
    time: '2 hours',
    servings: 4,
    image: null,
    featured: false,
    ingredients: [
      '4 chicken leg quarters',
      'Garlic Herb Chicken Dust',
      'BBQ Sauce'
    ],
    instructions: [
      'Season chicken with Garlic Herb Chicken Dust.',
      'Marinate in fridge 4-6 hours.',
      'Bring to room temperature before grilling.',
      'Preheat grill or smoker to 275°F.',
      'Cook over indirect heat 1.5-2 hours until internal temp is 175°F.',
      'Glaze with BBQ sauce in the final 10 minutes.'
    ]
  },
  {
    id: 52,
    title: 'Jamaican Jerk Chicken Thighs',
    subtitle: 'Fiery Island Heat',
    description: 'Fiery, fragrant, and fall-apart tender with tropical heat in every bite.',
    category: 'BBQ & Smokehouse',
    categorySlug: 'bbq',
    time: '1 hour + overnight',
    servings: 4,
    image: null,
    featured: false,
    ingredients: [
      '4-6 boneless skin-on thighs',
      'Spicy Jerk Marinade',
      'Pineapple or mango glaze (optional)'
    ],
    instructions: [
      'Marinate chicken 6-8 hours or overnight.',
      'Bring to room temperature before grilling.',
      'Grill or smoke at 300°F for 45 minutes until well done.',
      'Add pineapple or mango glaze during final 10 minutes.',
      'Serve with coconut rice or grilled plantains.'
    ]
  },
  {
    id: 53,
    title: 'Backyard Smash Burgers',
    subtitle: 'Crispy Edge Perfection',
    description: 'Crispy edges, juicy centers, loaded flavor. Fast, flavorful, and completely crave-worthy.',
    category: 'BBQ & Smokehouse',
    categorySlug: 'bbq',
    time: '20 min',
    servings: 6,
    image: null,
    featured: false,
    ingredients: [
      '2 lbs 80/20 ground chuck',
      'Garlic Butter Steak Blend (or salt and pepper)',
      'American cheese slices',
      'Burger buns',
      'Your favorite toppings'
    ],
    instructions: [
      'Keep meat cold! Form loosely packed 3-4 oz balls.',
      'Heat griddle or cast-iron over high heat to 375°F.',
      'Place meat on hot surface and smash flat immediately.',
      'Season and cook 2-3 minutes per side until crispy edges form.',
      'Add cheese after the flip. Toast buns.',
      'Assemble with your favorite fixings.'
    ],
    proTip: 'Don\'t overwork the meat. Keep it loose for maximum juiciness.'
  },
  {
    id: 54,
    title: 'Grilled Smoked Sausage',
    subtitle: 'Perfect Snap & Char',
    description: 'Smoky, juicy sausage finished over open flame for perfect snap and char. Serve on a hoagie or as a BBQ side.',
    category: 'BBQ & Smokehouse',
    categorySlug: 'bbq',
    time: '30 min',
    servings: 4,
    image: null,
    featured: false,
    ingredients: [
      '2 lbs smoked sausage',
      '1 tbsp Dijon mustard',
      '1 tbsp honey or brown sugar',
      '2 tbsp olive oil',
      '1 tbsp Creole seasoning'
    ],
    instructions: [
      'Preheat grill to 375-400°F.',
      'Mix olive oil, seasoning, and mustard. Brush over sausages.',
      'Grill over indirect heat 10-12 minutes, turning occasionally.',
      'Move to direct heat for 3-5 minutes per side until crisp.',
      'Mix honey with water, brush over sausages in last minute.'
    ],
    proTip: 'For Texas-style, smoke low (225°F) for 30 minutes first, then finish on grill.'
  },
  {
    id: 55,
    title: 'Crispy Lemon Pepper Wings',
    subtitle: 'Zesty & Addictive',
    description: 'Crispy-skinned, zesty, and peppery wings that fly off the plate. Perfect for game day.',
    category: 'BBQ & Smokehouse',
    categorySlug: 'bbq',
    time: '1 hour',
    servings: 6,
    image: null,
    featured: false,
    ingredients: [
      '2 lbs chicken wings',
      '1 tbsp baking powder',
      '1.5 tsp kosher salt',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1 tbsp lemon zest',
      '1/2 tsp black pepper',
      'Butter, lemon juice, cayenne for sauce'
    ],
    instructions: [
      'Pat wings completely dry.',
      'Toss with baking powder, salt, garlic, onion powder, pepper, and lemon zest.',
      'Bake at 425°F on wire rack for 40-45 minutes, flipping halfway.',
      'Whisk melted butter, lemon juice, zest, pepper, garlic powder, and cayenne.',
      'Toss hot wings in lemon pepper butter sauce.'
    ]
  },
  {
    id: 56,
    title: 'Smoked Jalapeño Brisket Poppers',
    subtitle: 'Bacon-Wrapped Flavor Bombs',
    description: 'Creamy, smoky, spicy jalapeños stuffed with brisket and cheese, wrapped in bacon.',
    category: 'BBQ & Smokehouse',
    categorySlug: 'bbq',
    time: '1.5 hours',
    servings: 10,
    image: null,
    featured: false,
    ingredients: [
      '10 large jalapeños',
      '1 cup chopped smoked brisket',
      '8 oz cream cheese, softened',
      '1 cup cheddar cheese',
      '1/2 tsp each garlic and onion powder',
      '10 slices thick-cut bacon',
      'BBQ Sauce for glaze'
    ],
    instructions: [
      'Slice jalapeños lengthwise and remove seeds.',
      'Mix cream cheese, brisket, cheddar, and seasonings.',
      'Fill each jalapeño half with mixture.',
      'Wrap tightly with bacon, secure with toothpicks.',
      'Smoke at 250°F for 1 hour until bacon is crisp.',
      'Brush with BBQ sauce in last 15 minutes.'
    ]
  },
  {
    id: 57,
    title: 'Grilled Lamb Chops',
    subtitle: 'Herb & Maple Crust',
    description: 'Charred edges, sweet-savory crust, and herbaceous depth. Elegant yet bold.',
    category: 'BBQ & Smokehouse',
    categorySlug: 'bbq',
    time: '30 min',
    servings: 4,
    image: null,
    featured: false,
    ingredients: [
      '8 lamb rib chops',
      'Apple Cider & Herb Marinade',
      'Smoked Maple Marinade'
    ],
    instructions: [
      'Marinate chops for 1 hour.',
      'Sear over high heat for 3-4 minutes per side.',
      'Brush with Smoked Maple Marinade and grill 1 minute.',
      'Rest 5-7 minutes before serving.'
    ]
  },
  
  // DESSERTS
  {
    id: 30,
    title: 'New Orleans Bread Pudding',
    subtitle: 'With Bourbon Sauce',
    description: 'Custardy French bread soaked in vanilla and cinnamon, baked golden and drizzled with warm bourbon sauce.',
    category: 'Desserts',
    categorySlug: 'desserts',
    time: '1.5 hours',
    servings: 12,
    image: null,
    featured: true,
    ingredients: [
      '1 loaf stale French bread, cubed',
      '4 cups milk',
      '4 eggs',
      '2 cups sugar',
      '2 tbsp vanilla extract',
      '1 tsp cinnamon',
      '1/2 tsp nutmeg',
      '1 cup raisins',
      '4 tbsp butter, melted',
      'For sauce: butter, sugar, egg, bourbon'
    ],
    instructions: [
      'Soak bread cubes in milk for 30 minutes.',
      'Beat eggs with sugar, vanilla, cinnamon, and nutmeg.',
      'Combine with bread mixture and add raisins.',
      'Pour into buttered baking dish.',
      'Bake at 350°F for 45-50 minutes until set.',
      'For bourbon sauce: melt butter, whisk in sugar and egg, add bourbon.',
      'Serve warm pudding with warm bourbon sauce.'
    ]
  },
  {
    id: 31,
    title: 'Classic Beignets',
    subtitle: 'Café du Monde Style',
    description: 'Light, pillowy fried dough dusted with mountains of powdered sugar—the iconic New Orleans treat.',
    category: 'Desserts',
    categorySlug: 'desserts',
    time: '2 hours',
    servings: 24,
    image: null,
    featured: false,
    ingredients: [
      '1 cup warm water',
      '1/4 cup sugar',
      '1 packet active dry yeast',
      '1/2 cup evaporated milk',
      '1 egg, beaten',
      '1 tsp vanilla',
      '4 cups flour',
      '1/4 tsp salt',
      'Oil for frying',
      'Powdered sugar for dusting'
    ],
    instructions: [
      'Dissolve yeast and sugar in warm water. Let sit 10 minutes.',
      'Add milk, egg, and vanilla. Mix well.',
      'Gradually add flour and salt. Knead until smooth.',
      'Cover and let rise 2 hours.',
      'Roll dough 1/4 inch thick. Cut into squares.',
      'Fry at 360°F until golden, about 2-3 minutes per side.',
      'Drain and dust generously with powdered sugar.'
    ]
  },
  {
    id: 32,
    title: 'Bananas Foster',
    subtitle: "Brennan's Tableside Classic",
    description: 'Caramelized bananas flambéed in rum and banana liqueur, served over vanilla ice cream.',
    category: 'Desserts',
    categorySlug: 'desserts',
    time: '15 min',
    servings: 4,
    image: null,
    featured: false,
    ingredients: [
      '4 bananas, sliced lengthwise',
      '1/4 cup butter',
      '1 cup brown sugar',
      '1/2 tsp cinnamon',
      '1/4 cup banana liqueur',
      '1/4 cup dark rum',
      'Vanilla ice cream'
    ],
    instructions: [
      'Melt butter in a skillet over medium heat.',
      'Add brown sugar and cinnamon. Stir until dissolved.',
      'Add bananas and cook until softened.',
      'Add banana liqueur and rum. Carefully ignite.',
      'Let flames subside while spooning sauce over bananas.',
      'Serve immediately over vanilla ice cream.'
    ]
  },
  {
    id: 33,
    title: 'Southern Pecan Pralines',
    subtitle: 'Creamy & Crunchy',
    description: 'Buttery, brown sugar confections loaded with toasted pecans—a beloved New Orleans candy tradition.',
    category: 'Desserts',
    categorySlug: 'desserts',
    time: '30 min',
    servings: 24,
    image: null,
    featured: false,
    ingredients: [
      '1.5 cups sugar',
      '1.5 cups brown sugar',
      '1 cup evaporated milk',
      '1/4 cup butter',
      '2 cups pecan halves',
      '1 tsp vanilla extract'
    ],
    instructions: [
      'Combine sugars and milk in a heavy saucepan.',
      'Cook over medium heat, stirring constantly, to soft ball stage (236°F).',
      'Remove from heat. Add butter, pecans, and vanilla.',
      'Beat until mixture starts to thicken and lose its gloss.',
      'Quickly drop by spoonfuls onto wax paper.',
      'Let cool completely before serving.'
    ]
  },
  {
    id: 35,
    title: 'King Cake',
    subtitle: 'Mardi Gras Tradition',
    description: 'Cinnamon-swirled brioche ring topped with purple, gold, and green icing—a Carnival essential.',
    category: 'Desserts',
    categorySlug: 'desserts',
    time: '4 hours',
    servings: 16,
    image: null,
    featured: false,
    ingredients: [
      '1 cup warm milk',
      '2 packets active dry yeast',
      '1/2 cup sugar',
      '5 cups flour',
      '1 tsp salt',
      '5 eggs',
      '1 cup butter, softened',
      '2 tsp cinnamon',
      'Colored sugar (purple, gold, green)',
      'Cream cheese icing'
    ],
    instructions: [
      'Dissolve yeast in warm milk with 1 tbsp sugar.',
      'Mix flour, remaining sugar, and salt. Add eggs, yeast mixture, and butter.',
      'Knead until smooth. Let rise 2 hours.',
      'Roll into rectangle, sprinkle with cinnamon sugar.',
      'Roll up and form into a ring. Let rise 1 hour.',
      'Bake at 350°F for 25-30 minutes.',
      'Drizzle with icing and sprinkle with colored sugars.'
    ]
  },
  {
    id: 36,
    title: 'Sweet Potato Pie',
    subtitle: 'Southern Soul Food Staple',
    description: 'Silky spiced sweet potato custard in a flaky crust—a soul food dessert that rivals any pumpkin pie.',
    category: 'Desserts',
    categorySlug: 'desserts',
    time: '1.5 hours',
    servings: 8,
    image: null,
    featured: false,
    ingredients: [
      '2 cups mashed sweet potatoes',
      '1 cup sugar',
      '1/2 cup butter, melted',
      '2 eggs',
      '1/2 cup evaporated milk',
      '1 tsp vanilla',
      '1 tsp cinnamon',
      '1/2 tsp nutmeg',
      '1 unbaked 9-inch pie crust'
    ],
    instructions: [
      'Preheat oven to 350°F.',
      'Beat sweet potatoes with sugar and butter until smooth.',
      'Add eggs, milk, vanilla, and spices. Mix well.',
      'Pour into pie crust.',
      'Bake 55-60 minutes until set.',
      'Cool before serving with whipped cream.'
    ]
  },
  {
    id: 37,
    title: 'Creole Cream Cheese Cheesecake',
    subtitle: 'New Orleans Original',
    description: 'Tangy Creole cream cheese creates a lighter, more delicate cheesecake with a graham cracker crust.',
    category: 'Desserts',
    categorySlug: 'desserts',
    time: '5 hours',
    servings: 12,
    image: null,
    featured: false,
    ingredients: [
      '2 cups graham cracker crumbs',
      '1/2 cup butter, melted',
      '24 oz cream cheese, softened',
      '1 cup Creole cream cheese',
      '1 cup sugar',
      '4 eggs',
      '2 tsp vanilla extract',
      '1/4 cup flour'
    ],
    instructions: [
      'Press crumb mixture into springform pan. Bake at 325°F for 10 minutes.',
      'Beat cream cheeses with sugar until smooth.',
      'Add eggs one at a time, then vanilla and flour.',
      'Pour into crust and bake 50-60 minutes.',
      'Cool in oven with door cracked for 1 hour.',
      'Refrigerate at least 4 hours before serving.'
    ]
  },
  {
    id: 38,
    title: 'Bourbon Pecan Brownies',
    subtitle: 'Decadent & Fudgy',
    description: 'Rich chocolate brownies laced with bourbon and topped with caramelized pecans.',
    category: 'Desserts',
    categorySlug: 'desserts',
    time: '1 hour',
    servings: 16,
    image: null,
    featured: false,
    ingredients: [
      '1 cup butter',
      '2 cups sugar',
      '4 eggs',
      '1 cup cocoa powder',
      '1 cup flour',
      '1/4 cup bourbon',
      '1 tsp vanilla',
      '1 cup pecans, chopped',
      '1/2 cup brown sugar'
    ],
    instructions: [
      'Melt butter, stir in sugar, eggs, cocoa, flour, bourbon, and vanilla.',
      'Pour into greased 9x13 pan.',
      'Top with pecans and sprinkle with brown sugar.',
      'Bake at 350°F for 30-35 minutes.',
      'Cool completely before cutting.'
    ]
  },
  {
    id: 39,
    title: 'Café au Lait Pots de Crème',
    subtitle: 'French Quarter Elegance',
    description: 'Silky coffee-infused custard with chicory notes, topped with fresh whipped cream.',
    category: 'Desserts',
    categorySlug: 'desserts',
    time: '4 hours',
    servings: 6,
    image: null,
    featured: false,
    ingredients: [
      '2 cups heavy cream',
      '3 tbsp instant coffee or chicory coffee',
      '6 egg yolks',
      '1/2 cup sugar',
      '1 tsp vanilla extract',
      'Pinch of salt',
      'Whipped cream for serving'
    ],
    instructions: [
      'Heat cream with coffee until steaming. Let steep 10 minutes.',
      'Whisk egg yolks with sugar, vanilla, and salt.',
      'Slowly pour cream into yolks, whisking constantly.',
      'Strain and divide among ramekins.',
      'Bake in water bath at 325°F for 40-45 minutes.',
      'Chill at least 3 hours. Serve with whipped cream.'
    ]
  },
  {
    id: 67,
    title: 'Easy Crab Dip',
    subtitle: 'Crowd-Pleasing Appetizer',
    description: 'Creamy, savory dip with sweet crab and a kick from horseradish. Quick to make and quick to disappear.',
    category: 'Southern Sides',
    categorySlug: 'sides',
    time: '20 min',
    servings: 8,
    image: null,
    featured: false,
    ingredients: [
      '16 oz fresh lump crabmeat',
      '16 oz cream cheese, room temp',
      'Horseradish to taste',
      'Salt to taste',
      'Paprika for garnish',
      'Parsley, minced',
      'Slivered almonds (optional)'
    ],
    instructions: [
      'Pick through crabmeat to remove any cartilage.',
      'Combine crabmeat and cream cheese until blended.',
      'Stir in 2-4 tbsp horseradish to taste.',
      'Add a splash of cream if you prefer thinner consistency.',
      'Transfer to ovenproof dish, sprinkle with paprika.',
      'Broil until rosy-golden. Serve warm with crackers.'
    ]
  }
];

// Helper functions
export const featuredRecipes = recipes.filter(recipe => recipe.featured);

export const getRecipesByCategory = (categorySlug: string) => {
  if (categorySlug === 'all') return recipes;
  return recipes.filter(recipe => recipe.categorySlug === categorySlug);
};

export const getRecipeById = (id: number) => {
  return recipes.find(recipe => recipe.id === id);
};

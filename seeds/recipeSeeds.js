const { Product } = require('../models');

const productData = [
  {
    title: 'Breakfast Caserole',
    content: `Main ingredients for this egg casserole include: eggs, sausage, bell peppers, onion and cheese.`,
    user_id: 3,
  },
  {
    title: 'Chickpea Salad Sandwiches',
    content: `One 15-ounce can chickpeas, drained and rinsed

    3 tablespoons mayonnaise or vegan mayonnaise spread
    
    1 tablespoon fresh lemon juice
    
    1 tablespoon roughly chopped fresh dill
    
    2 teaspoons capers
    
    1 1/2 teaspoons stone-ground mustard
    
    1/2 teaspoon ground turmeric
    
    Kosher salt and freshly ground black pepper
    
    2 tablespoons roasted unsalted pepitas
    
    1 cup lightly packed baby kale
    
    4 slices whole wheat bread toasted`,
    user_id: 2,
  }, 
  {
    title: 'Five Spice Chicken Sheet Pan Dinner',
    content: `Bone in skin on chicken thighs
    1 Head of cabbage, cut into 1" wedges
    3 Large carrots, peeled and cut into 2" pieces
    1 tbsp
    Soy sauce (or tamari)
    1 tbsp
    Five spice powder
    2 tbsp
    Honey
    1 tsp
    Garlic
    1/4 cup + 2tbsp
    Olive oil
    Red pepper flakes for finishing
    Green onions for finishing`,
    user_id: 3,
  },
  {
    title: 'Orange Cake with Semolina and Almonds',
    content: `2 large organic oranges, scrubbed and coarsely chopped (with the skin)
    5 eggs, separated 
    1 cup white sugar, divided
    ¾ cup ground almonds
    ¾ cup semolina flour
    ½ teaspoon vanilla extract
    1/2 teaspoon fiori di Sicilia (optional)
    3 tablespoons brandy-based orange liqueur (such as Grand Marnier®)
    ½ teaspoon confectioners' sugar (Optional)`,
    user_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

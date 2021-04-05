const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Breakfast',
  },
  {
    category_name: 'Lunch',
  },
  {
    category_name: 'Dinner',
  },
  {
    category_name: 'Desert',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
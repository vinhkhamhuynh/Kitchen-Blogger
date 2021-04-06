const { Model,DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      category_name: {
          type: DataTypes.STRING,
          allowNull: false,          
      },
      recipe_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'recipe',
            key: 'id'
        }
    },     
  },
  {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'category'
  }
);

module.exports = Category;
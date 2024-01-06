const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        // TODO: reader comes from the "Reader.js" model
        model: 'product',
        key: 'id',
      },
    }, 
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        // TODO: reader comes from the "Reader.js" model
        model: 'tag',
        key: 'id',
      },
    }, 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

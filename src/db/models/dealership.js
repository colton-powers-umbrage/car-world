'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Dealership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dealership.hasMany(models.Inventory, {
        foreignKey: 'dealershipId',
      });
      Dealership.hasMany(models.Employee, {
        foreignKey: 'dealershipId',
      });
    }
  }
  Dealership.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      phone: DataTypes.STRING,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Dealership',
    }
  );
  Dealership.beforeCreate((dealership, _) => {
    return (dealership.id = uuid());
  });
  return Dealership;
};

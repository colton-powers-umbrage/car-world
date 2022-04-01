'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inventory.belongsTo(models.Dealership, {
        foreignKey: 'dealershipId',
      });
      Inventory.hasMany(models.Car, {
        foreignKey: 'inventoryId',
      });
    }
  }
  Inventory.init(
    {
      dealershipId: DataTypes.UUID,
      name: DataTypes.STRING,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Inventory',
    }
  );
  Inventory.beforeCreate((inventory, _) => {
    return (inventory.id = uuid());
  });
  return Inventory;
};

'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Car.belongsTo(models.Inventory, {
        foreignKey: 'inventoryId',
      });
      Car.belongsTo(models.CarModel, {
        foreignKey: 'carModelId',
      });
      Car.belongsTo(models.Sale, {
        foreignKey: 'saleId',
      });
    }
  }
  Car.init(
    {
      inventoryId: DataTypes.UUID,
      modelId: DataTypes.UUID,
      saleId: DataTypes.UUID,
      isSold: DataTypes.BOOLEAN,
      isNew: DataTypes.BOOLEAN,
      modelYear: DataTypes.INTEGER,
      mileage: DataTypes.INTEGER,
      salePrice: DataTypes.DECIMAL,
      msrp: DataTypes.DECIMAL,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Car',
    }
  );
  Car.beforeCreate((car, _) => {
    return (car.id = uuid());
  });
  return Car;
};

'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class CarModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CarModel.hasMany(models.Car, {
        foreignKey: 'carModelId',
      });
      CarModel.belongsTo(models.Trim, {
        foreignKey: 'trimId',
      });
    }
  }
  CarModel.init(
    {
      modelId: DataTypes.UUID,
      modelYear: DataTypes.INTEGER,
      mileage: DataTypes.INTEGER,
      salePrice: DataTypes.DECIMAL,
      msrp: DataTypes.DECIMAL,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'CarModel',
    }
  );
  CarModel.beforeCreate((carModel, _) => {
    return (carModel.id = uuid());
  });
  return CarModel;
};

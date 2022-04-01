'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sale.belongsTo(models.Employee, {
        foreignKey: 'employeeId',
      });
      Sale.belongsTo(models.Customer, {
        foreignKey: 'customerId',
      });
      Sale.hasMany(models.Car, {
        foreignKey: 'saleId',
      });
    }
  }
  Sale.init(
    {
      employeeId: DataTypes.UUID,
      customerId: DataTypes.UUID,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Sale',
    }
  );
  Sale.beforeCreate((sale, _) => {
    return (sale.id = uuid());
  });
  return Sale;
};

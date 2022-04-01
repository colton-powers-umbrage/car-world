'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.hasMany(models.Sale, {
        foreignKey: 'employeeId',
      });
      Employee.belongsTo(models.Dealership, {
        foreignKey: 'dealershipId',
      });
    }
  }
  Employee.init(
    {
      dealersShipId: DataTypes.UUID,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Employee',
    }
  );
  Employee.beforeCreate((employee, _) => {
    return (employee.id = uuid());
  });
  return Employee;
};

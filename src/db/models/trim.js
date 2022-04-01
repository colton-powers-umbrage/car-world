'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Trim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trim.hasMany(models.CarModel, {
        foreignKey: 'trimId',
      });
    }
  }
  Trim.init(
    {
      name: DataTypes.STRING,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Trim',
    }
  );
  Trim.beforeCreate((trim, _) => {
    return (trim.id = uuid());
  });
  return Trim;
};

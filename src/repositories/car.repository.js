const db = require('../db/models');
const Car = db.car;

exports.create = async (car) => {
  return Car.create(car);
};

exports.findAll = async () => {
  return Car.findAll();
};

exports.findByPk = async (id) => {
  return  Car.findByPk(id);
};
exports.update = async (id, car) => {
  return Car.update(car, {where: {id: id}});
};

exports.deleteCar = async (id) => {
  return Car.destroy({where: {id: id}});
};

exports.deleteAll = async () => {
  return Car.destroy({where: {}, truncate: false});
};

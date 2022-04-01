const db = require('../db/models');
const Dealership = db.Dealership;

exports.create = async (dealership) => {
  return Dealership.create(dealership);
};

exports.findAll = async () => {
  return Dealership.findAll();
};

exports.findByPk = async (id) => {
  return  Dealership.findByPk(id);
};
exports.update = async (id, dealership) => {
  return Dealership.update(dealership, {where: {id: id}});
};

exports.deleteDealership = async (id) => {
  return Dealership.destroy({where: {id: id}});
};

exports.deleteAll = async () => {
  return Dealership.destroy({where: {}, truncate: false});
};

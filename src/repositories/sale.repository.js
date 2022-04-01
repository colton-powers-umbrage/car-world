const db = require('../db/models');
const Sale = db.sale;

exports.create = async (sale) => {
  return Sale.create(sale);
};

exports.findAll = async () => {
  return Sale.findAll();
};

exports.findByPk = async (id) => {
  return  Sale.findByPk(id);
};
exports.update = async (id, sale) => {
  return Sale.update(sale, {where: {id: id}});
};

exports.deleteSale = async (id) => {
  return Sale.destroy({where: {id: id}});
};

exports.deleteAll = async () => {
  return Sale.destroy({where: {}, truncate: false});
};

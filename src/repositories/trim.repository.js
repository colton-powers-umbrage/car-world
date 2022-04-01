const db = require('../db/models');
const Trim = db.trim;

exports.create = async (trim) => {
  return Trim.create(trim);
};

exports.findAll = async () => {
  return Trim.findAll();
};

exports.findByPk = async (id) => {
  return  Trim.findByPk(id);
};
exports.update = async (id, trim) => {
  return Trim.update(trim, {where: {id: id}});
};

exports.deleteTrim = async (id) => {
  return Trim.destroy({where: {id: id}});
};

exports.deleteAll = async () => {
  return Trim.destroy({where: {}, truncate: false});
};

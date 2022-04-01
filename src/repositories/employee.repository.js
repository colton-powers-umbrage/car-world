const db = require('../db/models');
const Employee = db.employee;

exports.create = async (employee) => {
  return Employee.create(employee);
};

exports.findAll = async () => {
  return Employee.findAll();
};

exports.findByPk = async (id) => {
  return  Employee.findByPk(id);
};
exports.update = async (id, employee) => {
  return Employee.update(employee, {where: {id: id}});
};

exports.deleteEmployee = async (id) => {
  return Employee.destroy({where: {id: id}});
};

exports.deleteAll = async () => {
  return Employee.destroy({where: {}, truncate: false});
};

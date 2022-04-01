const db = require('../db/models');
const Customer = db.customer;

exports.create = async (customer) => {
  return Customer.create(customer);
};

exports.findAll = async () => {
  return Customer.findAll();
};

exports.findByPk = async (id) => {
  return  Customer.findByPk(id);
};
exports.update = async (id, customer) => {
  return Customer.update(customer, {where: {id: id}});
};

exports.deleteCustomer = async (id) => {
  return Customer.destroy({where: {id: id}});
};

exports.deleteAll = async () => {
  return Customer.destroy({where: {}, truncate: false});
};

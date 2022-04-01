const db = require('../db/models');
const Inventory = db.Inventory;

exports.create = async (inventory) => {
  return Inventory.create(inventory);
};

exports.findAll = async () => {
  return Inventory.findAll();
};

exports.findByPk = async (id) => {
  return  Inventory.findByPk(id);
};
exports.update = async (id, inventory) => {
  return Inventory.update(inventory, {where: {id: id}});
};

exports.deleteInventory = async (id) => {
  return Inventory.destroy({where: {id: id}});
};

exports.deleteAll = async () => {
  return Inventory.destroy({where: {}, truncate: false});
};

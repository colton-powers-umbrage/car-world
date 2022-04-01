const inventoryRepository = require('../repositories/inventory.repository');

exports.create =  async ({ body }, res) => {
  const inventory = {
    dealershipId: body.dealershipId,
    name: body.name,
  };
  try {
    const inventoryRecord = await inventoryRepository.create(inventory);
    console.log(inventoryRecord)
    res.send(inventoryRecord);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || 'Some error occurred while creating the inventory.',
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const inventories = await inventoryRepository.findAll();
    res.send(inventories);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving inventories.',
    });
  }
};

exports.findOne = async ({ params }, res) => {
  const id = params.id;
  try {
    const inventory = await inventoryRepository.findByPk(id);
    if (inventory) {
      res.send(inventory);
    } else {
      res.status(404).send({ message: `Cannot find inventory with id=${id}.` });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving inventory with id=' + id });
  }
};

exports.update = async ({ params, body }, res) => {
  const id = params.id;
  const inventory = {
    dealershipId: body.dealershipId,
    name: body.name,
  };
  try {
    const numRecords = await inventoryRepository.update(id, inventory);
    if (numRecords.length === 1) {
      res.send(body);
    } else {
      res.status(404).send({
        message: `Cannot update Inventory with id=${id}. Inventory was not found or req.body is empty!`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Cannot update Inventory with id=${id}. Inventory was not found or req.body is empty!`,
    });
  }
};

exports.deleteInventory = async ({ params }, res) => {
  const id = params.id;
  try {
    const numRecords = await inventoryRepository.deleteInventory(id);
    if (numRecords === 1) {
      res.send({ message: 'Inventory was deleted successfully!' });
    } else {
      res.status(404).send({
        message: `Cannot delete Inventory with id=${id}. Inventory was not found!`,
      });
    }
  } catch (error) {
    res.status(500).send({ message: 'Could not delete Inventory with id=' + id });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const numRecords = await inventoryRepository.deleteAll();
    res.send({ message: `${numRecords} inventories were deleted successfully!` });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || 'Some error occurred while removing all inventories.',
    });
  }
};

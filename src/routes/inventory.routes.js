const validateInventorySchema = require('../middleware/validate-inventory-schema');
const inventorySchema = require('../schema/inventory-schema');

module.exports = (app) => {
    const inventory = require('../controllers/inventory.controller.js');
    const router = require('express').Router();
    router.post('/', inventorySchema, validateInventorySchema, inventory.create);
    router.get('/', inventory.findAll);
    router.get('/:id', inventory.findOne);
    router.put('/:id', inventory.update);
    router.delete('/:id', inventory.deleteInventory);
    router.delete('/', inventory.deleteAll);
    app.use('/v1/inventories', router);
  };

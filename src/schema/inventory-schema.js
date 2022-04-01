const { check } = require('express-validator');

const inventorySchema = [
    check('name', 'Please add name').not().isEmpty()
];

module.exports = inventorySchema

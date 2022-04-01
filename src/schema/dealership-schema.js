const { check } = require('express-validator');

const dealershipSchema = [
  check('name', 'Please add name').not().isEmpty(),
  check('location', 'Please add location').not().isEmpty(),
  check('phone', 'Please enter phone number').not().isEmpty(),
];


module.exports = dealershipSchema

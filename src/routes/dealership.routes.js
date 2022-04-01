const validateDealershipSchema = require('../middleware/validate-dealership-schema');
const dealershipSchema = require('../schema/dealership-schema');

module.exports = (app) => {
    const dealership = require('../controllers/dealership.controller.js');
    const router = require('express').Router();
    router.post('/', dealershipSchema, validateDealershipSchema, dealership.create);
    router.get('/', dealership.findAll);
    router.get('/:id', dealership.findOne);
    router.put('/:id', dealershipSchema, validateDealershipSchema,dealership.update);
    router.delete('/:id', dealership.deleteDealership);
    router.delete('/', dealership.deleteAll);
    app.use('/v1/dealerships', router);
  };

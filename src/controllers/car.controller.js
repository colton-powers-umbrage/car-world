//person.controller.js
const carRepository = require('../repository/car.repository');

exports.create = async ({ body }, res) => {
  if (!body.id) {
    res.status(400).send({ message: 'Content cannot be empty!' });
    return;
  }
  const car = {
    id: body.id,
    mileage: body.mileage,
    carModel: body.carModel,
    trim: body.trim,
    msrp: body.msrp,
    inventory:body.inventory,
    isNew: body.isNew,
    isSold: body.isSold,
    saleId: body.saleId
  };
  try {
    const carRecord = await carRepository.create(car);
    res.send(carRecord);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || 'Some error occurred while creating the car.',
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const cars = await carRepository.findAll();
    res.send(cars);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving cars.',
    });
  }
};

exports.findOne = async ({ params }, res) => {
  const id = params.id;
  try {
    const car = await carRepository.findByPk(id);
    if (car) {
      res.send(car);
    } else {
      res.status(404).send({ message: `Cannot find car with id=${id}.` });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving car with id=' + id });
  }
};

exports.update = async ({ params, body }, res) => {
  const id = params.id;
  try {
    const numRecords = await carRepository.update(id, body);
    if (numRecords.length === 1) {
      res.send({ message: 'Car was updated successfully!' });
    } else {
      res.status(404).send({
        message: `Cannot update car with id=${id}. Car was not found or req.body is empty!`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Cannot update car with id=${id}. Car was not found or req.body is empty!`,
    });
  }
};

exports.deleteCar = async ({ params }, res) => {
  const id = params.id;
  try {
    const numRecords = await carRepository.deleteCar(id);
    if (numRecords === 1) {
      res.send({ message: 'Car was deleted successfully!' });
    } else {
      res.status(404).send({
        message: `Cannot delete car with id=${id}. Car was not found!`,
      });
    }
  } catch (error) {
    res.status(500).send({ message: 'Could not delete car with id=' + id });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const numRecords = await carRepository.deleteAll();
    res.send({ message: `${numRecords} cars were deleted successfully!` });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || 'Some error occurred while removing all cars.',
    });
  }
};

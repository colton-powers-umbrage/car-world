const dealershipRepository = require('../repositories/dealership.repository');

exports.create =  async ({ body }, res) => {
  const dealership = {
    name: body.name,
    location: body.location,
    phone: body.phone
  };
  try {
    const dealershipRecord = await dealershipRepository.create(dealership);
    res.send(dealershipRecord);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || 'Some error occurred while creating the dealership.',
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const dealerships = await dealershipRepository.findAll();
    res.send(dealerships);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving dealerships.',
    });
  }
};

exports.findOne = async ({ params }, res) => {
  const id = params.id;
  try {
    const dealership = await dealershipRepository.findByPk(id);
    if (dealership) {
      res.send(dealership);
    } else {
      res.status(404).send({ message: `Cannot find dealership with id=${id}.` });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving dealership with id=' + id });
  }
};

exports.update = async ({ params, body }, res) => {
  const id = params.id;
  const dealership = {
    name: body.name,
    location: body.location,
    phone: body.phone
  };
  try {
    const dealershipRecord = await dealershipRepository.update(id, dealership);
    if (dealershipRecord.length === 1) {
      res.send(body);
    } else {
      res.status(404).send({
        message: `Cannot update dealership with id=${id}. Dealership was not found or req.body is empty!`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Cannot update dealership with id=${id}. Dealership was not found or req.body is empty!`,
    });
  }
};

exports.deleteDealership = async ({ params }, res) => {
  const id = params.id;
  try {
    const numRecords = await dealershipRepository.deleteDealership(id);
    if (numRecords === 1) {
      res.send({ message: 'Dealership was deleted successfully!' });
    } else {
      res.status(404).send({
        message: `Cannot delete dealership with id=${id}. Dealership was not found!`,
      });
    }
  } catch (error) {
    res.status(500).send({ message: 'Could not delete dealership with id=' + id });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const numRecords = await dealershipRepository.deleteAll();
    res.send({ message: `${numRecords} dealerships were deleted successfully!` });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || 'Some error occurred while removing all dealerships.',
    });
  }
};

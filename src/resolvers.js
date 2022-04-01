
const resolvers = {
  Query: {
    // returns array of dealerships
    dealerships: (_, __, { dataSources }) => {
      return dataSources.carWorldAPI.getDealerships();
    },
    // get a single dealership by id
    dealership: (_, { id }, { dataSources }) => {
      return dataSources.carWorldAPI.getDealership(id);
    },
    // get array of inventories
    inventories: (_, __, {dataSources}) => {
        return dataSources.carWorldAPI.getInventories();
    },
    // get a single inventory by id
    inventory: (_, {id}, {dataSources}) => {
        return dataSources.carWorldAPI.getInventory(id)
    },
    // get array of cars
    cars: (_, __, {dataSources}) => {
        return dataSources.carWorldAPI.getCars();
    },
    // get a single car by id
    car: (_, {id}, {dataSources}) => {
        return dataSources.carWorldAPI.getCar(id)
    },
    // get array of all sales transactions
    sales: (_, __, {dataSources}) => {
        return dataSources.carWorldAPI.getSales()
    },
    // get a single sale by id
    sale: (_, {id}, {dataSources}) => {
        return dataSources.carWorldAPI.getSale(id)
    },
    // get array of all customers
    customers: (_, __, {dataSources}) => {
        return dataSources.carWorldAPI.getCustomers()
    }, 
    // get a single customer by id
    customer: (_, {id}, {dataSources}) => {
        return dataSources.carWorldAPI.getCustomer(id)
    },
    // get array of all employees
    employees: (_, __, {dataSources}) => {
        return dataSources.carWorldAPI.getEmployees()
    },
    //get a single employee by id
    employee: (_, {id}, {dataSources}) => {
        return dataSources.carWorldAPI.getEmployee(id)
    },
    //get array of all car models
    carModels: (_, __, {dataSources}) => {
        return dataSources.carWorldAPI.getCarModels()
    },
    // get a single car model by id
    carModel: (_, {id}, {dataSources}) => {
        return dataSources.carWorldAPI.getCarModel(id)
    },
    // get array of all trims
    trims: (_, __, {dataSources}) => {
        return dataSources.carWorldAPI.getTrims()
    },
    // get a single trim by id
    trim: (_, {id}, {datasources}) => {
        return dataSources.carWorldAPI.getTrim(id)
    }

  },

  Mutation: {
      // creates a dealership
      createDealership: (_, {name, location, phone}, {dataSources}) => {
        return dataSources.carWorldAPI.createDealership(name, location, phone)
      },
      // updates dealership information
      updateDealership: (_, {id, name, location, phone}, {dataSources}) => {
          return dataSources.carWorldAPI.updateDealership(id, name, location, phone)
      },
      // deletes a dealership
      deleteDealership: (_, {id}, {dataSources}) => {
          return dataSources.carWorldAPI.deleteDealership(id);
      },
      // create an inventory
      createInventory: (_, {dealershipId, name}, {dataSources}) => {
          return dataSources.carWorldAPI.setInventory(dealershipId, name)
      },
      // update info information
      updateInventory: (_, {id, dealershipId, name}, {dataSources}) => {
          return dataSources.carWorldAPI.updateInventory(id, dealershipId, name)
      },
      // delete an inventory
      deleteInventory: (_, {id}, {dataSources}) => {
          return dataSources.carWorldAPI.deleteInventory(id)
      }, 
      // create a car
      createCar: (_, {modelId, inventoryId, saleId, isSold, isNew, modelYear, mileage, salePrice, msrp}, {dataSources}) => {
          return dataSources.carWorldAPI.createCar(modelId, inventoryId, saleId, isSold, isNew, modelYear, mileage, salePrice, msrp)
      },
      // update car infoformation
      updateCar: (_, {id, modelId, inventoryId, saleId, isSold, isNew, modelYear, mileage, salePrice, msrp}) => {
          return dataSources.carWorldAPI.updateCar(id, modelId, inventoryId, saleId, isSold, isNew, modelYear, mileage, salePrice, msrp)
      },
      // delete a car
      deleteCar: (_, {id}, {dataSources}) => {
          return dataSources.carWorldAPI.deleteCar(id)
      },
      // create a sale
      createSale: (_, {customerId, employeeId}, {dataSources}) => {
          return dataSources.carWorldAPI.createSale(customerId, employeeId)
      },
      // update sale information
      updateSale: (_, {id, customerId, employeeId}, {dataSources}) => {
          return dataSources.carWorldAPI.updateSales(id, customerId, employeeId)
      }, 
      // delete a sale
      deleteSale: (_, {id}, {dataSources}) => {
          return dataSources.carWorldAPI.deleteSale(id)
      },
      // create customer
      createCustomer: (_, {firstName, lastName, phone, email}, {dataSources}) => {
          return dataSources.carWorldAPI.createCustomer(firstName, lastName, phone, email)
      },
      // update customer information
      updateCustomer: (_, {id, firstName, lastName, phone, email}, {dataSources}) => {
          return dataSources.carWorldAPI.updateCustomer(id, firstName, lastName, phone, email)
      }, 
      // delete a customer
      deleteCustomer: (_, {id}, {dataSources}) => {
          return dataSources.carWorldAPI.deleteCustomer()
      }, 
      // create employee
      createEmployee: (_, {dealerId, firstName, lastName, email}, {dataSources}) => {
          return dataSources.carWorldAPI.createEmployee(dealerId, firstName, lastName, email)
      }, 
      // update employee information
      updateEmployee: (_, {id, dealerId, firstName, lastName, email}, {dataSources}) => {
          return dataSources.carWorldAPI.updateEmployee(id, dealerId, firstName, lastName, email)
      }, 
      // create car model
      createCarModel: (_, {trimId, name}) => {
          return dataSources.carWorldAPI.createCarModel(trimId, name)
      },
      // update car model informtaion
      updateCarModel: (_, {id, trimId, name}) => {
          return dataSources.carWorldAPI.updateCarModel(id, trimId, name)
      }, 
      // delete a car model
      deleteCarModel: (_, {id}, {dataSources}) => {
          return dataSources.carWorldAPI.deleteCarModel(id)
      },
      // create a trim
      createTrim: (_, {name}, {dataSources}) => {
          return dataSources.carWorldAPI.createTrim(name)
      },
      // update a trim
      updateTrim: (_, {id, name}, {dataSources}) => {
          return dataSources.carWorldAPI.updateTrim(id, name)
      },
      // delete a trim
      deleteTrim: (_, {id}, {dataSources}) => {
          return dataSources.carWorldAPI.deleteTrim(id)
      }
      
  },
  
  Inventory: {
      dealership:({dealershipId}, _, {dataSources}) => {
          return dataSources.carWorldAPI.getDealership(dealershipId)
      }
  },

  Employee: {
    dealership:({dealershipId}, _, {dataSources}) => {
        return dataSources.carWorldAPI.getDealership(dealershipId)
    }
  }, 

  Sale: {
      employee:({employeeId}, _, {dataSources}) => {
          return dataSources.carWorldAPI.getEmployee(employeeId)
      }, 
      customer:({customerId}, _, {dataSources}) => {
          return dataSources.carWorldAPI.getCustomer(customerId)
      }
  }, 

  Car: {
      model:({modelId}, _, {dataSources}) => {
          return dataSources.carWorldAPI.getModel(modelId)
      }, 
      inventory:({inventoryId}, _, {dataSources}) => {
          return dataSources.carWorldAPI.getInventory(inventoryId)
      }, 
      sale:({saleId}, _, {dataSources}) => {
          return dataSources.carWorldAPI.getSale(saleId)
      }
  }
  
};


module.exports = resolvers;

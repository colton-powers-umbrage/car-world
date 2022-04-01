const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        "get all dealserships"
        dealerships: [Dealership!]!
        "get a dealership by id"
        dealership(id: ID!): Dealership!
        "get all inventories"
        inventories: [Inventory!]!
        "get an inventory by id"
        inventory(id: ID!): Inventory!
        "get all cars"
        cars: [Car!]!
        "get a car by id"
        car(id:ID!): Car!
        "get all sales transactions"
        sales: [Sale!]!
        "get a specific sales transactions"
        sale(id: ID!): Sale!
        "get all customers"
        customers: [Customer!]!
        "get a customer by id"
        customer(id: ID!): Customer!
        "get all employees"
        employees: [Employee!]!
        "get an employee by id"
        employee(id:ID!): Employee!
        "get all car models"
        carModels: [CarModel!]!
        "get a car model by id"
        carModel(id:ID!): CarModel!
        "get all trims"
        trims: [Trim!]!
        "get a trim by id"
        trim(id:ID!): Trim!

    }

    "Create or update a Dealership"
    type Mutation {
        "create dealership"
        createDealership(name:String!, location:String!, phone:String!):Dealership!
        "update dealership information"
        updateDealership(id:ID!,name:String!, location:String!, phone:String!): Dealership!
        "delete dealership"
        deleteDealership(id:ID!):Dealership
        "create an inventory"
        createInventory(dealershipId:ID!, name:String!):Inventory!
        "update inventory information"
        updateInventory(id:ID!, dealershipId:ID!, name:String!):Inventory!
        "delete an inventory"
        deleteInventory(id:ID!):Inventory
        "create a car"
        createCar(modelId:ID!, inventoryId:ID!, saleId:ID!, isSold:Boolean, isNew:Boolean, modelYear:Int!, mileage:Int!, salePrice:Int!, msrp:Int!):Car!
        "update car information"
        updateCar(id:ID!,modelId:ID!, inventoryId:ID!, saleId:ID!, isSold:Boolean, isNew:Boolean, modelYear:Int!, mileage:Int!, salePrice:Int!, msrp:Int!):Car!
        "delete a car"
        deleteCar(id:ID!):Car
        "create a sales transaction"
        createSale(customerId:ID!, employeeID:ID!):Sale!
        "update a sales transaction"
        updateSale(id:ID!, customerId:ID!, employeeId:ID!):Sale!
        "delete a sales transaction"
        deleteSale(id:ID!):Sale
        "create a customer"
        createCustomer(firstName:String!, lastName:String!, phone:String!, email:String!):Customer!
        "update customer information"
        updateCustomer(id:ID!, firstName: String!, lastName: String!, phone: String!, email: String!):Customer!
        "delete a customer"
        deleteCustomer(id:ID!):Customer
        "create an employee"
        createEmployee(dealerId:ID!, firstName:String!, lastName:String!, email:String!):Employee!
        "update employee information"
        updateEmployee(id:ID!, dealerId:ID!, firstName:String!, lastName:String!, email:String!):Employee!
        "delete employee information"
        deleteEmployee(id:ID!):Employee
        "create a car model"
        createCarModel(trimId:ID!, name:String!):CarModel!
        "update car model information"
        updateCarModel(id:ID!, trimId:ID!, name:String):CarModel!
        "delete a car model"
        deleteCarModel(id:ID!):CarModel
        "create a trim"
        createTrim(name:String!):Trim!
        "update a trim"
        updateTrim(id:ID!, name:String!):Trim!
        "delete a trim"
        deleteTrim(id:ID!):Trim


    }

  
    "A dealership is a place that sales cars"
    type Dealership {
        id: ID!
        "the name of dealership"
        name: String!
        "the dealership's location"
        location: String!
        "the dealerships phonen umber"
        phone: String!
    }

    "An inventory is a certain catalog of cars"
    type Inventory {
        id: ID!
        "the dealership that owns the inventory"
        dealership: Dealership!
        "the name of the inventory"
        name: String!
    }

    "An employee is a human being that works at the dealership"
    type Employee {
        id: ID!
        "the dealership the employee works at"
        dealership: Dealership!
        "the first name of the employee"
        firstName: String!
        "the last name of the employee"
        lastName: String!
        "the email address of the employee"
        email: String!
    }

    "A sale is some transactional information pertaining to a car"
    type Sale {
        id: ID!
        "The cusomter who purchased the car"
        customer: Customer!
        "The employee who sold the car"
        employee: Employee!
    }

    "A customer is a person who purchased a car or is thinking about purchasing a car"
    type Customer {
        id: ID!
        "the first name of the customer"
        firstName: String!
        "the last name of the customer"
        lastName: String!
        "the phone number of the customer"
        phone: String!
        "the email address of the customer"
        email: String!
    }

    "A trim is a kind of model of a car"
    type Trim {
        id: ID!
        "the name of the trim"
        name: String!
    }

    "A model is a kind of car"
    type CarModel {
        id: ID!
        "the trim of the car"
        trim: Trim!
        "the name of the model of the car"
        name: String!
    }

    "A car is a vehicle for sale"
    type Car {
        id: ID!
        "the model of the car"
        model: CarModel!
        "the inventory the car belongs in"
        inventory: Inventory!
        "the purchase order the car might belong to"
        sale: Sale
        "whether or not the car is sold"
        isSold: Boolean
        "whether or not the car is new"
        isNew: Boolean
        "the year of the car"
        modelYear: Int!
        "the mileage of the car"
        mileage: Int!
        "the sales price of the car"
        salePrice: Int!
        "the msrp of the car"
        msrp: Int!
    }


`;

module.exports = typeDefs;

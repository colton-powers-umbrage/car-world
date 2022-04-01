const { RESTDataSource } = require('apollo-datasource-rest');

class CarWorldAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:1234/v1/';
  }

  getDealerships() {
    return this.get('dealerships');
  }

  getDealership(id) {
    return this.get(`dealerships/${id}`);
  }

  createDealership(name, location, phone) {
    return this.post('dealerships', { name, location, phone });
  }

  updateDealership(id, name, location, phone) {
    return this.put(`dealerships/${id}`, { id, name, location, phone });
  }

  deleteDealership(id){
      return this.delete(`dealerships/${id}`);
      
  }
  getInventories() {
    return this.get('inventories');
  }

  getInventory(id) {
    return this.get(`inventories/${id}`);
  }

  createInventory(dealershipId, name) {
    return this.post('inventories', { dealershipId, name });
  }

  updateInventory(id, dealershipId, name) {
    return this.put(`inventories/${id}`, { id, dealershipId, name });
  }

  deleteInventory(id){
      return this.delete(`inventories/${id}`);
  }

  getCars() {
    return this.get('cars');
  }

  getCar(id) {
    return this.get(`cars/${id}`);
  }

  createCar(modelId, inventoryId, saleId, isSold, isNew, modelYear, mileage, salePrice, msrp) {
    return this.post('cars', { modelId, inventoryId, saleId, isSold, isNew, modelYear, mileage, salePrice, msrp });
  }

  updateCar(id, modelId, inventoryId, saleId, isSold, isNew, modelYear, mileage, salePrice, msrp) {
    return this.put(`cars/${id}`, { id, modelId, inventoryId, saleId, isSold, isNew, modelYear, mileage, salePrice, msrp });
  }

  deleteCar(id){
      return this.delete(`cars/${id}`);
  }

  getSales() {
    return this.get('sales');
  }

  getSale(id) {
    return this.get(`sales/${id}`);
  }

  createSale(customerId, employeeId) {
    return this.post('sales', { customerId, employeeId });
  }

  updateSale(id, customerId, employeeId) {
    return this.put(`sales/${id}`, { id, customerId, employeeId });
  }

  deleteSale(id){
      return this.delete(`sales/${id}`);
  }

  getCustomers() {
    return this.get('customers');
  }

  getCustomer(id) {
    return this.get(`customers/${id}`);
  }

  createCustomer(firstName, lastName, phone, email) {
    return this.post('customers', { firstName, lastName, phone, email });
  }

  updateCustomer(id, firstName, lastName, phone, email) {
    return this.put(`customers/${id}`, { id, firstName, lastName, phone, email });
  }

  deleteCustomer(id){
      return this.delete(`customers/${id}`);
  }

  getEmployees() {
    return this.get('employees');
  }

  getEmployee(id) {
    return this.get(`employees/${id}`);
  }

  createEmployee(dealershipId, firstName, lastName, email) {
    return this.post('employees', { dealershipId, firstName, lastName, email });
  }

  updateEmployee(id, dealershipId, firstName, lastName, email) {
    return this.put(`employees/${id}`, { id, firstName, lastName, phone, email });
  }

  deleteEmployee(id){
      return this.delete(`employees/${id}`);
  }

  getCarModels() {
    return this.get('car-models');
  }

  getCarModel(id) {
    return this.get(`car-models/${id}`);
  }

  createCarModel(trimId, name) {
    return this.post('car-models', { trimId, name });
  }

  updateCarModel(id, trimId, name) {
    return this.put(`car-models/${id}`, { id, trimId, name });
  }

  deleteCarModel(id){
      return this.delete(`car-models/${id}`);
  }

  getTrims() {
    return this.get('trims');
  }

  getTrim(id) {
    return this.get(`trims/${id}`);
  }

  createTrim(name) {
    return this.post('trims', {  name });
  }

  updateTrim(id, name) {
    return this.put(`trims/${id}`, { id, name });
  }

  deleteTrim(id){
      return this.delete(`trim/${id}`);
  }
  
}
module.exports = CarWorldAPI;

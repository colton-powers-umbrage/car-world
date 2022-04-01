const setupDealershipRoutes = require('./dealership.routes');
const setupInventoryRoutes = require('./inventory.routes');
const routes = [setupDealershipRoutes, setupInventoryRoutes];

const setupAllRoutes = (app) => {
  routes.forEach((route) => {
    route(app);
  });
};

module.exports = { setupAllRoutes };

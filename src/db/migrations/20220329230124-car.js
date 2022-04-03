'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      inventoryId: {
        type: Sequelize.UUID,
        references: {
          model: 'inventories',
          key: 'id',
        },
      },
      carModelId: {
        type: Sequelize.UUID,
        references: {
          model: 'carModels',
          key: 'id',
        },
      },
      saleId: {
        type: Sequelize.UUID,
        references: {
          model: 'sales',
          key: 'id',
        },
      },
      isSold: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      isNew: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      modelYear: {
        type: Sequelize.INTEGER,
      },
      mileage: {
        type: Sequelize.INTEGER,
      },
      salePrice: {
        type: Sequelize.DECIMAL,
      },
      msrp: {
        type: Sequelize.DECIMAL,
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cars');
  },
};

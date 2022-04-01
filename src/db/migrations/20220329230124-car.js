'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      inventoryId: {
        type: Sequelize.UUID,
        references: {
          model: 'Inventories',
          key: 'id',
        },
      },
      carModelId: {
        type: Sequelize.UUID,
        references: {
          model: 'CarModels',
          key: 'id',
        },
      },
      saleId: {
        type: Sequelize.UUID,
        references: {
          model: 'Sales',
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
    await queryInterface.dropTable('Cars');
  },
};

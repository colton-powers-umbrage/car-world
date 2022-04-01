'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      dealerId: {
        type: Sequelize.UUID,
        references: {
          model: 'Dealerships',
          key: 'id',
        },
      },
      firstName: {
        type: Sequelize.STRING,
        defaultValue: false,
      },
      lastName: {
        type: Sequelize.STRING,
        defaultValue: true,
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: true,
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
    await queryInterface.dropTable('Employees');
  },
};

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carrito_Talles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carritoId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Carrito_De_Compras",
          },
          key: "id",
        },
        onDelete: "cascade",
      },
      talleId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Talles",
          },
          key: "id",
        },
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Carrito_Talles');
  }
};
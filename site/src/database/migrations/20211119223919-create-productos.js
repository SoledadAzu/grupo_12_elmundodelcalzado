'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(50)
      },
      precio: {
        type: Sequelize.DECIMAL(6,2)
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      id_generos: {
        type: Sequelize.INTEGER
      },
      id_marcas: {
        type: Sequelize.INTEGER
      },
      id_temporadas: {
        type: Sequelize.INTEGER
      },
      id_outlets: {
        type: Sequelize.INTEGER
      },
      id_talles: {
        type: Sequelize.INTEGER
      },
      id_colores: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Productos');
  }
};
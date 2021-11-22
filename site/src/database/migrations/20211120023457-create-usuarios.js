'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.VARCHAR(50)
      },
      apellido: {
        type: Sequelize.VARCHAR(50)
      },
      email: {
        type: Sequelize.VARCHAR(50)
      },
      password: {
        type: Sequelize.VARCHAR(100)
      },
      id_categoria_usuario: {
        type: Sequelize.INTEGER
      },
      imagen: {
        type: Sequelize.STRING(100)
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
    await queryInterface.dropTable('Usuarios');
  }
};
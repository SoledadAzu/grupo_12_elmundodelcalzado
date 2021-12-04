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
        type: Sequelize.STRING(50)
      },
      apellido: {
        type: Sequelize.STRING(50)
      },
      email: {
        type: Sequelize.STRING(50)
      },
      password: {
        type: Sequelize.STRING(100)
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Categoria_usuarios",
          },
          key: "id",
        },
        onDelete: "cascade",
        
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
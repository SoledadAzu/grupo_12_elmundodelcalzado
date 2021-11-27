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
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.DECIMAL(10,2)
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      id_generos: {
        type: Sequelize.INTEGER,
      references : {
        model : {
          tableName : "Generos"
        },
        key : "id"
      },
      onDelete : "cascade" 
    },
      id_marcas: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Marcas"
          },
          key : "id"
        },
        onDelete : "cascade" 
      },
      id_temporadas: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Temporadas"
          },
          key : "id"
        },
        onDelete : "cascade" 
      },
      id_outlets: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Outlets"
          },
          key : "id"
        },
        onDelete : "cascade" 
      },
      id_talles: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Talles"
          },
          key : "id"
        },
        onDelete : "cascade" 
      },
      id_colores: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Colores"
          },
          key : "id"
        },
        onDelete : "cascade" 
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
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Detalles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
<<<<<<< HEAD
      id_producto: {
        type: Sequelize.INTEGER
=======
      id_productos: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Productos"
          },
          key : "id"     
        },
        onDelete : "cascade" 
>>>>>>> 5185e2db6244289e29e88e56cf7aa853966fc3fb
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
    await queryInterface.dropTable('Detalles');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carrito_De_Compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productoId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Productos",
          },
          key: "id",
        },
        onDelete: "cascade",
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Usuarios",
          },
          key: "id",
        },
        onDelete: "cascade",
      },
      ordenId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Ordens",
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
    await queryInterface.dropTable('Carrito_De_Compras');
  }
};
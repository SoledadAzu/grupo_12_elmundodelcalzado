"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Productos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      precio: {
        type: Sequelize.DECIMAL(10, 2),
      },
      descripcion: {
        type: Sequelize.TEXT,
      },
      generoId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Generos",
          },
          key: "id",
        },
        onDelete: "cascade",
      },
      marcaId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Marcas",
          },
          key: "id",
        },
        onDelete: "cascade",
      },
      temporadaId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Temporadas",
          },
          key: "id",
        },
        onDelete: "cascade",
      },
      outletId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Outlets",
          },
          key: "id",
        },
        onDelete: "cascade",
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
    await queryInterface.dropTable("Productos");
  },
};

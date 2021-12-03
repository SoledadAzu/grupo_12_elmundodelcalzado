"use strict";
let marcasArray = [
  {
    nombre:'Adidas',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nombre:'Adidas Original',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nombre:'Nike',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nombre:'Puma',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nombre:'Asics',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nombre:'Converse',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nombre:'Fila',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nombre:'Topper',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nombre:'New Balance',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Marcas", marcasArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Marcas", null, {});
  },
};

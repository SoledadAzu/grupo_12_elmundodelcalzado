'use strict';
const productos = require("../../database/productos.json")
let generoArray = productos.map(product => {
  let generos= {
    nombre: product.genero,
  }
  return generos
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Generos', generoArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Generos', null, {});

  }
};

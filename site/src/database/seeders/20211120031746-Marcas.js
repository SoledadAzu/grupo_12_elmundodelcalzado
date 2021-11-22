'use strict';
const productos = require("../../database/productos.json")

let marcasArray = productos.map(product => {
  let marcas = {
    nombre: product.marca,
   
  } 
  return marcas
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('marcas', marcasArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('marcas', null, {});

  }
};

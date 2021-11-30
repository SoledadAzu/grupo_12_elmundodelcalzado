'use strict';
const productos = require("../productos.json")

let marcasArray = productos.map(product => {
  let marcas = {
    nombre: product.marca,  
  } 
  return marcas
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Marcas', marcasArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Marcas', null, {});

  }
};


'use strict';
const productos = require("../../database/productos.json")

let productosArray = productos.map(product => {
  let producto = {
    nombre: product.title,
    precio: product.price,
    descripcion: product.description,
    
    
  }
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('People', [{
  
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('People', null, {});

  }
};

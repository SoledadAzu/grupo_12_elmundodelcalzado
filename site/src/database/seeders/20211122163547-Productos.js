'use strict';
const productos = require("../productos.json")

let productosArray = productos.map(product => {
  let myproduct = {
    nombre: product.title,
    precio: product.price,
    decripcion: product.description,

  } 
  return myproduct
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Productos', productosArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Productos', null, {});

  }
};

'use strict';
const productos = require("../../database/productos.json")

let productosArray = productos.map(product => {
  let producto = {
    nombre: product.title,
    precio: product.price,
    descripcion: product.description,
    
  }
  
  return producto
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Productos', productosArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Productos', null, {});

  }
};

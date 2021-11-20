'use strict';
const productos = require("../../database/productos.json")

let productosArray = productos.map(product => {
  let producto = {
    nombre: product.title,
    precio: product.price,
    descripcion: product.description,
    createdAt: new Date,
    updatedAt: new Date
  }
  return producto
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('productos', productosArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('productos', null, {});

  }
};

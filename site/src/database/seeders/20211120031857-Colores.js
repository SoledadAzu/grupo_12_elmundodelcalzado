'use strict';
const productos = require("../../database/productos.json")

let colores = productos.map(product =>{
  let color = {
    nombre: product.colors,
    
  }
  return color
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('Colores', colores, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Colores', null, {});
     
  }
};

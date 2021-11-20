'use strict';
const productos = require("../../database/productos.json")

let colores = productos.map(product =>{
  let color = {
    name: product.colors,
    creatdAt: new Date,
    updatedAt: new Date
  }
  return color
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('Colors', colores, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Colors', null, {});
     
  }
};

'use strict';
const productos = require("../../database/productos.json")

let colores = productos.map(product =>{
  let color = {
    name: product.color,
    creatdAt: new Date,
    updatedAt: new Date
  }
  return color
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('Colors', [], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Colors', null, {});
     
  }
};

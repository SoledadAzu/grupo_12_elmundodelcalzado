'use strict';
const productos = require("../productos.json")

let detallesArray = productos.map(product =>{
  let detail =  product.detalles 
  let mydetalles = {
    nombre: detail.join(",")
}
  return mydetalles
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('Detalles', detallesArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Detalles', null, {});
     
  }
};
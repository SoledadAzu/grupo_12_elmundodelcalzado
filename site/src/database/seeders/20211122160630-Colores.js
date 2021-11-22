'use strict';
const productos = require("../productos.json")

let coloresArray = productos.map(product =>{
  let color =  product.colors 
  let mycolores = {
    nombre: color.join(",")
}
  return mycolores
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('Colores', coloresArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Colores', null, {});
     
  }
};

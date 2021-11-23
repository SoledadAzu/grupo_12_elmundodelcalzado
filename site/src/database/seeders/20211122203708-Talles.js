'use strict';
const productos = require("../productos.json")

let tallesArray = productos.map(product =>{
  let talles =  product.talles 
  let mytalles = {
    nombre: talles.join(",")

}
  return mytalles
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('Talles', tallesArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Talles', null, {});
     
  }
};

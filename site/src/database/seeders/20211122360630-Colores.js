'use strict';
const productos = require("../productos.json")

let coloresArray = []
let colores = productos.map((product,index) =>{
  let color = product.colors.map(color => {
    let colors = {
      nombre: color,
      productoId: index + 1,
      createdAt: new Date,
      updatedAt: new Date 
    }
    coloresArray.push(colors)
  })
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('Colores', coloresArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Colores', null, {});
     
  }
};

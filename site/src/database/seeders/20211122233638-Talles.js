'use strict';
const productos = require("../productos.json")

let talles = []
let tallesArray = productos.map((product,index) =>{
  let talle = product.talles.map(talle => {
    let mytalles = {
      nombre: talle,
      productoId: index + 1,
      createdAt: new Date,
      updatedAt: new Date 
    }
    talles.push(mytalles)
  })
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('Talles', talles, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Talles', null, {});
     
  }
};

'use strict';
const productos = require("../productos.json")

let details = []
let algo = productos.map((product,index) =>{
  let algos = product.detalles.map(detalle => {
    let esto = {
      nombre: detalle,
      productoId: index + 1,
      createdAt: new Date,
      updatedAt: new Date 
    }
    details.push(esto)
  })
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('Detalles', details, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Detalles', null, {});
     
  }
};

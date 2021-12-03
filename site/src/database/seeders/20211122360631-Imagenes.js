'use strict';
const productos = require("../productos.json")

let imagenes = []
let algo = productos.map((product,index) =>{
  let algos = product.img.map(imagen => {
    let esto = {
      nombre: imagen,
      productoId: index + 1,
      createdAt: new Date,
      updatedAt: new Date 
    }
    imagenes.push(esto)
  })
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('Imagenes', imagenes, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Imagenes', null, {});
     
  }
};

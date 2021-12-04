'use strict';
const productos = require("../productos.json")
let marcas =["adidas","adidasoriginal","nike","puma","asics","converse","fila","topper","newbalance"]
let productosArray = productos.map(product => {
  // function random(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
  let producto = {
    nombre: product.title,
    precio: product.price,
    descripcion: product.description,
    generoId: (product.genero === 'mujer') ? 1 : 2,
    marcaId: (marcas.indexOf(product.marca) + 1),
    temporadaId: product.temporada === "true" ? 1 : 2 ,
    outletId: product.outlet === "true" ? 1 : 2,
    createdAt: new Date,
    updatedAt: new Date 
  }
  
  return producto
  
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Productos', productosArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Productos', null, {});

  }
};

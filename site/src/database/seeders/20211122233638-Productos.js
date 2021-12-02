'use strict';
const productos = require("../../database/productos.json");
const db = require("../models");

let productosArray = productos.map(product => {
  let producto = {
    nombre: product.title,
    precio: product.price,
    descripcion: product.description,
    id_generos: product.genero === "hombre" ? 1 : 2 ,
    id_marcas:1,
    id_temporadas:product.temporada === "true" ? 1 : 2 , 
    id_outlets: product.outlet === "true" ? 1 : 2
    
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

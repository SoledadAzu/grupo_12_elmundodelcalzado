'use strict';
const { DataTypes } = require("sequelize/types");
const productos = require("../../database/productos.json")

let generoArray = productos.map (product => {
  let genero = {
    nombre: product.genero,
    createdAt: new Date,
    updatedAt: new Date

  }
  return genero
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('productos', genero, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('People', null, {});

  }
};

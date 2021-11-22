'use strict';

const generos = require("../../database/productos.json")

let generoArray = generos.map(gender => {
  let genero = {
    nombre: gender.genero,
  }
  return genero
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Generos', generoArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Generos', null, {});

  }
};

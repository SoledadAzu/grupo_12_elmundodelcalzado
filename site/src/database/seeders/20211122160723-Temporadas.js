'use strict';

const temporadas = require("../productos.json")

let temporadasArray = temporadas.map(product => {
  let mytemporada = {
    nombre: product.temporada,
   
  }
  return mytemporada
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Temporadas', temporadasArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Temporadas', null, {});

  }
};

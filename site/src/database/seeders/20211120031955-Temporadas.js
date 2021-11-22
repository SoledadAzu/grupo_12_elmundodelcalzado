'use strict';

const temporadas = ["true","false"] 

let temporadaArray = temporadas.map(producttemporada => {
  let temporada = {
    nombre: producttemporada,
   
  }
  return temporada
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Temporadas', temporadaArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Temporadas', null, {});

  }
};

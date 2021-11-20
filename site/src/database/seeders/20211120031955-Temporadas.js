'use strict';

const temporadas = ["true","false"] 

let temporadaArray = temporadas.map(producttemporada => {
  let temporada = {
    nombre: producttemporada,
    createdAt: new Date,
    updatedAt: new Date

  }
  return temporada
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('temporadas', temporadaArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('temporadas', null, {});

  }
};

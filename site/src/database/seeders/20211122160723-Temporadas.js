'use strict';

let temporadasArray = [
  {
    nombre: 'Si',
    createdAt: new Date,
    updatedAt: new Date 
  },
  {
    nombre: 'No',
    createdAt: new Date,
    updatedAt: new Date 
  }
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Temporadas', temporadasArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Temporadas', null, {});

  }
};

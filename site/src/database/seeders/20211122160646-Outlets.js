'use strict';

let outletArray = [
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
   
      await queryInterface.bulkInsert('Outlets', outletArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Outlets', null, {});

  }
};

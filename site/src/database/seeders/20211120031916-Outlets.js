'use strict';

const outlets = ["true","false"] 

let outletArray = outlets.map(productoutlet => {
  let outlet = {
    nombre: productoutlet,
    createdAt: new Date,
    updatedAt: new Date

  }
  return outlet
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('outlets', outletArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('outlets', null, {});

  }
};

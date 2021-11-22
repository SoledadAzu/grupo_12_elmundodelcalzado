'use strict';

const outlets = [0,1] 

let outletArray = outlets.map(productoutlet => {
  let outlet = {
    nombre: productoutlet,
   
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

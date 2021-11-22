'use strict';

const outlets = require("../productos.json")

let outletArray = outlets.map(productoutlet => {
  let outlet = {
    nombre: productoutlet.outlet,
   
  }
  return outlet
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Outlets', outletArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Outlets', null, {});

  }
};

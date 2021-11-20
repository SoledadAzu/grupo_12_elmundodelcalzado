'use strict';
let roles = ["admin","user"]

let rolArray = roles.map(rol => {
  let rolselect = {
    name : rol,
    createdAt: new Date,
    updatedAt: new Date
  }
return rolselect
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('categoria_usuario', rolArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('People', null, {});

  }
};

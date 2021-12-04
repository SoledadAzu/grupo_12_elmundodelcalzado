'use strict';

let rolArray = [
  {
    nombre: 'Admin',
    createdAt: new Date,
    updatedAt: new Date 
  },
  {
    nombre: 'User',
    createdAt: new Date,
    updatedAt: new Date 
  }
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Categoria_Usuarios', rolArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Categoria_Usuarios', null, {});

  }
};


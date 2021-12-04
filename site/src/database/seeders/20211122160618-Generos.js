'use strict';

let generos = [
  {
    nombre: 'Mujer',
    createdAt: new Date,
    updatedAt: new Date 
  },
  {
    nombre: 'Hombre',
    createdAt: new Date,
    updatedAt: new Date 
  }
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Generos', generos, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Generos', null, {});

  }
};

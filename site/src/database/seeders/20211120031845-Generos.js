'use strict';

const generos = ["hombre","mujer"] 

let generoArray = generos.map(gender => {
  let genero = {
    nombre: gender,
    createdAt: new Date,
    updatedAt: new Date

  }
  return genero
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('generos', generoArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('generos', null, {});

  }
};

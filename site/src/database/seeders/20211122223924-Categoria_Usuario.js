'use strict';
const usuarios = require("../users.json")

let rolArray = usuarios.map(roluser => {
  let users = {
    nombre: roluser.rol,  
  } 
  return users
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Categoria_Usuario', rolArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Categoria_Usuario', null, {});

  }
};


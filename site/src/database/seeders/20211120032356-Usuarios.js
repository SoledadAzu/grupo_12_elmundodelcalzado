'use strict';
const usuarios = require("../../database/users.json")

let usuariosArray = usuarios.map(usuario => {
  let usuariosData = {
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    email: ususario.email,
    password: usuario.password,
    imagen: usuario.img,

  }
  return usuariosData
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('usuarios', usuariosArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};

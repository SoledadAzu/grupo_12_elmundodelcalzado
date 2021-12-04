'use strict';
const usersjson = require("../../database/users.json");
const db = require("../models");

let usersArray = usersjson.map(user => {
  let usuario = {
    nombre: user.nombre,
    apellido: user.apellido,
    email: user.email,
    password: user.password, 
    id_categoria_usuarios: user.rol === "admin" ? 1 : 2,
    imagen: user.img 
  }
  
  return usuario
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Usuarios', usersArray, {});
    
  },
  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Usuarios', null, {});

  }
};

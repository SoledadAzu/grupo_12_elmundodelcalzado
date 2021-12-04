'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ordens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ordens.hasMany(models.Carrito_De_Compras, {
        as: "Carrito",
        foreignKey: "ordenId",
      })
      Ordens.belongsTo(models.Usuarios, {
        as: "Usuario",
        foreignKey: "usuarioId",
      })
    }
  };
  Ordens.init({
    usuarioId: DataTypes.INTEGER,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ordens',
  });
  return Ordens;
};
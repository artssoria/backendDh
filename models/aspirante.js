const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Aspirante = sequelize.define('Aspirante', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  dni: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  perfil_linkedin: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  sexo: {
    type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro'),
    allowNull: false
  },
  imagen: {
    type: DataTypes.BLOB('long'),
    allowNull: true
  },
  profesion: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'aspirantes',
  timestamps: false
});

module.exports = Aspirante;

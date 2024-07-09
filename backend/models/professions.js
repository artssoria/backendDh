const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Professions = sequelize.define('Professions', {
  id_profession: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name_profession: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'professions',
  timestamps: false
});

module.exports = Professions;
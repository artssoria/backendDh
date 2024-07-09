const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Locations = sequelize.define('Locations', {
  id_location: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false
  },
  province: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'locations',
  timestamps: false
});

module.exports = Locations;
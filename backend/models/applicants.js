const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Location = require('./locations');
const Profession = require('./professions');

const Applicants = sequelize.define('Applicants', {
  id_applicants: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url_linkedin: {
    type: DataTypes.STRING,
    allowNull: true
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  id_location: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_profession: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'applicants',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  paranoid: true, 
  deletedAt: 'deleted_at'
});
Applicants.belongsTo(Location, { foreignKey: 'id_location' });
Applicants.belongsTo(Profession, { foreignKey: 'id_profession' });

module.exports = Applicants;
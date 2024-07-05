const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('RecruitingRH', 'pruebasDH', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
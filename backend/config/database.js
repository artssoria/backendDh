const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pp_grupo3', 'pruebasDH', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
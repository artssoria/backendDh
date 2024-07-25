const db = require('../models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');
module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'pp_grupo3',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'pp_grupo3',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'pp_grupo3',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
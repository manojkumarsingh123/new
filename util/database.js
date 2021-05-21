const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecart1', 'mannu', 'Mm@0501', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

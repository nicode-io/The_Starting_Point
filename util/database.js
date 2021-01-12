const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('node-complete', 'root', 'rootroot', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.db'
  })
 
module.exports = sequelize;
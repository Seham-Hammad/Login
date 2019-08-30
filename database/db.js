const Sequelize = require('sequelize')
const sequelize = new Sequelize('loginsystem', 'root', 'Greenstar100', {
  host: 'localhost',
  dialect: 'mysql',
  
 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000// time in ms
  }
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db
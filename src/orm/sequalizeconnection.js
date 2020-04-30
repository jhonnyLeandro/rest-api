const Sequelize = require('sequelize');

let db = process.env.DB;
let user = process.env.USR;
let password = process.env.PASSWORD;

const sequelize = new Sequelize(db, user, password, {
  host: 'localhost',
  dialect:  'postgres'
});

module.exports.connection = sequelize;

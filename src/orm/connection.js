
import Sequelize from 'sequelize';
import createUser from './model/user';

let db = process.env.DB;
let user = process.env.USR;
let password = process.env.PASSWORD;
let host = process.env.HOST;

const sequelize = new Sequelize(db, user, password, {
  host: host,
  dialect:  'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const database = {}

database.sequelize = sequelize;
database.user = createUser(sequelize);
database.sequelize.sync();
export default database;


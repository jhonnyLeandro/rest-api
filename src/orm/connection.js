
import Sequelize from 'sequelize';
import createUser from './model/user';

let db = process.env.DB;
let user = process.env.USR;
let password = process.env.PASSWORD;

const sequelize = new Sequelize(db, user, password, {
  host: 'localhost',
  dialect:  'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const database = {}

database.sequelise = sequelize;
database.user = createUser(sequelize);

export default database;


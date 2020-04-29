const Sequelize = require('sequelize');
const Model = Sequelize.Model;

let db = process.env.DB;
let user = process.env.USR;
let password = process.env.PASSWORD;

const sequelize = new Sequelize(db, user, password, {
  host: 'localhost',
  dialect:  'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  class User extends Model {}

  User.init({
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  }, {
    sequelize,
    modelName: 'user'
    // options
  });

  // Note: using `force: true` will drop the table if it already exists
User.sync({ force: true }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });
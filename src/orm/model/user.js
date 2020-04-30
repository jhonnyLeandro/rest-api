const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const connection = require('../sequalizeconnection');
class User extends Model {};

User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'user'
});
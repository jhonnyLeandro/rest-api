import Sequelize from 'sequelize';

function createUser (sequelize) {
  
  const Model = Sequelize.Model;

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

  return User;
}

export default createUser;
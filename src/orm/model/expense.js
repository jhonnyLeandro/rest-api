import Sequelize from 'sequelize'
import connection from '../sequalizeconnection';
import User from './user';

const Model = Sequelize.Model;

class Expense extends Model {};

Expense.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  value:{
      type: Sequelize.FLOAT,
      allowNull: false
  }
}, {
  connection,
  modelName: 'expense'
});

Expense.belongsTo(User);

export default Expense;
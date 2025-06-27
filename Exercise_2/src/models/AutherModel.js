import { DataTypes } from 'sequelize';
import sequelize from '../db/database.js';


const Author = sequelize.define('Author', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
 
export default Author;
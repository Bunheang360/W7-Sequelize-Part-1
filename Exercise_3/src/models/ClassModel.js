import { DataTypes } from 'sequelize';
import sequelize from '../db/database.js'; 
const Class = sequelize.define('Class', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Class;
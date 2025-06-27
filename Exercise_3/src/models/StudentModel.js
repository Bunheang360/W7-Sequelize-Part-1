import { DataTypes } from 'sequelize';
import sequelize from '../db/database.js'; 

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Student;
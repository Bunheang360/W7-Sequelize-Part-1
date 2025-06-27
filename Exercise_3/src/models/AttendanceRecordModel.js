import { DataTypes } from 'sequelize';
import sequelize from '../db/database.js';

const AttendanceRecord = sequelize.define('AttendanceRecord', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'present', 
  },
});

export default AttendanceRecord;
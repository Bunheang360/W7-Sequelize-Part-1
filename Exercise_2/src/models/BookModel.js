import sequelize from '../db/database.js';
import { DataTypes } from 'sequelize';

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicationYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pages: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Book;
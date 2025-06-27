import Author from "./AutherModel.js";
import Book from "./BookModel.js";

Author.hasMany(Book);
Book.belongsTo(Author);

export { Author, Book };
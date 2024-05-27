import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../Style/Books.css";
function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3001/books");
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="books-title">Book Shop.</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.Cover && <img src={book.Cover} alt={book.Title} />}
            <h2 className="book-title">{book.Title}</h2>
            <p className="book-description">{book.Description}</p>
            <span>{book.Price}$</span>

            <Link
              onClick={() => handleUpdate(book.id)}
              to={`/update/${book.id}`}
            >
              <button className="update-button">Update</button>
            </Link>
            <button
              className="delete-button"
              onClick={() => handleDelete(book.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <Link to="/add">
        <button className="add-button">Add new book</button>
      </Link>
    </div>
  );
}

export default Books;

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./../Style/Add.css";

function Add() {
  const [book, setBook] = useState({
    Title: "",
    Description: "",
    Cover: "",
    Price: null,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  //console.log(book);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/books", book);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form">
      <h1 className="form-title">Add Book.</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="Title"
      />
      <input
        type="text"
        placeholder="Description"
        onChange={handleChange}
        name="Description"
      />
      <input
        type="text"
        placeholder="Cover"
        onChange={handleChange}
        name="Cover"
      />
      <input
        type="number"
        placeholder="Price"
        onChange={handleChange}
        name="Price"
      />
      <button className="book-add-button" onClick={handleClick}>
        Add Book
      </button>
    </div>
  );
}

export default Add;

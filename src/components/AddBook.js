import React, { useState } from 'react';
import '../styles/AddBook.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/Books/Books';

function AddBook() {
  const [book, setBook] = useState({ title: '', author: '' });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      ...book,
      id: uuidv4()
    };
    dispatch(addBook(newBook));
    setBook({ title: '', author: '' });
  };

  return (
    <div className="book">
      <div className="book-title">ADD NEW BOOK</div>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="book-form-item">
          <input type="text" name="title" id="title" placeholder="Book Title" value={book.title} onChange={handleInputChange} />
        </div>
        <div className="book-form-item">
          <input type="text" name="author" id="author" placeholder="Author" value={book.author} onChange={handleInputChange} />
        </div>
        <div className="book-form-item">
          <button type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;

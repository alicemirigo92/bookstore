import React, { useState } from 'react';
import '../styles/AddBook.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Alert from 'react-bootstrap/Alert';
import { addBooks } from '../redux/Books/AddBooks';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(addBooks({
        item_id: uuidv4(),
        title,
        author,
        category: 'Action',
      }));
      setTitle('');
      setAuthor('');
    } else {
      Alert('Please fill all fields');
    }
  };
  return (
    <div className="book">
      <div className="book-title">ADD NEW BOOK</div>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="book-form-item">
          <input type="text" name="title" id="title" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="book-form-item">
          <input type="text" name="author" id="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div className="book-form-item">
          <button type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;

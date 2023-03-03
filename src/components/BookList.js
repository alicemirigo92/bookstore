import React from 'react';
import PropTypes from 'prop-types';
import '../styles/BookList.css';
import BookItem from './BookItem';

const bookData = [
  { id: 1, title: 'The Hunger Games', author: 'Suzanne Collins' },
  { id: 2, title: 'Dune', author: 'Frank Herbert' },
];

function BookList() {
  return (
    <div className="books">
      <div className="book">
        <ul className="booklist">
          {bookData.map(({ id, title, author }) => (
            <BookItem key={id} title={title} author={author} />
          ))}
        </ul>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookList;

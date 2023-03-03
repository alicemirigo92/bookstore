import React from 'react';
import '../styles/BookList.css';
import BookItem from './BookItem';

function BookList() {
  const data = [
    { id: 1, title: 'The Hunger Games', author: 'Suzanne C' },
    { id: 1, title: 'Dune', author: 'Frank H' },
  ];
  return (
    <div className="books">
      <div className="book">
        <ul className="booklist">
          {data.map(({ id, title, author }) => (
            <BookItem key={id} title={title} author={author} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default BookList;

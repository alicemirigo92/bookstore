import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/Books';

function BookItem(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };
  return (
    <li className="list-item">
      <div className="details">
        <div className="genre">Fiction</div>
        <div className="title">{title}</div>
        <div className="author">{author}</div>
        <div className="interact">
          <div className="comment">Comments</div>
          <span className="brn" />
          <button type="button" id="remove-btn" onClick={handleRemoveBook} className="remove">Remove</button>
          <span className="brn" />
          <div className="edit">Edit</div>
        </div>
      </div>
      <div className="pace">
        <div className="pace-bar">
          <div className="pace-bar-outer">
            <div className="pace-bar-inner" />
          </div>
        </div>
        <div className="pace-percentage">
          64%
          <span>Completed</span>
        </div>
      </div>
      <span className="bxwn" />
      <div className="chapter">
        <div className="current">CURRENT CHAPTER</div>
        <div className="chapters">Chapter 17</div>
        <button type="button" className="update">
          UPDATE PROGRESS
        </button>
      </div>
    </li>
  );
}
BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;

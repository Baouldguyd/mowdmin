// BookDetail.js
import React from 'react';

const BookDetail = ({ match }) => {
  const { bookId } = match.params;

  return (
    <div>
      <h2 style={{
        color: 'white'
      }}>Book Detail</h2>
      <p>Book ID: {bookId}</p>
    </div>
  );
};

export default BookDetail;

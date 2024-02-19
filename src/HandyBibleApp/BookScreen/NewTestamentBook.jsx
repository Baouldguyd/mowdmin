import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

const NewTestamentBook = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookDetails, setBookDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const newTestamentBooks = [
    'Matthew',
    'Mark',
    'Luke',
    'John',
    'Acts',
    'Romans',
    '1 Corinthians',
    '2 Corinthians',
    'Galatians',
    'Ephesians',
    'Philippians',
    'Colossians',
    '1 Thessalonians',
    '2 Thessalonians',
    '1 Timothy',
    '2 Timothy',
    'Titus',
    'Philemon',
    'Hebrews',
    'James',
    '1 Peter',
    '2 Peter',
    '1 John',
    '2 John',
    '3 John',
    'Jude',
    'Revelation',
    
  ];

  useEffect(() => {
    const fetchBookDetails = async (selectedBook) => {
      setIsLoading(true);

      try {
        // Replace the API_URL with the actual URL of your API
        const response = await fetch(`https://bible-api.com/${selectedBook}1`);
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }

      setIsLoading(false);
    };

    if (selectedBook !== null) {
      // Load details when a book is selected
      fetchBookDetails(selectedBook);
    } else {
      // Clear details when no book is selected
      setBookDetails({});
    }
  }, [selectedBook]); // Trigger the effect whenever selectedBook changes

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '.5rem',
        }}
      >
        {newTestamentBooks.map((book, index) => (
          <span
            key={index}
            style={{
              color: 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '27vw',
              height: '3.5rem',
              border: '2px solid black',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedBook(index + 1)}
          >
            {book}
          </span>
        ))}
      </div>

      {/* Display book details */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {selectedBook !== null && (
            <>
              <h2>{bookDetails.title}</h2>
              <p>{bookDetails.description}</p>
              {/* Add more details as needed */}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NewTestamentBook;

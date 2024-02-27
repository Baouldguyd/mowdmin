import React, { useState, useEffect } from 'react';

const BookPage = ({ match, location }) => {
  const [loading, setLoading] = useState(true);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to check if component is mounted

    const fetchData = async () => {
      try {
        const bookId = match.params.bookId;
        const bookVersion = new URLSearchParams(location.search).get('bookVersion') || 'KJV';

        const apiUrl = `https://bolls.life/get-chapter/${bookVersion}/${bookId}`;
        const response = await fetch(apiUrl);

        if (!isMounted) {
          // Component is unmounted, do not update state
          return;
        }

        const data = await response.json();
        setBookData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      isMounted = false; // Set the flag to false when component is unmounted
    };
  }, [match.params.bookId, location.search]);

  return (
    <div style={{ padding: '20px', border: '2px solid black' }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Book Details for Book ID: {match.params.bookId}</h1>
          {bookData && (
            <div>
              <p>Title: {bookData.title}</p>
              <p>Content: {bookData.content}</p>
              {/* Add more content and styling here */}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BookPage;

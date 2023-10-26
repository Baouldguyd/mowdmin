import React, { useState, useEffect } from 'react';

const BibleComponent = () => {
  const [verse, setVerse] = useState('');
  const [error, setError] = useState(null);

  const fetchVerse = async () => {
    try {
      const response = await fetch(
            PROCESS.ENV.REACT_APP_BIBLE_API_URL + '?translation=kjv'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }

      const data = await response.json();
      setVerse(data.verse);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchVerse();
  }, []);

  return (
    <div>
      {/* {error && <div>Error: {error}</div>}
      {verse && <div>Verse: {verse}</div>} */}
    <form action="">

        sel

    </form>
      
    </div>
  );
};

export default BibleComponent;

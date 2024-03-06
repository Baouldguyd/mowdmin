// BibleDisplayPage.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useBible } from './BibleContext';

const BibleDisplayPage = () => {
  const { selectedBible } = useBible();

  useEffect(() => {
    if (selectedBible) {
      // Make an API call using Axios with the selected Bible ID
      axios.get(`https://api.example.com/bible/${selectedBible.bibleId}`)
        .then((response) => {
          // Handle the response
          console.log(response.data);
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
    }
  }, [selectedBible]);

  return (
    <div>
      {/* Display Bible content here */}
    </div>
  );
};

export default BibleDisplayPage;

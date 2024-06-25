// BibleSelectionPage.js
import React from 'react';
import { useBible } from './BibleContext';

const BibleSelectionPage = () => {
  const { setBible } = useBible();

  const handleBibleSelect = (bible) => {
    setBible(bible);
    // Navigate to the next page where the Bible content will be displayed
    // You can use React Router or any other navigation library here
  };

  return (
    <div>
      <button onClick={() => handleBibleSelect({ bibleVersion: 'kjv', bibleId: 'kjvBibleId' })}>
        KJV
      </button>
      <button onClick={() => handleBibleSelect({ bibleVersion: 'nlt', bibleId: 'nltBibleId' })}>
        NLT
      </button>
      <button onClick={() => handleBibleSelect({ bibleVersion: 'asv', bibleId: 'asvBibleId' })}>
        ASV
      </button>
    </div>
  );
};

export default BibleSelectionPage;

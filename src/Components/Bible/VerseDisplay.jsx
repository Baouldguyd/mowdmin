import React from 'react';

function VerseDisplay({ text, chapter, verseNumber, bookName }) {
  return (
    <div className="VerseDisplay">
      <p> {bookName}</p>
      <p>
       {"["} <span>{chapter}</span> {":"}
        <span>{verseNumber}</span>{" ]"}
      </p>
      
      <p
      className='verseText'
      >{text}</p>
      
    </div>
  );
}

export default VerseDisplay;

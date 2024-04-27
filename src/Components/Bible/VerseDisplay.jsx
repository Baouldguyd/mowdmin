import React from 'react';

function VerseDisplay({ text, chapter, verseNumber, bookName }) {
  return (
    <div className="VerseDisplay">
      <span> {bookName}</span>
      
       {"["} <span>{chapter}</span> {":"}
        <span>{verseNumber}</span>{" ]"}
      
      
      <p
      className='verseText'
      >{text}</p>
      
    </div>
  );
}

export default VerseDisplay;

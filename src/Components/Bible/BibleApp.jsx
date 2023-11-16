import React, { useState } from 'react';
import VerseDisplay from './VerseDisplay';
import biblecross from '../../Assets/biblecross.jpg'


function BibleApp() {
  // Define the books and chapters for Old and New Testaments
  const oldTestamentBooks = [
    
    'Genesis',
  'Exodus',
  'Leviticus',
  'Numbers',
  'Deuteronomy',
  'Joshua',
  'Judges',
  'Ruth',
  '1 Samuel',
  '2 Samuel',
  '1 Kings',
  '2 Kings',
  '1 Chronicles',
  '2 Chronicles',
  'Ezra',
  'Nehemiah',
  'Esther',
  'Job',
  'Psalms',
  'Proverbs',
  'Ecclesiastes',
  'Song of Solomon',
  'Isaiah',
  'Jeremiah',
  'Lamentations',
  'Ezekiel',
  'Daniel',
  'Hosea',
  'Joel',
  'Amos',
  'Obadiah',
  'Jonah',
  'Micah',
  'Nahum',
  'Habakkuk',
  'Zephaniah',
  'Haggai',
  'Zechariah',
  'Malachi',
    
    /* Add more books here */
  ];
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
  
  // You can access any book in the array by its index, e.g., newTestamentBooks[0] for Matthew.
  

  const [selectedTestament, setSelectedTestament] = useState('Select A Book');
  const [selectedBook, setSelectedBook] = useState('Select a Book');
  const [selectedChapter, setSelectedChapter] = useState('Select a Chapter');
  const [selectedVerseNumber, setSelectedVerseNumber] = useState('Select a verse Number');
  const [verseText, setVerseText] = useState('');

  // Function to handle verse selection
  const handleVerseSelection = () => {
    // Construct the verse reference
    const verse = `${selectedBook} ${selectedChapter}:${selectedVerseNumber}`;
    const kjv = '?translation=kjv'
    // Make an API request to retrieve the Bible verse
    fetch(`https://bible-api.com/${verse}${kjv}`)
      .then((response) => response.json())
      .then((data) => {
        setVerseText(data.text);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="aboutpg bible fade-in appear ">
      
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className="abouthead">
        <div className="aboutheadimg">
          <img src={biblecross} alt="" />
        </div>
      </div>
    <div className="App">
      <header className="App-header">
        <h2>Your Mobile Bible Devotional Reading</h2>
      </header>
      <div className="App-content">
        <div>
          <select
            value={selectedTestament}
            onChange={(e) => setSelectedTestament(e.target.value)}
          >
            <option value="nil">Select A Testament</option>
            <option value="Old Testament">Old Testament</option>
            <option value="New Testament">New Testament</option>
          </select>
        </div>
        <div>
          <select
            value={selectedBook}
            onChange={(e) => setSelectedBook(e.target.value)}
          >
            <option value="nil">Select A Book</option>
            {selectedTestament === 'Old Testament'
              ? oldTestamentBooks.map((book) => (
                  
                  <option key={book} value={book} >
                    {book}
                  </option>
                ))
              : newTestamentBooks.map((book) => (
                  <option key={book} value={book}>
                    {book}
                  </option>
                ))}
          </select>
        </div>
        <div>
          <select
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value)}
          >
            <option value="nil">Select A Chapter</option>
            {Array.from({ length: 150 }, ( _ , i) => (
              <option key={i + 1} value={i + 1} >
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            value={selectedVerseNumber}
            onChange={(e) => setSelectedVerseNumber(e.target.value)}
          >
            <option value="nil">Select A Verse</option>
            {Array.from({ length: 150 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleVerseSelection}>Open</button>
        <VerseDisplay text={verseText}  />
      </div>
    </div>
    </div>
  );
}

export default BibleApp;

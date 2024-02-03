import React, { useState } from "react";
import biblecross from "../../Assets/torah.jpg";

function BibleApp() {
  const oldTestamentBooks = [
    {
      book: "Genesis",
      chapter_length: 50,
    },
    {
      book: "Exodus",
      chapter_length: 40,
    },
    {
      book: "Leviticus",
      chapter_length: 27,
    },
    {
      book: "Numbers",
      chapter_length: 36,
    },
    {
      book: "Deuteronomy",
      chapter_length: 34,
    },
    // Add more books here
  ];

  const newTestamentBooks = [
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
    "Revelation",
  ];

  const [selectedTestament, setSelectedTestament] = useState("nil");
  const [selectedBook, setSelectedBook] = useState("nil");
  const [selectedChapter, setSelectedChapter] = useState("nil");
  const [bibleVerses, setBibleVerses] = useState([]);

  const handleVerseSelection = () => {
    const verse = `${selectedBook} ${selectedChapter}`;
    const kjv = "?translation=kjv";

    fetch(`https://bible-api.com/${verse}${kjv}`)
      .then((response) => response.json())
      .then((data) => {
        setBibleVerses(data.verses);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="aboutpg bible fade-in appear">
      {/* Add your style import here */}
      <div className="abouthead">
        <div className="aboutheadimg">
          <img src={biblecross} alt="" />
        </div>
      </div>
      <div className="App">
        <header className="App-header">
          <h2>The Five Books of Moses</h2>
        </header>
        <div className="App-content">
          <div>
            <select
              value={selectedTestament}
              onChange={(e) => setSelectedTestament(e.target.value)}
            >
              <option value="nil">Select A Testament</option>
              <option value="Old Testament">Old Testament</option>
              {/* Add New Testament option if needed */}
            </select>
          </div>
          <div>
            <select
              value={selectedBook}
              onChange={(e) => setSelectedBook(e.target.value)}
            >
              <option value="nil">Select A Book</option>
              {selectedTestament === "Old Testament" &&
                oldTestamentBooks.map((book, index) => (
                  <option key={index} value={book.book}>
                    {book.book}
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
              {selectedTestament === "Old Testament" &&
                selectedBook !== "nil" &&
                Array.from({ length: oldTestamentBooks.find((b) => b.book === selectedBook).chapter_length }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
            </select>
          </div>
          <button onClick={handleVerseSelection}>Open</button>

          {bibleVerses.map((bibleVerse, index) => (
            <div key={index}>
              <p> {bibleVerse.book_name}</p>
              <p>
                {"["} <span>{bibleVerse.chapter}</span> {":"}{" "}
                <span>{bibleVerse.verse}</span>
                {" ]"}
              </p>
              <p className="verseText">{bibleVerse.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BibleApp;

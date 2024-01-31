import React, { useState } from "react";
// import VerseDisplay from "./VerseDisplay";
import biblecross from "../../Assets/torah.jpg";

function BibleApp() {
  // Define the books and chapters for Old and New Testaments
  const oldTestamentBooks = [ 
    {
      book: "Genesis",
      chapter_length: 50,
    },

    {
      book: "Exodus",
      chapter_length: 40
    },
    {
      book : "Leviticus",
      chapter_length: 27
    },
    {
      book: "Numbers",
      chapter_length: 36
    },
    {
      book: "Deuteronomy",
      chapter_length: 34
    }



    // 'Joshua',
    // 'Judges',
    // 'Ruth',
    // '1 Samuel',
    // '2 Samuel',
    // '1 Kings',
    // '2 Kings',
    // '1 Chronicles',
    // '2 Chronicles',
    // 'Ezra',
    // 'Nehemiah',
    // 'Esther',
    // 'Job',
    // 'Psalms',
    // 'Proverbs',
    // 'Ecclesiastes',
    // 'Song of Solomon',
    // 'Isaiah',
    // 'Jeremiah',
    // 'Lamentations',
    // 'Ezekiel',
    // 'Daniel',
    // 'Hosea',
    // 'Joel',
    // 'Amos',
    // 'Obadiah',
    // 'Jonah',
    // 'Micah',
    // 'Nahum',
    // 'Habakkuk',
    // 'Zephaniah',
    // 'Haggai',
    // 'Zechariah',
    // 'Malachi',

    /* Add more books here */
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

  // You can access any book in the array by its index, e.g., newTestamentBooks[0] for Matthew.

  const [selectedTestament, setSelectedTestament] = useState("Select A Book");
  const [selectedBook, setSelectedBook] = useState("Select a Book");
  const [selectedChapter, setSelectedChapter] = useState("Select a Chapter");
  // const [selectedVerseNumber, setSelectedVerseNumber] = useState('Select a verse Number');
  // const [verseText, setVerseText] = useState("");
  // const [chapterText, setChapterText] = useState("");
  // const [verseNumber, setVerseNumber] = useState("");
  // const [bookName, setBookName] = useState("");
  const [bibleVerses, setBibleVerses] = useState([]);

  // Function to handle verse selection
  const handleVerseSelection = () => {
    // Construct the verse reference
    const verse = `${selectedBook} ${selectedChapter}`;
    const kjv = "?translation=kjv";
    // Make an API request to retrieve the Bible verse

    fetch(`https://bible-api.com/${verse}${kjv}`)
      .then((response) => response.json())
      .then((data) => {
        // setVerseText(data.verses[0].text);
        // setVerseNumber(data.verses[0].verse);
        // setChapterText(data.verses[0].chapter);
        // setBookName(data.verses[0].book_name);
        setBibleVerses(data.verses);

        console.log(data);
        console.log(data.verses);
        console.log(data.verses[0].book_name);
        console.log(data.verses[0].chapter);
        console.log(data.verses[0].verse);
        console.log(data.verses[0].text);
      })
      .catch((error) => {
        console.error("Error:", error);
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
          <h2>The Five Books of Moses</h2>
        </header>
        <div className="App-content">
          <div>
            <select
              value={selectedTestament}
              onChange={(e) => setSelectedTestament(e.target.value)}
            >
              <option value="nil">Select A Book</option>
              <option value="Old Testament">Torah</option>
              {/* <option value="New Testament">New Testament</option> */}
            </select>
          </div>
          <div>
            <select
              value={selectedBook}
              onChange={(e) => setSelectedBook(e.target.value)}
            >
              <option value="nil">Select A Book</option>
              {selectedTestament === "Old Testament"
                ? oldTestamentBooks.map((book, index) => (
                    <option key={index} value={book}>
                      {book.book}
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
    {selectedTestament === "Old Testament" &&
      selectedBook !== "Select a Book" &&
      oldTestamentBooks
        .find((book) => book.book === selectedBook).book
        .chapter_length.map((_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
  </select>
</div>



          {/* <div>
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
        </div> */}
          <button onClick={handleVerseSelection}>Open</button>

          {/* <VerseDisplay
            text={verseText}
            chapter={chapterText}
            verseNumber={verseNumber}
            bookName={bookName}
          /> */}

          {bibleVerses.map((bibleVerse, index) => (
            <div key={index} value={bibleVerse}>
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

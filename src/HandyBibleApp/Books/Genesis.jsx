// import axios from "axios";
import React, { useState, useEffect } from "react";
import Spinner from "../../Components/Loader/Spinner";

const Genesis = () => {
  // const [bibleNumbers, setBibleNumbers] = useState([])

  const [selectedBook, SetSelectedBook] = useState('1')

  const [bibleVerses, setBibleVerses] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState("1");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState('KJV')

  const bibleVersions = [
    {
      bibleVersion : "YLT",
      translationName: "Young's Literal Translation (1898)",
      "info": "http://wikipedia.org/wiki/Young%27s_Literal_Translation",
      "updated": 1626349711821
    },
    {
      bibleVersion : "KJV",
      translationName: "King James Version 1769 with Apocrypha",
      "info": "http://wikipedia.org/wiki/King_James_Version",
      "updated": 1684914894403
    },
    {
      bibleVersion : "NKJV",
      translationName: "New King James Version, 1982",
      "info": "http://wikipedia.org/wiki/New_King_James_Version",
      "updated": 1635188106109
    },
    {
      bibleVersion : "WEB",
      translationName: "World English Bible",
      "info": "http://wikipedia.org/wiki/World_English_Bible",
      "updated": 1678028993719
    },
    {
      bibleVersion : "RSV",
      translationName: "Revised Standard Version (1952)",
      "info": "http://wikipedia.org/wiki/Revised_Standard_Version",
      "updated": 1635188106109
    },
    {
      bibleVersion : "CJB",
      translationName: "The Complete Jewish Bible (1998)",
      "info": "http://wikipedia.org/wiki/Messianic_Bible_translations#Complete_Jewish_Bible_(CJB)",
      "updated": 1635188106109
    },
    {
      bibleVersion : "TS2009",
      translationName: "The Scriptures 2009",
      "info": "http://isr-messianic.org/publications/the-scriptures.html",
      "updated": 1635188106109
    },
    {
      bibleVersion : "LXXE",
      translationName: "English version of the Septuagint Bible, 1851",
      "info": "http://ebible.org/eng-Brenton/",
      "updated": 1635188106109
    },
    {
      bibleVersion : "TLV",
      translationName: "Tree of Life Version",
      "info": "http://www.tlvbiblesociety.org/tree-of-life-version",
      "updated": 1635188106109
    },
    {
      bibleVersion : "LSB",
      translationName: "The Legacy Standard Bible",
      "info": "http://lsbible.org/",
      "updated": 1702218835084
    },
    {
      bibleVersion : "NASB",
      translationName: "New American Standard Bible (1995)",
      "info": "http://wikipedia.org/wiki/New_American_Standard_Bible",
      "updated": 1598253681687
    },
    {
      bibleVersion : "ESV",
      translationName: "English Standard Version 2001, 2016",
      "info": "http://en.wikipedia.org/wiki/English_Standard_Version",
      "updated": 1635188106109
    },
    {
      bibleVersion : "GNV",
      translationName: "Geneva Bible (1599)",
      "info": "http://wikipedia.org/wiki/Geneva_Bible",
      "updated": 1635188106109
    },
    {
      bibleVersion : "DRB",
      translationName: "Douay Rheims Bible",
      "info": "http://en.wikipedia.org/wiki/Douay%E2%80%93Rheims_Bible",
      "updated": 1591185595149
    },
    {
      bibleVersion : "NIV2011",
      translationName: "New International Version, 2011",
      "info": "http://en.wikipedia.org/wiki/New_International_Version",
      "updated": 1626349711821
    },
    {
      bibleVersion : "NIV",
      translationName: "New International Version, 1984",
      "info": "http://en.wikipedia.org/wiki/New_International_Version",
      "updated": 1626349711821
    },
    {
      bibleVersion : "NLT",
      translationName: "New Living Translation, 2015",
      "info": "http://en.wikipedia.org/wiki/New_Living_Translation",
      "updated": 1635188106109
    },
    {
      bibleVersion : "NRSVCE",
      translationName: "New Revised Standard Version Catholic Edition, 1993",
      "info": "http://en.wikipedia.org/wiki/New_Revised_Standard_Version_Catholic_Edition",
      "updated": 1635188106109
    },
    {
      bibleVersion : "NET",
      translationName: "New English Translation, 2007",
      "info": "http://en.wikipedia.org/wiki/New_English_Translation",
      "updated": 1635188106109
    },
    {
      bibleVersion : "NJB1985",
      translationName: "New Jerusalem Bible, 1985",
      "info": "http://en.wikipedia.org/wiki/New_Jerusalem_Bible",
      "updated": 1635188106109
    },
    {
      bibleVersion : "SPE",
      translationName: "Samaritan Pentateuch in English, 2013",
      "info": "http://en.wikipedia.org/wiki/Samaritan_Pentateuch",
      "updated": 1635188106109
    },
    {
      bibleVersion : "LBP",
      translationName: "Aramaic Of The Peshitta: Lamsa, 1933",
      "info": "http://en.wikipedia.org/wiki/Lamsa_Bible",
      "updated": 1635188106109
    },
    {
      bibleVersion : "AMP",
      translationName: "Amplified Bible, 2015",
      "info": "http://en.wikipedia.org/wiki/Amplified_Bible",
      "updated": 1673261959445
    },
    {
      bibleVersion : "MSG",
      translationName: "The Message, 2002",
      "info": "http://messagebible.com",
      "updated": 1635188106109
    },
    {
      bibleVersion : "LSV",
      translationName: "Literal Standard Version",
      "info": "http://www.lsvbible.com/",
      "updated": 1635188106109
    },
    {
      bibleVersion : "BSB",
      translationName: "The Holy Bible, Berean Standard Bible",
      "info": "http://berean.bible",
      "updated": 1635188106109
    },
    {
      bibleVersion: "YLT",
      bibleId: "01b29f4b342acc35-01",
    },
    {
      bibleVersion: "RSV",
      bibleId: "40072c4a5aba4022-01",
    },
    {
      bibleVersion: "ASV",
      bibleId: "06125adad2d5898a-01",
    },
    {
      bibleVersion: "OSV",
      bibleId: "c89622d31b60c444-02",
    },
    {
      bibleVersion: "OJB",
      bibleId: "c89622d31b60c444-02",
    },
    {
      bibleVersion: "WEB",
      bibleId: "9879dbb7cfe39e4d-01",
    },
    {
      bibleVersion: "ELBBK",
      bibleId: "f492a38d0e52db0f-01",
    },
  ];

  const bookSelect = [
    { bookid: 1, chronorder: 1, name: "Genesis", chapters: 50 },
    { bookid: 2, chronorder: 3, name: "Exodus", chapters: 40 },
    { bookid: 3, chronorder: 4, name: "Leviticus", chapters: 27 },
    { bookid: 4, chronorder: 5, name: "Numbers", chapters: 36 },
    { bookid: 5, chronorder: 6, name: "Deuteronomy", chapters: 34 },
    { bookid: 6, chronorder: 7, name: "Joshua", chapters: 24 },
    { bookid: 7, chronorder: 8, name: "Judges", chapters: 21 },
    { bookid: 8, chronorder: 9, name: "Ruth", chapters: 4 },
    { bookid: 9, chronorder: 10, name: "1 Samuel", chapters: 31 },
    { bookid: 10, chronorder: 11, name: "2 Samuel", chapters: 24 },
    { bookid: 11, chronorder: 15, name: "1 Kings", chapters: 22 },
    { bookid: 12, chronorder: 28, name: "2 Kings", chapters: 25 },
    { bookid: 13, chronorder: 12, name: "1 Chronicles", chapters: 29 },
    { bookid: 14, chronorder: 16, name: "2 Chronicles", chapters: 36 },
    { bookid: 15, chronorder: 37, name: "Ezra", chapters: 10 },
    { bookid: 16, chronorder: 38, name: "Nehemiah", chapters: 13 },
    { bookid: 17, chronorder: 36, name: "Esther", chapters: 10 },
    { bookid: 18, chronorder: 2, name: "Job", chapters: 42 },
    { bookid: 19, chronorder: 13, name: "Psalm", chapters: 150 },
    { bookid: 20, chronorder: 17, name: "Proverbs", chapters: 31 },
    { bookid: 21, chronorder: 18, name: "Ecclesiastes", chapters: 12 },
    { bookid: 22, chronorder: 14, name: "Song of Solomon", chapters: 8 },
    { bookid: 23, chronorder: 25, name: "Isaiah", chapters: 66 },
    { bookid: 24, chronorder: 29, name: "Jeremiah", chapters: 52 },
    { bookid: 25, chronorder: 30, name: "Lamentations", chapters: 5 },
    { bookid: 26, chronorder: 32, name: "Ezekiel", chapters: 48 },
    { bookid: 27, chronorder: 33, name: "Daniel", chapters: 12 },
    { bookid: 28, chronorder: 23, name: "Hosea", chapters: 14 },
    { bookid: 29, chronorder: 20, name: "Joel", chapters: 3 },
    { bookid: 30, chronorder: 21, name: "Amos", chapters: 9 },
    { bookid: 31, chronorder: 31, name: "Obadiah", chapters: 1 },
    { bookid: 32, chronorder: 19, name: "Jonah", chapters: 4 },
    { bookid: 33, chronorder: 22, name: "Micah", chapters: 7 },
    { bookid: 34, chronorder: 24, name: "Nahum", chapters: 3 },
    { bookid: 35, chronorder: 27, name: "Habakkuk", chapters: 3 },
    { bookid: 36, chronorder: 26, name: "Zephaniah", chapters: 3 },
    { bookid: 37, chronorder: 34, name: "Haggai", chapters: 2 },
    { bookid: 38, chronorder: 35, name: "Zechariah", chapters: 14 },
    { bookid: 39, chronorder: 39, name: "Malachi", chapters: 4 },
    { bookid: 40, chronorder: 40, name: "Matthew", chapters: 28 },
    { bookid: 41, chronorder: 58, name: "Mark", chapters: 16 },
    { bookid: 42, chronorder: 52, name: "Luke", chapters: 24 },
    { bookid: 43, chronorder: 66, name: "John", chapters: 21 },
    { bookid: 44, chronorder: 54, name: "Acts", chapters: 28 },
    { bookid: 45, chronorder: 46, name: "Romans", chapters: 16 },
    { bookid: 46, chronorder: 44, name: "1 Corinthians", chapters: 16 },
    { bookid: 47, chronorder: 45, name: "2 Corinthians", chapters: 13 },
    { bookid: 48, chronorder: 41, name: "Galatians", chapters: 6 },
    { bookid: 49, chronorder: 47, name: "Ephesians", chapters: 6 },
    { bookid: 50, chronorder: 49, name: "Philippians", chapters: 4 },
    { bookid: 51, chronorder: 50, name: "Colossians", chapters: 4 },
    { bookid: 52, chronorder: 42, name: "1 Thessalonians", chapters: 5 },
    { bookid: 53, chronorder: 43, name: "2 Thessalonians", chapters: 3 },
    { bookid: 54, chronorder: 55, name: "1 Timothy", chapters: 6 },
    { bookid: 55, chronorder: 59, name: "2 Timothy", chapters: 4 },
    { bookid: 56, chronorder: 57, name: "Titus", chapters: 3 },
    { bookid: 57, chronorder: 51, name: "Philemon", chapters: 1 },
    { bookid: 58, chronorder: 53, name: "Hebrews", chapters: 13 },
    { bookid: 59, chronorder: 48, name: "James", chapters: 5 },
    { bookid: 60, chronorder: 56, name: "1 Peter", chapters: 5 },
    { bookid: 61, chronorder: 60, name: "2 Peter", chapters: 3 },
    { bookid: 62, chronorder: 61, name: "1 John", chapters: 5 },
    { bookid: 63, chronorder: 62, name: "2 John", chapters: 1 },
    { bookid: 64, chronorder: 63, name: "3 John", chapters: 1 },
    { bookid: 65, chronorder: 64, name: "Jude", chapters: 1 },
    { bookid: 66, chronorder: 65, name: "Revelation", chapters: 22 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("https://bolls.life/get-chapter/KJV/1/1/");

        const result = await response.json();

        const booksResponse = await fetch("https://bolls.life/get-books/YLT/");
        const booksResult = await booksResponse.json();
        console.log(booksResult);

        console.log(result);
      } catch (error) {
        console.error("An error occurred", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedChapter]);

  const handleChapterClick = async (chapter) => {
    setIsLoading(true)
    setSelectedChapter(chapter);
    try {
      const chapterResponse = await fetch(
        `https://bolls.life/get-chapter/${selectedVersion}/${selectedBook}/${chapter}`
      );

      const chapterData = await chapterResponse.json();

      console.log(chapterData);

      setBibleVerses(chapterData);
    } catch (error) {
      console.error("An error occured fetching selected chapter", error);
    }
    finally{
      setIsLoading(false)
    }
  };

  return (
    <div className="bibleContainer">
      <div className="bookOfTheBible">
        <div className="bibleContainDiv">
          <span className="chapBook">
            <select name="" id=""
            onChange={(e) => SetSelectedBook(e.target.value)}
            style={{
              fontSize: '1.4rem',
              fontWeight: 'bold',
              width: 'auto',
              border: 'none',
              height: 'auto'
              
            }}
            >
              {
                bookSelect.map((book, index)=> (
                  <option value={book.bookid}
                  key={index}
                  >{book.name}</option>
                ))
              }
            </select>
            </span>
          <span className="bibleVersion">
            <select 
            onChange={(e) => setSelectedVersion(e.target.value)}
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              width: '3.6rem',
              border: 'none',
              
              
            }}
            
            >
              {bibleVersions.map((version, index) => (
                <option value={version.bibleVersion} key={index}>
                  {version.bibleVersion}{" "}{version.translationName}
                </option>
              ))}
            </select>
            
          </span>
          <span className="cha">CHA</span>
        </div>
        <div className="divLine"></div>
      </div>
      <div className="bibleDisplay">
        {isLoading ? (
          <div
            style={{
              display: "flex",
              height: "100vh",
              backgroundColor: "inherit",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <Spinner />{" "}
            <p
            style={{
              color: 'black',
              textAlign: 'center',
            }}>Loading</p>
          </div>
        ) : (
          <>
            <div className="bibleText">
              {bibleVerses.map((bibleVerse, index) => (
                <div key={index}>
                  <p>
                    {"["} <span>{bibleVerse.verse}</span>
                    {" ]"} <span>{bibleVerse.text}</span>
                  </p>
                </div>
              ))}
            </div>
            <div
              className="bibleChapterNumber"
              id="chapterSelect"
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value)}
            >
              {/* {bibleNumbers.map((item, index) => (
                <p
                  key={index}
                  style={{
                    textAlign: "center",
                    fontSize: "1.2rem",
                    color: selectedChapter === item ? 'blue' : 'white',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleChapterClick(item)}
                >
                  {item.number}
                </p>
              ))} */}
              {Array.from(
                {
                  length:
                    bookSelect.find((book) => book.bookid === 1)?.chapters || 0,
                },
                (_, index) => index + 1
              ).map((chapter) => (
                <p
                  key={chapter}
                  value={chapter}
                  style={{
                    textAlign: "center",
                    fontSize: "1.2rem",
                    color: selectedChapter === chapter ? "blue" : "white",
                    cursor: "pointer",
                  }}
                  onClick={() => handleChapterClick(chapter)}
                >
                  {chapter}
                </p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Genesis;

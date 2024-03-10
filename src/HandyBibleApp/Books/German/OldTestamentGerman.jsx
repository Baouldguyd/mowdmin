// import axios from "axios";
import React, { useState, useEffect } from "react";
import Spinner from "../../../Components/Loader/Spinner";

const OldTestamentGerman = () => {
  // const [bibleNumbers, setBibleNumbers] = useState([])

  const [selectedBook, setSelectedBook] = useState("1");
  const [bibleVerses, setBibleVerses] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState("1");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState("MB");
  const [chapterLength, setChapterLength] = useState([])

  const bibleVersions = [
    
    {
      translationName: "Menge-Bibel",
      bibleVersion: "MB",
      "info": "http://de.wikipedia.org/wiki/Hermann_Menge",
      "updated": 1591185595149
    },
    {
      translationName: "Elberfelder Bibel, 1871",
      bibleVersion: "ELB",
      "info": "http://de.wikipedia.org/wiki/Elberfelder_Bibel",
      "updated": 1591185595149
    },
    {
      bibleVersion: "SCH",
      translationName: "Schlachter (1951)",
      "info": "http://wikipedia.org/wiki/Schlachter_Bible",
      "updated": 1591185595149
    },
    {
      bibleVersion: "LUT",
      translationName: "Luther (1912)",
      "info": "http://wikipedia.org/wiki/Luther_Bible",
      "updated": 1591185595149
    }



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
    { bookid: 39, chronorder: 39, name: "Malachi", chapters: 4 }
  ];
  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://bolls.life//get-chapter/${selectedVersion}/${selectedBook}/1`
        );

        const result = await response.json();

        const booksResponse = await fetch("https://bolls.life//get-books/YLT/");
        const booksResult = await booksResponse.json();
       
        const selectedBookChapter = bookSelect.find(
          (book) =>   book.bookid == selectedBook
        );

        const chapterNumbers = selectedBookChapter
    ? Array.from(
        { length: selectedBookChapter.chapters },
        (_, index) => index + 1
      )
    : [];

//     console.log(selectedBookChapter);
//     console.log(chapterNumbers)
// console.log(bookSelect);
    setChapterLength(chapterNumbers)

console.log(selectedBook);


        console.log(booksResult);
        console.log(result);
        setBibleVerses(result)
      } catch (error) {
        console.error("An error occurred", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedBook, selectedChapter, selectedVersion]);


  const handleChapterClick = async (chapter) => {
    // setIsLoading(true)
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
    // finally{
    //   setIsLoading(false)
    // }
  };
  return (
    <div className="bibleContainer">
      <div className="bookOfTheBible">
        <div className="bibleContainDiv">
          <span className="chapBook">
            <select
              name=""
              id=""
              onChange={(e) => setSelectedBook(e.target.value)}
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                width: "auto",
                border: "none",
                height: "auto",
              }}
            >
              {bookSelect.map((book, index) => (
                <option value={book.bookid} key={index}>
                  {book.name}
                </option>
              ))}
            </select>
          </span>
          <span className="bibleVersion">
            <select
              onChange={(e) => setSelectedVersion(e.target.value)}
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                width: "3.6rem",
                border: "none",
              }}
            >
              {bibleVersions.map((version, index) => (
                <option value={version.bibleVersion} key={index}>
                  {version.bibleVersion} {version.translationName}
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
                color: "black",
                textAlign: "center",
              }}
            >
              Loading
            </p>
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
              {chapterLength.map((chapter) => (
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

export default OldTestamentGerman;

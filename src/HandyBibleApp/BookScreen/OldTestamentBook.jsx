import React from "react";
import { Link } from "react-router-dom";

const OldTestamentBook = (props) => {
  const oldTestamentBooks = [
    {
      book: "Genesis",
      id: "1",
    },
    {
      book: "Exodus",
      id: "2",
    },
    {
      book: "Leviticus",
      id: "3",
    },
    {
      book: "Numbers",
      id: "4",
    },
    {
      book: "Deuteronomy",
      id: "5",
    },
    {
      book: "Joshua",
      id: "6",
    },
    {
      book: "Judges",
      id: "1",
    },
    {
      book: "Ruth",
      id: "7",
    },
    {
      book: "1 Samuel",
      id: "8",
    },
    {
      book: "2 Samuel",
      id: "9",
    },
    {
      book: "1 Kings",
      id: "11",
    },
    {
      book: "2 Kings",
      id: "12",
    },
    {
      book: "1 Chronicles",
      id: "13",
    },
    {
      book: "2 Chronicles",
      id: "14",
    },
    {
      book: "Ezra",
      id: "15",
    },
    {
      book: "Nehemiah",
      id: "16",
    },
    {
      book: "Esther",
      id: "17",
    },
    {
      book: "Job",
      id: "18",
    },
    {
      book: "Psalms",
      id: "19",
    },
    {
      book: "Proverbs",
      id: "20",
    },
    {
      book: "Ecclesiastes",

      id: "21",
    },
    {
      book: "Song of Solomon",
      id: "22",
    },
    {
      book: "Isaiah",
      id: "23",
    },
    {
      book: "Jeremiah",
      id: "24",
    },
    {
      book: "Lamentations",
      id: "25",
    },
    {
      book: "Ezekiel",
      id: "26",
    },
    {
      book: "Daniel",
      id: "27",
    },
    {
      book: "Hosea",
      id: "28",
    },
    {
      book: "Joel",
      id: "29",
    },
    {
      book: "Amos",
      id: "30",
    },
    {
      book: "Obadiah",
      id: "31",
    },
    {
      book: "Jonah",
      id: "32",
    },
    {
      book: "Micah",
      id: "33",
    },
    {
      book: "Nahum",
      id: "34",
    },
    {
      book: "Habakkuk",
      id: "35",
    },
    {
      book: "Genesis",
      id: "36",
    },
    {
      book: "Zephaniah",
      id: "37",
    },
    {
      book: "Haggai",
      id: "38",
    },
    {
      book: "Zechariah",
      id: "39",
    },
    {
      book: "Malachi",
      id: "40",
    },

    /* Add more books here */
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
      {oldTestamentBooks.map((book, index) => (
        <Link key={index} to={`/old-testament/${book.id}`}>
          <span
            key={index}
            style={{
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "27vw",
              height: "3.5rem",
              border: "2px solid black",
            }}
          >
            {book.book}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default OldTestamentBook;

import React, { useState, useEffect } from "react";
import axios from "axios";

const OldTestamentBook = () => {
  const [oldTestamentBooks, setOldTestamentBooks] = useState([]);
  const [bookName, setBookName] = useState('');
  const [bookNameInfo, setBookNameInfo] = useState('');

  useEffect(() => {
    const fetchBibleBooks = async () => {
      try {
        const response = await axios.get(
          `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books`,
          {
            headers: {
              "Content-Type": "application/json",
              "api-key": "0557abf27931c5f6a02610bc5fec32dc",
            },
          }
        );

        const data = response.data;

        // Check the API response structure and update the following lines accordingly
        const firstBook = data.data[0]; // Update this based on your API response structure

        const bookName = firstBook.name;
        const bookNameInfo = firstBook.nameLong;
        const bookId = firstBook.id;


        console.log(data);
        console.log(bookName);
        console.log(bookNameInfo);
        setOldTestamentBooks(data.data);
        setBookName(bookName);
        setBookNameInfo(bookNameInfo);
        console.log(bookId);
        
      } catch (error) {
        console.error("An error occurred", error);
      }
    };

    fetchBibleBooks();
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: ".5rem",
      }}
    >
      {oldTestamentBooks.map((book, index) => (
        <div key={index}>
          <span
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
            {book.name}
          </span>

          <span>
            {book.nameLong}
          </span>
        </div>
      ))}
    </div>
  );
};

export default OldTestamentBook;

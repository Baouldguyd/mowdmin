// import axios from "axios";
import React, { useState, useEffect } from "react";
import Spinner from "../../Components/Loader/Spinner";

const Genesis = () => {
  
  // const [bibleNumbers, setBibleNumbers] = useState([])

  const [bibleVerses, setBibleVerses] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  const bibleVersions = [
    {
        bibleVersion: 'KJV',
        bibleId: ''
    },
    {
        bibleVersion: 'LSV',
        bibleId: '01b29f4b342acc35-01'
    },
    {
        bibleVersion: 'RSV',
        bibleId: '40072c4a5aba4022-01'
    },
    {
        bibleVersion: 'ASV',
        bibleId: '06125adad2d5898a-01'
    },
    {
        bibleVersion: 'OSV',
        bibleId: 'c89622d31b60c444-02'
    },
    {
        bibleVersion: 'OJB',
        bibleId: 'c89622d31b60c444-02'
    },
    {
        bibleVersion: 'WEB',
        bibleId: '9879dbb7cfe39e4d-01'
    },
    {
        bibleVersion: 'ELBBK',
        bibleId: 'f492a38d0e52db0f-01'
    },
  ]
  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);

        try {

        const response = await fetch('https://bolls.life/get-chapter/KJV/1/1/');

        

        const result = await response.json();

        console.log(result);
            const data = response.data;

            setBibleVerses(result)

            // const booksData = data.data;
            // const chapterNumbers = booksData.chapters
            

          //   const chapterNumbersArray = chapterNumbers.map((chapter) => chapter.number);
          // setBibleNumbers(chapterNumbersArray);

            // setBibleNumbers(chapterNumbers);
        } catch (error) {
            console.error("An error occurred", error);
        } finally {
            setIsLoading(false);
        }
    };

    fetchData();

}, [selectedChapter]);

  // const handleChapterClick = async (chapter) => {
  //   setSelectedChapter(chapter);
  //   try {
  //     const chapterResponse = await axios.get(
  //        `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/chapters/GEN.1?content-type=json&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`,
  //        {
  //         headers:{
  //           'Content-Type': 'application/json',
  //           'api-key' : '0557abf27931c5f6a02610bc5fec32dc'
  //         }
  //        }
  //     );

  //     const chapterData = chapterResponse.data;
  //     const chapterInfo = chapterData.data
  //     const chapterContent = chapterInfo.content
      
  //     console.log(chapterData)
  //     console.log(chapterContent);

      
  //   } catch (error) {
      
  //   }
  // };

  return (
    <div className="bibleContainer">
      <div className="bookOfTheBible">
        <div className="bibleContainDiv">
          <span className="chapBook">Genesis</span>
          <span className="cha">CHA</span>
          <span>
            <select name="" id="">
                <option value=""></option>
            </select>
          </span>
        </div>
        <div className="divLine"></div>
      </div>
      <div className="bibleDisplay">
        {isLoading ? (
          <div
          style={{
            display: 'flex',
            height: '100vh',
            backgroundColor: 'inherit',
            justifyContent: 'center',
            alignItems: 'center'
            
          }}> <Spinner/> </div>
          
        ) : (
          <>
            <div className="bibleText">
              {bibleVerses.map((bibleVerse, index) => (
                <div key={index}>
                  <p>
                    {"["} <span>{bibleVerse.versemn }</span> {":"}{" "}
                    <span>{bibleVerse.verse}</span>
                    {" ]"} <span>{bibleVerse.text}</span>
                  </p>
                </div>
              ))}

              
            </div>
            <div className="bibleChapterNumber">
              
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
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Genesis;

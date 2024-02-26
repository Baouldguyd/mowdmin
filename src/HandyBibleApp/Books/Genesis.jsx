import axios from "axios";
import React, { useState, useEffect } from "react";
import Spinner from "../../Components/Loader/Spinner";

const Genesis = () => {
  const bibleNumbers = [
    "1", "2", "3", "4", "5", "6", '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
  ];

  const [bibleVerses, setBibleVerses] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  const bibleVersions = [
    {
        bibleVersion: 'KJV',
        bibleId: 'de4e12af7f28f599-02'
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
            const response = await axios.get(
                `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": '0557abf27931c5f6a02610bc5fec32dc'
                    }
                }
            );

            const data = response.data;

            // setBibleVerses(data.verses);
            console.log(data);
        } catch (error) {
            console.error("An error occurred", error);
        } finally {
            setIsLoading(false);
        }
    };

    fetchData();

}, [selectedChapter]);

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
  };

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
                    {"["} <span>{bibleVerse.chapter}</span> {":"}{" "}
                    <span>{bibleVerse.verse}</span>
                    {" ]"} <span>{bibleVerse.text}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="bibleChapterNumber">
              {bibleNumbers.map((item) => (
                <p
                  key={item}
                  style={{
                    textAlign: "center",
                    fontSize: "1.2rem",
                    color: selectedChapter === item ? 'blue' : 'white',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleChapterClick(item)}
                >
                  {item}
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

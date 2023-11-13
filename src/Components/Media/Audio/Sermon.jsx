import React from "react";
import { FaPlay } from "react-icons/fa";

const sermonDetails = [
  {
    sermonTitle: "Dayspring from on high hath visited us: John 5v8.",
    sermonLink: "https://www.facebook.com/maurille.osse",
  },

  {
    sermonTitle: "My Rood shall blossom because I am a chosen one",
    sermonLink: "https://www.instagram.com/mowdministries_e.v/",
  },

  {
    sermonTitle: "Everyday people Everyday life.",
    sermonLink: "https://twitter.com/Mowdministries",
  },

  {
    sermonTitle: "Hour of the Truth.",
    sermonLink: "https://t.me/mowdministriesev",
  },
];

const Sermon = () => {
  return (
    <div className="audioPage">
      <div className="audioList">
        {sermonDetails.map((item) => (
          <div>
            <div className="audioFile">
              <p>{item.sermonTitle}</p>
              <div className="playDiv">
              
                <button>
                <a href={item.sermonLink}>
                  <FaPlay className="playIcon" />{" "}
                  </a>
                </button>
              
            </div>

            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sermon;

import React from "react";
import questionLogo from "../../Assets/question.jpg";
import { Link } from "react-router-dom";


const SelectQA = () => {
  return (
    <div>
      <div className="aboutpg fade-in appear">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
        </style>

        <div className="abouthead">
          <div className="aboutheadimg">
            <img src={questionLogo} alt="" />
          </div>
        </div>

        <div className="scriptureDiv">
          <Link to="/questions">
            <div className="oldTestament">
              <h2>Questions</h2>
            </div>
          </Link>

          <Link to="/answer">
            <div className="newTestament">
              <h2>Answers</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectQA;

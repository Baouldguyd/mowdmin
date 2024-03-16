import React from "react";
import "../myBible.css";
import newMowdLogo from '../../Assets/newmowdlogo.png'
import NextButton from "./NextButton";
import { Link } from "react-router-dom";


const BibleWelcome = () => {
  return (
    <div className="body">
      <div className="welcomeScreen">
      <div className="top">
        <div className="top-box"></div>
      </div>
      <div className="middle">
        <div className="logo">
          <img src={newMowdLogo} style={{ width: '300px', height: '300px' }} alt="" />
        </div>
       <Link to='/biblesummary'><NextButton/></Link>
      </div>
      <div className="bottom">
        
        <div className="bottom-box"></div>
        <p></p>
      </div>
    </div>
    </div>
  );
};

export default BibleWelcome;

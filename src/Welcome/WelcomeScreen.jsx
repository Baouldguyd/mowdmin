import React from 'react';
import Typewriter from './Typewriter'; // Import your Typewriter component
import "./welcome.css";
import newMowdLogo from '../Assets/newmowdlogo.png'
import NextButton from "../HandyBibleApp/WelcomeScreen/NextButton";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
    const texts = [
        "Welcome to Mowd Ministries",
        "Evangelium der Erlösung",
        "Gospel of salvation",
        "Évangile du Salut"
      ];

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
        <div>
      
      <Typewriter texts={texts} />
    </div>
       <Link to='/home'><NextButton/></Link>
      </div>
      <div className="bottom">
        
        <div className="bottom-box"></div>
        <p></p>
      </div>
    </div>
    </div>
  );
};

export default WelcomeScreen;

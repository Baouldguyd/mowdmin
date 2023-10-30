import React from "react";
import baptism from '../../../Assets/baptism.jpg'
import LoginForm from "./LoginForm";


const BapLogin = () => {

  return (
    <div className="aboutpg fade-in appear">
      
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className="abouthead">
        <div className="aboutheadimg">
          <img src={baptism} alt="" />
        </div>
      </div>

      <div>
        <h3
            style={{
                textAlign: 'center'
            }}
        >Login for Baptism</h3>

            <LoginForm/>
      </div>



    </div>
  );
};

export default BapLogin;

import React from "react";
import baptism from '../../../Assets/baptism.jpg'
import RegForm from "./RegForm";


const BapReg = () => {
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
        >Register for Baptism</h3>

            <RegForm/>
      </div>



    </div>
  );
};

export default BapReg;

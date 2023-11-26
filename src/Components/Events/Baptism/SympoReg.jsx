import React from "react"
import sympoimg from '../../../Assets/bible.jpg'
import RegForm from "./RegForm";


const SympoReg = () => {
  return (
    <div className="aboutpg fade-in appear">
      
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className="abouthead">
        <div className="aboutheadimg">
          <img src={sympoimg} alt="" />
        </div>
      </div>

      <div>
        <h3
            style={{
                textAlign: 'center'
            }}
        >Register for Sympossium</h3>

            <RegForm/>
      </div>



    </div>
  );
};

export default SympoReg;

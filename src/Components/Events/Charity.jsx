import React from "react";
import charity from "../../Assets/charity.jpg";
import { Link } from "react-router-dom";

const Charity = () => {
  return (
    <div className="aboutpg fade-in appear">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className="abouthead">
        <div className="aboutheadimg">
          <img src={charity} alt="" />
        </div>
      </div>

      <div className="charityDeeds">
        <h2>Our Charitable Deeds</h2>
        <p style={{ textAlign: 'center' }}>
          “He that hath pity upon the poor lendeth unto the LORD; And that which
          he hath given will he pay him again.” Proverbs 19:17 
        </p>

                

        <Link to= '/gift'>
        <button style={{display: 'block', margin:"auto"}}>
        Click Here to Sow a lovely seed
        </button>
        
        
        </Link>
      </div>
    </div>
  );
};

export default Charity;

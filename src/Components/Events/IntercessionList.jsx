import React from "react";
import biblecross from "../../Assets/biblecross.jpg";


const IntercessionList = () => {
  return (
    <div className="aboutpg fade-in appear">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className="abouthead">
        <div className="aboutheadimg">
          <img src={biblecross} alt="" />
        </div>
      </div>

      <div>
        <h3 style={{textAlign: 'center'}}>Please choose prayer request as many amongst the list and Pray for at least 30mins or more if you. The Lord bless you as you do so.</h3>
        <h3 style={{textAlign: 'center', textDecoration: 'underline', fontSize: '2rem'}}>Pray for :</h3>

        <p>
          ° Pray for the peace of Israel. “Pray for the peace of Jerusalem: they
          shall prosper that love thee.” Bible verse . (Psalms 122:6, )
        </p>

        <p>
          ° Pray God: Do not abandon any of your loved ones to fall into the
          trap of evil men. Bible verse. Psalm 91
        </p>
      </div>
    </div>
  );
};

export default IntercessionList;

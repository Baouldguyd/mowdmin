import React from "react";
import testimony from '../../../Assets/testimony.jpg';



const Testimonies = () => {
  return (
    <div className="aboutpg fade-in appear " style={{height: 'auto'}}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className="abouthead">
        <div className="aboutheadimg">
          <img src={testimony} alt="" />
        </div>
      </div>
    
    <div>
      <h2>Live Testimony</h2>

      <p>
      "Dear Apostle Osse Maurille and all Brethren.
  I take this opportunity to salute you in the name of our Lord Jesus Christ, hoping and trusting in Him that you are doing very well in His vineyard.
  Am indeed blessed to have visited your website in Mowdministries. I have really learned a lot and I thank God for your inspiration and I do belief that thousands have been the beneficially too.
  My dear servants in Christ, I sincerely want take this wonderful moment to come to you, asking you to consider us working with your ministry in leading and touching more souls in glorifying God here in Kenya Africa.
   It’s now my humble duty to invite you to come to Kenya to minister the word of God, your coming will give us a new start and new beginning in our ministry walk. We will keep you in our prayers as we wait upon Him to accomplish what He has laid in our hands.
May God bless you as I wait to hear from you soon. Blessings. "
</p>

<i style={{ textAlign: 'right', textDecoration: 'none', color : 'white' }}>
 - Pastor Fredrick Mokua.
</i>
    </div>
    
    </div>
  );
};

export default Testimonies;

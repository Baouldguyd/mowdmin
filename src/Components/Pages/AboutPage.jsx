import React from 'react';
import mowdlogo from '../../Assets/mowdlogo.jpg'

const AboutPage = () => {
  return (
    <div className='aboutpg'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className='abouthead'>
          <div className="aboutheadimg">
            <img src={mowdlogo} alt="" />
          </div>
       
      </div>

      <div>
          <div className='aboutText'>
            <h3>About Us</h3>                
            <p>Mowdministries e.V is a non-profit organization where the members preaches the love of Jesus Christ.</p>

            <p>For the Lord So love the world and gave us His only begotten son. John 3:16</p>
          </div>
      </div>


    </div>
  )
}

export default AboutPage;
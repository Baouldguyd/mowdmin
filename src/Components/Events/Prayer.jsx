import React from 'react'
import prayer from '../../Assets/biblecross.jpg'
const Prayer = () => {
  return (
    <div className='aboutpg fade-in appear'>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
    </style>

    <div className='abouthead'>
        <div className="aboutheadimg">
          <img src={prayer} alt="" />
        </div>
     
    </div>

    <div className='symposium'>
        <h2>Prayer</h2>

        <p>
        The organization encourages PRAYER, Evangelisation, Seminary SYMPOSIUM, Concert and FORUM DISCUSSIONS in the spirit of Jesus Christ
        </p>
        
        <p>
        
        Prayer meeting, prayer vigil, intercessory prayer. Prayer of deliverance, Souls counselling and other payers support:
        </p>
        <p>
        <a href="tel:+491744370644"> Call +49(0)1744370644  </a>
         or email your prayer requests: </p>
        <a href="mailto:prayer@mowdministries.org"> prayer@mowdministries.org</a>
    </div>

    </div>
  )
}

export default Prayer;
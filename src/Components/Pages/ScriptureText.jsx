import React from 'react'

import bibleImg from '../../Assets/bible.jpg'

const Charity = () => {
  return (
    <div className='aboutpg'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className='abouthead'>
          <div className="aboutheadimg">
            <img src={bibleImg} alt="" />
          </div>
       
      </div>

      <div className='charityDeeds'>
        <h2>Scripture Reading</h2>
        <p>In Luke chapter 10 vs 26 Jesus Christ asked a Dr. of Law:
        </p>
        <p>
        “ What is written in the law? how readest thou?”
(Luke 10vs26)
        </p>
        
        <p>
        The time is near and true readers should commence reading, not for satisfying own greed.
        </p>

        <p>
        For real readers, he says:
        </p>

        <p>
        “Blessed is he that readeth, and they that hear the words of this prophecy, and keep those things which are written therein: for the time is at hand.”
(Revelation 1vs 3)
        </p>
        <p>
            Blessed are you as you are reading to seize the revelation of God's word.

        </p>
      
      </div>

    </div>
  )
}

export default Charity;
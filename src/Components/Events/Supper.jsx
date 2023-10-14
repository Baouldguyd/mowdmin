import React from 'react'
import { FaVideo } from 'react-icons/fa';
import supper from '../../Assets/supper.jpg'

const Supper = () => {
  return (
    <div className='aboutpg fade-in appear'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className='abouthead'>
          <div className="aboutheadimg">
            <img src={supper} alt="" />
          </div>
       
      </div>

      <div className='charityDeeds'>
        <h2>The Lord Supper</h2>
        <p>To begin the new month and of course follow by the program " The voice of the presence of God ", on the first Sunday of the month we gather to break the bread and take the cup as our Lord Jesus Christ commanded us to do in His remembrance in Luke 22vs 19.
        </p>
       
       <a href="https://us05web.zoom.us/j/89121384589?pwd=wVkJn7myqUvPWuD2YnFtjZbZ8r6t18.1">
        <button>  <FaVideo/>  
         Join Zoom Meeting Link
        </button>
       </a>

       <p>
       Meeting ID: 891 2138 4589
      </p>

      <p>
      Passcode: twfHq8
      </p>
      
      </div>

    </div>
  )
}

export default Supper;
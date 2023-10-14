import React from 'react'
import baptism from '../../Assets/baptism.jpg'

const Baptism = () => {
  return (
    <div className='aboutpg fade-in appear'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className='abouthead'>
          <div className="aboutheadimg">
            <img src={baptism} alt="" />
          </div>
       
      </div>

      <div className='charityDeeds'>
        <h2>Water Baptism</h2>
        <p>
          Get Baptized by immersion at Mowd Ministries.
        </p>
        <p>
           Feel free to <a href="mailto:info@mowdministries.org">Contact Us Here</a> for your Water Baptism
        </p>
      
        <p>
        for all of you who were baptized into Christ have clothed yourselves with Christ. - Gal 3:27
        </p>
      </div>

    </div>
  )
}

export default Baptism
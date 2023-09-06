import React from 'react'
import convention from '../../Assets/convention.jpg'

const Conference = () => {
  return (
    <div className='aboutpg'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className='abouthead'>
          <div className="aboutheadimg">
            <img src={convention} alt="" />
          </div>
       
      </div>

      <div className='charityDeeds'>
        <h2>Our Conventions</h2>
        <p>This service brings all together: men, women, youth and children under the divine anointing. God visits his people, reveals himself to them and speaks to them. He (God) works out His plan in everyone's life.
        </p>
        
      
      </div>

    </div>
  )
}

export default Conference;
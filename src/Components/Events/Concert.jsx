import React from 'react'
import concert from '../../Assets/convention.jpg'

const Concert = () => {
  return (
    <div className='aboutpg'>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
    </style>

    <div className='abouthead'>
        <div className="aboutheadimg">
          <img src={concert} alt="" />
        </div>
     
    </div>

    <div className='charityDeeds'>
        <h2>Concert</h2>
        <p>Our Holy spirit filled Concert which involves deep worship and praise sessions.
        </p>

        <p>Invite someone and be blessed</p>
       
      
      </div>
    </div>
  )
}

export default Concert;
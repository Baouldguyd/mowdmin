import React from 'react'
import convention from '../../Assets/convention.jpg'

const Convention = () => {
  return (
    <div className='aboutpg fade-in appear'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className='abouthead'>
          <div className="aboutheadimg">
            <img src={convention} alt="" />
          </div>
       
      </div>

      <div className='charityDeeds'>
        <h2>Our Annual Convention</h2>
        <p>Come join us at our Annual Convention at Hamm, Germany.        </p>
        <p>
          Dont come alone, Invite someone and be blessed.
        </p>
      
      </div>

    </div>
  )
}

export default Convention;
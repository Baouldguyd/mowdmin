import React from 'react'
import supper from '../../Assets/supper.jpg'

const Supper = () => {
  return (
    <div className='aboutpg'>
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
        <p>This involves taking the communion by eating the flesh and blood of Jesus for sanctification
        </p>
       
      
      </div>

    </div>
  )
}

export default Supper
import React from 'react'
import action from '../../Assets/action.jpg';

const ActionPlan = () => {
  return (
    <div className='aboutpg'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className='abouthead'>
          <div className="aboutheadimg">
            <img src={action} alt="" />
          </div>
       
      </div>

      <div className='actionPlan'>
        <h2>Action Plan</h2>
        <p>Through the evangelistic crusades, GOD is manifested to heal and deliver His people. For it is written, "WHEN THE SON DELIVERS YOU, YOU WILL REALLY BE FREE." (JOHN 8vs36).</p>
      </div>
      
    </div>
  )
}

export default ActionPlan;
import React from 'react';
import questionImg from '../../Assets/question.jpg';


const Answers = () => {
  return (
    <div className='aboutpg fade-in appear'>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
    </style>

    <div className='abouthead'>
        <div className="aboutheadimg">
            <img src={questionImg} alt="" />
        </div>

    </div>

    <div style={{
        width: '100vw',
        height: 'auto'
    }}>
        <h2>Your Answers Below</h2>
    </div>


    </div>
  )
}

export default Answers;
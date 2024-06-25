import React from 'react';
import questionImg from '../../Assets/question.jpg'
import QAform from '../Forms/QAform';



const Questions = () => {
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

            
                <h2>Send in your Questions</h2>
                <QAform/>

            
        



        </div>
    )
}

export default Questions;
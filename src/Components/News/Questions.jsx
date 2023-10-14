import React from 'react'
import QuestionForm from './QuestionForm';
import questionImg from '../../Assets/question.jpg'


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

            <div style={{
                width: '100vw',
                height: 'auto'
            }}>
                <QuestionForm/>
            </div>
        



        </div>
    )
}

export default Questions;
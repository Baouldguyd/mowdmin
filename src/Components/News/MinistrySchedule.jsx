import React from 'react'
import Schedule from './Schedule';
import schedule from '../../Assets/schedule.jpg'

const MinistrySchedule = () => {
    return (
        <div className='aboutpg'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
            </style>

            <div className='abouthead'>
                <div className="aboutheadimg">
                    <img src={schedule} alt="" />
                </div>

            </div>

            <div style={{
                width: '100vw',
                height: 'auto'
            }}>
                <Schedule/>
            </div>
        



        </div>
    )
}

export default MinistrySchedule;
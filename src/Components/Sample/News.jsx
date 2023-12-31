import React from 'react'
import { FaChurch, FaComment, FaNewspaper } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className='news fade-in appear'>
        
        <div className='events'>
            <div className='line'></div>
        
            <div className='eventsHeadline'>
                <h1> Plan </h1>
            </div>
            <div className='line'></div>
        </div>
        <div className='newsButtonDiv'>

          <Link to='/newspage' >
            <button className='pixels'><FaNewspaper/>  Events </button>
            </Link>
            <Link to='/ministryschedule' >
            <button><FaChurch/> MINISTRY SCHEDULE</button>
            </Link>

            <Link to='/select' >
            <button><FaComment/> QUESTIONS & ANSWER</button>
            </Link>
        </div>
    </div>
  )
}

export default News;
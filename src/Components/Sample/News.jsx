import React from 'react'
import { FaChurch, FaComment, FaNewspaper } from 'react-icons/fa';

const News = () => {
  return (
    <div className='news fade-in appear'>
        
        <div className='events'>
            <div className='line'></div>
        
            <div className='eventsHeadline'>
                <h1><FaNewspaper/> News</h1>
            </div>
            <div className='line'></div>
        </div>
        <div className='newsButtonDiv'>
            <button><FaNewspaper/>  NEWS</button>
            <button><FaChurch/> MINISTRY SCHEDULE</button>
            <button><FaComment/> QUESTIONS & ANSWER</button>
        </div>
    </div>
  )
}

export default News;
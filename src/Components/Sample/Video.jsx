import React from 'react'
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import fotoImg from '../../Assets/foto.jpg'


const Video = () => {
  
 
  
  
  return (
    <div className='video fade-in' >

      <Link to='/video' >
        <div className='events'>
            <div className='line'></div>
        
            <div className='eventsHeadline'>
                <h1> Videos</h1>
            </div>
            <div className='line'></div>
        </div>

        <div className="videoContainer">
          <div className='vid-box'    
          >
            <div className="playDiv">
              <button> <FaPlay className='playIcon'/>  </button>
            </div>
          </div>
        </div>

        
</Link>

    </div>
  )
}

export default Video;
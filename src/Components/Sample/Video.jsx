import React from 'react'
import { FaPlay } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import fotoImg from '../../Assets/foto.jpg'


const Video = () => {
  
 
  
  
  return (
    <div className='video fade-in' >

    
        <div className='events'>
            <div className='line'></div>
        
            <div className='eventsHeadline'>
                <h1> Videos</h1>
            </div>
            <div className='line'></div>
        </div>

        <div className="videoContainer">
          <div>
          <div className='vid-box'    
          >
            <div className="playDiv">
              <a href="https://www.youtube.com/@mowdministries.e.vgospelofsalv/videos">
              <button> <FaPlay className='playIcon'/>  </button>
              </a>
              
            </div>
            
          </div>
          </div>
        </div>

        


    </div>
  )
}

export default Video;
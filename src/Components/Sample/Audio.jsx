import React from 'react'
// import { FaPlay } from 'react-icons/fa';

const Audio = () => {
  return (
    <div className='audio fade-in appear'>
        <div className='events'>
            <div className='line'></div>
        
            <div className='eventsHeadline'>
                <h1> Audio</h1>
            </div>
            <div className='line'></div>
        </div>
        <div className="audioList">
        
          <div className='torah'>
            <p>TORAH</p>
          </div>
        <div className='torah'>
            <p>GOSPEL MUSIC</p>
          </div>
        
          <div className='torah'>
            <p>SERMON</p>
    
          </div>

          <div className='torah'>
            <p>TESTIMONIES</p>
          </div>

          <div className='torah'>
            <p>LECTURE</p>
          </div>

          <div className='torah'>
            <p>BOOKS</p>
          </div>
          

        </div>

        {/* <div className="audioList">
            <div className="audioFile">
                <p>The Power in the blood of Jesus</p>
              <div className="playDiv">
              <button> <FaPlay className='playIcon'/>  </button>
            </div>
          </div>
          
        </div>

        <div className="audioList">
            <div className="audioFile">
                <p>The Saving Grace of Jesus Christ</p>
              <div className="playDiv">
              <button> <FaPlay className='playIcon'/>  </button>
            </div>
          </div>
          
        </div>

        <div className="audioList">
            <div className="audioFile">
                <p>Unlocking Divine Virtues</p>
              <div className="playDiv">
              <button> <FaPlay className='playIcon'/>  </button>
            </div>
          </div>
          
        </div>

        <div className="audioList">
            <div className="audioFile">
                <p>Unlocking Supernatural Gifts</p>
              <div className="playDiv">
              <button> <FaPlay className='playIcon' />  </button>
            </div>
          </div>
          
        </div> */}
    </div>
  )
}

export default Audio;
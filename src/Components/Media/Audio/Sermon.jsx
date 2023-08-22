import React from 'react'
import { FaPlay } from 'react-icons/fa';

const Sermon = () => {
  return (
    <div className='audioPage'>
        <div className="audioList">
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
          
        </div>
    </div>
  )
}

export default Sermon;
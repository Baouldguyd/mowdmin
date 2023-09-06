import React from 'react'
import concert from '../../Assets/convention.jpg';

const Symposium = () => {
  return (
    
    <div className='aboutpg'>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
    </style>

    <div className='abouthead'>
        <div className="aboutheadimg">
          <img src={concert} alt="" />
        </div>
     
    </div>

    <div className='symposium'>
        <h2>Sympossium & Colloque</h2>
        <p>
            This service brings together businessmen and politicians under the fire of the Holy Spirit to revitalize his people and lead them on the path of righteousness to make them a holy people of able men and women.

        </p>
    </div>

    </div>
  )
}

export default Symposium;
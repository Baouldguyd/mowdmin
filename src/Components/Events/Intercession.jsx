import React from 'react'
import biblecross from '../../Assets/biblecross.jpg'
import { Link } from 'react-router-dom';

// const apiUrl = ''

// try {
  
// } catch (error) {
  
// }


const Intercession = () => {
  return (
    <div className='aboutpg'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className='abouthead'>
          <div className="aboutheadimg">
            <img src={biblecross} alt="" />
          </div>
       
      </div>

      <div className='scriptureDiv'>
          <Link to='/request' >
          <div className='oldTestament'>
            <h2>PRAYER REQUEST</h2>
     
          </div>
          </Link>

          <div className='newTestament'>
            <h2>INTERCESSION</h2>
          </div>
      </div>


    </div>
  )
}

export default Intercession;
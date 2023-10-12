import React from 'react'
import { FaGift } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Gift = () => {
  return (
    <div style={{marginTop: '1rem'}} className='fade-in appear'>
        <Link to='/gift'>
        <div className='newsButtonDiv'>   
            <button> MAKE A GIFT <FaGift/> </button>
       </div>
       </Link>
    </div>
  )
}

export default Gift;
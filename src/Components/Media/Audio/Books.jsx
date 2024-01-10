import React from 'react'
import bible from '../../../Assets/bible.jpg';
import prophecy from '../../../Assets/prophecy.png';
import cryImg from '../../../Assets/cry.jpg';
import seedImg from '../../../Assets/seed.jpg';
import { FaBookOpen, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spinner from '../../Loader/Spinner';


const bookStyle={
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

const Books = () => {
  return (
    <div className='aboutpg fade-in appear'>

<div className="dot-spinner">
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
</div>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className='abouthead'>
        <div className="aboutheadimg">
          <img src={bible} alt="" />
        </div>


      </div>

    <Spinner/>
      <div className="booksList">

        <div>
          <h2>Get An Holy Spirit Filled Book</h2>
        </div>



        <div className='books' >
          <img src={prophecy} alt="" className='bookImg' style={{ backgroundColor: 'white' }} />

          <div style={bookStyle}>
            <h2>Title: PROPHECY And your RESPONSBILITY In its ACCOMPLISHMENTS</h2>
            <Link to='/books/prophecybook'>
            <button className='view-btn'> <FaBookOpen/> View </button>
            </Link>
          </div>

        </div>

        <div className='books' >
          <img src={cryImg} alt="" className='bookImg' />
          <div style={bookStyle}>
            <h2>Title: The cry of the image of God.</h2>
            <Link to='/books/crybook'>
            <button className='view-btn'> <FaBookOpen/> View </button>
            </Link>
          </div>
        </div>

        <div className='books' >
          <img src={seedImg} alt="" className='bookImg' />
          <div style={bookStyle}>
            <h2>Title: The Seed of the Blessing </h2>
            <Link to='/books/seedbook'>
            <button className='view-btn'> <FaBookOpen/> View </button>
            </Link>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Books;
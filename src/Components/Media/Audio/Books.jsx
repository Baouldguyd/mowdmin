import React from 'react'
import bible from '../../../Assets/bible.jpg';
import prophecy from '../../../Assets/prophecy.png';
import cryImg from '../../../Assets/cry.jpg';
import seedImg from '../../../Assets/seed.jpg';
import { FaCartPlus } from 'react-icons/fa';

const Books = () => {
  return (
    <div className='aboutpg'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className='abouthead'>
        <div className="aboutheadimg">
          <img src={bible} alt="" />
        </div>

        
      </div>

      <div className="booksList">

        <div>
        <h2>Get An Holy Spirit Filled Book</h2>
        </div>



        <div className='books' >
          <img src={prophecy} alt="" className='bookImg' style={{backgroundColor: 'white'}} />
          
          <div>
          <h2>Title: PROPHECY And your RESPONSBILITY In its ACCOMPLISHMENTS</h2>
          <button> <FaCartPlus/> Order this book</button>
          </div>
          
        </div>

        <div className='books' >
          <img src={cryImg} alt="" className='bookImg' />
          <div>
          <h2>Title: The cry of the image of God.</h2>
          <button> <FaCartPlus/> Order this book</button>
          </div>
        </div>

        <div className='books' >
        <img src={seedImg} alt="" className='bookImg' />
          <div>
          <h2>Title: The Seed of the Blessing </h2>
          <button> <FaCartPlus/> Order this book</button>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Books;
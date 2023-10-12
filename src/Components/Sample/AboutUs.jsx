import React from 'react'
import { Link } from 'react-router-dom';



const AboutUs = () => {
  return (
    <div className='aboutUs fade-in appear'>
      <Link to='/aboutus'>
        <div className='aboutUs-bgimg'>
             <h1>ABOUT US</h1>               
        </div>
      </Link>
      
    </div>
  )
}

export default AboutUs;
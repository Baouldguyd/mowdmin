import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const Ourcontact = () => {
const textStyle = {
    color: 'white'
}

  return (
    <div style={{
        marginTop: '2rem',
        height: 'auto',
        fontSize: '1.1rem'

    }}>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <a href="https://www.instagram.com/mowdministries_e.v/"><h3 style={textStyle}> <FaInstagram/>  INSTAGRAM </h3></a>
            
            <a href="https://facebook.com/GospleofSalvation"><h3 style={textStyle}> <FaFacebook/> FACEBOOK</h3></a>
           
            <a href="https://twitter.com/Mowdministries"><h3 style={textStyle}> <FaTwitter/> TWITTER </h3></a>
            
            <a href="https://www.tiktok.com/@mowdministries"><h3 style={textStyle}> <FaTiktok/> TIKTOK </h3></a>
            
        </div>
        <div className='newsButtonDiv'>

            
    
            <button> OUR CONTACTS</button>
            
        </div>
    </div>
  )
}

export default Ourcontact;
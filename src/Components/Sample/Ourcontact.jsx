import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Ourcontact = () => {
const textStyle = {
    color: 'white'
}

  return (
    <div style={{
        marginTop: '2rem',
        height: 'auto',
        fontSize: '1.1rem',
    }}
    className='fade-in appear'
    >
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <a href="https://www.instagram.com/mowdministries_e.v/"><h3 style={textStyle}> <FaInstagram/>  INSTAGRAM </h3></a>
            
            <a href="https://facebook.com/GospleofSalvation"><h3 style={textStyle}> <FaFacebook/> FACEBOOK</h3></a>

            
        </div>
        
            <div style={{display : 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <a href="https://www.youtube.com/channel/UCLEcq4XDtqcWSDys7_fmvYw" ><h3 style={textStyle}> <FaYoutube/> YOUTUBE </h3></a>
            </div>
            
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <a href="https://twitter.com/Mowdministries"><h3 style={textStyle}> <FaTwitter/> TWITTER </h3></a>
            
            <a href="https://www.tiktok.com/@mowdministries"><h3 style={textStyle}> <FaTiktok/> TIKTOK </h3></a>
        </div>
        
        <Link to='/contactus'>
        <div className='newsButtonDiv' >    
            <button> OUR CONTACTS</button>
            
        </div>
        </Link>
        
    </div>
  )
}

export default Ourcontact;
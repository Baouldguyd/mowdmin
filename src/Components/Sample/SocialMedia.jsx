import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='.socials'>

        <div className='events'>
            <div className='line'></div>
        
            <div className='eventsHeadline'>
                <h1> Get in Touch </h1>
            </div>
            <div className='line'></div>
        </div>

        <div className='socialIcons'>
            
            
            <div className='playDiv'>
                <a href="mailto:info@mowdministries.org"><button><FaEnvelope  className='playIcon'/></button></a>
                
            </div>

            <div className='playDiv'>
                <a href="https://twitter.com/Mowdministries"><button><FaTwitter  className='playIcon'/></button></a>
                
            </div>

            <div className='playDiv'>
                <a href="https://www.instagram.com/mowdministries_e.v/"><button><FaInstagram  className='playIcon'/></button></a>
                
            </div>

            <div className='playDiv'>
                <a href="https://facebook.com/GospleofSalvation"><button><FaFacebook  className='playIcon'/></button></a>
                
            </div>

            <div>
            <div className='playDiv'>
                <a href="https://facebook.com/GospleofSalvation"><button><FaYoutube  className='playIcon'/></button></a>
                
            </div>
            </div>

            <div className='playDiv'>
                <a href="https://www.tiktok.com/@mowdministries"><button><FaTiktok  className='playIcon'/></button></a>
                
            </div>

            <div className='playDiv'>
                <a href="tel:+491744370644"><button><FaPhone  className='playIcon'/></button></a>
                
            </div>

            <h1>my name</h1>
            
            
            
            
            
            
            
        </div>
        

        
        
        


    </div>
  )
}

export default SocialMedia;
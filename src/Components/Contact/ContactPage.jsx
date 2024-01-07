import React from 'react'
import { FaEnvelope, FaGlobe, FaLocationArrow } from 'react-icons/fa';
import crossChurch from '../../Assets/crossChurch.jpeg'


const ContactPage = () => {
  return (
    <div className='contactPg fade-in appear'>
      <style>
                @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
            </style>
      <div className='contactImg'>
        <img src={crossChurch} alt="" />
      </div>

      <div className='contactDetails'>

        <div className="contactInfo">
          <div className="contactMail">

            <a href="mailto:info@mowdministries.org"><p> <FaEnvelope /> Send Us a Mail</p></a>
          </div>

          <div className='contactWeb'>
            <a href="https://www.mowdministries.org" ><p><FaGlobe />  Visit Our Website </p></a>
          </div>

          <div className="contactLocation">
            <a href="https://goo.gl/maps/qQhrA4iRKHWXyt2U9"> <p><FaLocationArrow /> Locate Us</p></a>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79226.2572449161!2d7.663748658834335!3d51.6448115931526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b973221901db21%3A0x1c27f2849ae5ea10!2s59077%20Hamm%2C%20Germany!5e0!3m2!1sen!2sng!4v1693891546578!5m2!1sen!2sng" className='mapLocation' style={{ border: 0 }} allowfullscreen="" loading="lazy" title='map' referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


          </div>


        </div>
        <div style={{
          marginTop: '4rem',
          marginLeft : '1rem'


        }}>
          <p>
            Contact:
            Apostle Osse Maurille B.
          </p>

          <p>
            Register entry:
            Non-profit-making religious organization, registered under number VR 4773 Saarbrücken District Court.
          </p>

          <p>
            Economic identification number:
            322/5938/1452
          </p>

          <p>
            Supervisory authority:
            Tax office Hamm (Westphalia)
          </p>

          <p>
          Responsible: Mowdministries e.V ( Gospel of Salvation)
          </p>

        </div>
      </div>

    </div>
  )
}

export default ContactPage;
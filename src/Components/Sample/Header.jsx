import React from 'react'
import optionsImg from '../../Assets/options.png'
import ministryLogo from '../../Assets/mowdlogo.jpg'

const Header = () => {
  return (
    <div className='head'>
        <div className='options'>
        <img src={optionsImg} alt="" />
        </div>

        <div className='headline'>
            <p>Welcome to Mowd Ministries e.V </p>
        </div>

        <div className='logo'>
        <img src={ministryLogo} alt="" />
        </div>
    </div>
  )
}

export default Header;
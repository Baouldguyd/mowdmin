import React from 'react'
import gospelImg from '../../../Assets/audioimage.jpeg'

const Gospel = () => {
  return (
    <div className='gospel'>

      <div className='gospelimg'>
        <img src={gospelImg} alt="" style={{ width: 'auto', height: '100%', margin: 'auto', display: 'block'}} />
      </div> 
        
        <div className='gospelaudio'>
        <iframe src="https://audiomack.com/embed/apostle-maurille/album/leternel-est-bon" 
        scrolling="no" 
        title='audiomack' 
        scrollbars="no"
        className='audiomack' 
        frameborder="0"></iframe>
        
        <a href="https://audiomack.com/apostle-maurille/album/leternel-est-bon">
          <button>Open AudioMack</button>
        </a>
        </div>
    </div>
  )
}

export default Gospel;
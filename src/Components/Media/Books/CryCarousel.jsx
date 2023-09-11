import React from 'react'
import { Carousel } from 'antd';


const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    marginTop: '2rem',
    fontFamily: 'sava-pro-semibold, sans-serif'

};


const onChange = (currentSlide) => {
    console.log(currentSlide);
}


const CryCarousel = () => {
    return (
        <Carousel afterChange={onChange} className='crybookCarousel'>

                {/* <div className='crybook1'>
                    <h3 className='h3text' style={contentStyle}>.</h3>
                </div> */}
            

               <div className='crybook2'>
                    <h3 className='h3text' style={contentStyle}>.</h3>
                </div>
            


                <div className='crybook3'>
                    <h3 className='h3text' style={contentStyle}> .</h3>
                </div>
            

                <div className='crybook4'>

                    <h3 className='h3text' style={contentStyle}>.</h3>
                </div>
            




        </Carousel>

    )
}

export default CryCarousel;
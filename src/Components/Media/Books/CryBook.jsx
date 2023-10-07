import React from 'react'
import CryBookCarousel from './CryCarousel';
import { FaCartPlus } from 'react-icons/fa';



const CryBook = () => {
    return (
        <div className='aboutpg'>
            <CryBookCarousel />
        
        <div className='bookword'>
                <h2>The cry of the image of God.
                </h2>
                <p>
                    Beneath the effect of the harmful consequences of his actions,
                    man, created in the image of God, is forced to cry out the cry of despair.
                    A cry of sorrow and selfish at the same time.

                    Why me??? Why is it me??? Why and Why???

                    A cry that is heard by all and that embraces even those who claim the Christian name.

                    That distress cry, often uttered by most people, and which makes us questioning whether God really exists, has its answer and can be clipped from our lips if we as human beings want to understand our position towards the divine jurisdiction concerning our lives.

                    This book is a teaching to enlighten the ways of the children of God on this subject.

                </p>
                <a href="https://buy.stripe.com/fZe7uKdZJfU3b2UcMO">
                <button> <FaCartPlus /> Order Now</button>
                </a>
            </div>
        </div>
    )
}

export default CryBook;
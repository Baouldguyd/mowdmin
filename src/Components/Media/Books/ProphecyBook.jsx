import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import ProCarousel from './ProCarousel';

const ProphecyBook = () => {
    return (
        <div className='aboutpg'>
            <ProCarousel />
            
            <div className='bookword' >
                <h2>PROPHECY
                    And your
                    RESPONSBILITY
                    In its ACCOMPLISHMENTS
                </h2>
                <p>
                    Prophecies and revelations have been
                    given to many people but have never
                    seen their fulfillment.
                    Others, through ignorance, could not
                    wait and take advantage of the content of
                    the divine message and the associated
                    blessings, so they let themselves be
                    caught by the traps of the evil one who
                    stole everything from them. We must not
                    forget that the enemy came just to steal,
                    to destroy and to kill. This book is a
                    projector to enlighten the children of God
                    in their worship hoping to obtain what is
                    promised from above.

                </p>

                <a href="https://buy.stripe.com/eVaaGW08TfU35IAaEF">
                <button> <FaCartPlus/> Order Now</button>
                </a>
            </div>
        </div>
    )
}

export default ProphecyBook;
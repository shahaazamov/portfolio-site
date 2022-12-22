import React from 'react'
import Left from '../left/Left'
import Right from '../right/Right'
import './hero.css'

function Hero() {
  return (
        <div className="boxes-wrapper">
    <div className='container inner-container'>

        
        <div className="big-box">
            <div className="left-side">
                <Left/>
            </div>
            <div className="right-side">
                <Right/>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Hero
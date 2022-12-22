import React,{useState} from 'react'
import Cards from '../cards/Cards'
import Servi from '../servi/Servi'
import './doing.css'

function Doing() {
 
  return (
      <div className='doing-wrapper'>
        <div className="container inner-container">
       <Servi title="Services"  />
       <div className="doing-wrapper">
        <h3 className="doing-text">
        What  actually, <br />
            I love to do
        </h3>
       </div>
    <Cards/>

        </div>
    </div>
  )
}

export default Doing
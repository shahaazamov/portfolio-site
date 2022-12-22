import React from 'react'
import './servi.css'


function Servi({title}) {
  return (
    <div className='container '>
        <div className="services-container">
        <h2 className="services">{title}</h2>
        </div>
    </div>
  )
}

export default Servi
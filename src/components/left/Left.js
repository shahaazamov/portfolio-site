import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import './left.css'
import { Link as LinkS } from 'react-scroll';

function Left() {
  return (
    <div className='container inner-container'><div className="left-box">
        
            <div className="text-wrappper">
                <LinkS to='/doing' className="text-wrapper__hello">Hello,<br /></LinkS>
                <h2 className="text-wrappper-title">
                
                <h2 className="text-wrapper_big-title">I am Shaha Azamov   ,</h2>
        
                <TypeAnimation className='type-effect'
          sequence={[
            'Fronted Developer', // Types 'One'
            1000, // Waits 1s
            'based on JavaScript ', // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            'and React Js', // Types 'Three' without deleting 'Two'
            () => {
              console.log('Done typing!'); // Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2em' }}
        />
        
                </h2>
            </div>
    </div>
    </div>
  )
}

export default Left
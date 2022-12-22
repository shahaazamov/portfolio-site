import React,{useState} from 'react'
import './cards.css'
import { Link } from 'react-router-dom'
// images
import vector from '../../assets/img.svg'
import vector1 from '../../assets/img1.svg'
import vector2 from '../../assets/img2.svg'


function Cards() {
    const arr = [
        {id:1,
        img:'https://icons8.com/icon/87192/smartphone',
        name:"UX Research",
        description:'New demos are continually added and buying a single license for Mak gives you access to all of what is shown below, plus everything that will be added in the future.'},
        {id:2,
            img:'https://icons8.com/icon/1sfKJfvLnefz/figma',
            name:"Coding",
            description:'New demos are continually added and buying a single license for Mak gives you access to all of what is shown below, plus everything that will be added in the future.'},
            {id:3,
                img:'https://icons8.com/icon/87255/code',
                name:"Web Development",
                description:'New demos are continually added and buying a single license for Mak gives you access to all of what is shown below, plus everything that will be added in the future.'},
    ]
    
  return (

    <div className='container inner-container'>
        <div className="wrapper-for-cards">
        
            {arr.map((card)=>{
                // console.log(card.id)
                return ( 
                    <div className="card" key={card.id}>
                    <div className="little-card">
                     <h2 className="little-card-text">{card.name}</h2>
                    </div>
                    <div className="description">
                        <p className="desc-text">{card.description}</p>
                    </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Cards
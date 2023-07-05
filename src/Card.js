import React from 'react'
import './Card.css'
const Card = (props) => {
 const {title , views ,para} = props;
  return (
       <div className='card'>
       <h1>{title}</h1>
       <h4>{views}</h4>
       <p>{para}</p>
       </div>
  )
}

export default Card

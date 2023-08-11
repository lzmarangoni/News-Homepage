import React from 'react'
import styles from './Card.module.css'

export default function Card({image, title, text}) {
  return (
    <div> 
        <img src={image}/>
        <h1>{title}</h1>
        <p>{text}</p>

    </div>
  )
}


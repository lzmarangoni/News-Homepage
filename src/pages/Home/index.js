import React from 'react'
import Card from '../../components/Card'
import noticias from '../../news.json'

export default function Home() {
  return (
    <div>
      <button onClick={()=>{console.log(noticias)}}></button>
      <Card />
    </div>
    
   
    
  )
}

import React from 'react'
import Card from '../../components/Card'
import MoreNews from '../../components/MoreNews'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Card/>
      <MoreNews/>
    </div>
    
   
    
  )
}

import React from 'react'
import Card from '../../components/Card'
import MoreNews from '../../components/MoreNews'
import styles from './Home.module.css'
import Top3Card from '../../components/Top3Card'

export default function Home() {
  return (
    <div>
      <div className={styles.home}>
        <Card />
        <MoreNews />
      </div>
      <Top3Card />
    </div>



  )
}

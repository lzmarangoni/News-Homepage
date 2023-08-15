import React from 'react'
import styles from './Top3Card.module.css'

export default function Top3Card() {
  return (
    <div className={styles.card}>
        <div className={styles.cardInformation}> 
            <img src='../images/image-retro-pcs.jpg'/>
            <div className={styles.cardText}>
                <h1>01</h1>
                <h3>Reviving Retro PCS</h3>
                <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div className={styles.cardInformation}> 
            <img src='../images/image-top-laptops.jpg'/>
            <div className={styles.cardText}>
            <h1>02</h1>
                <h3>Top 10 Laptops of 2022</h3>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </div>
        <div className={styles.cardInformation}> 
            <img src='../images/image-gaming-growth.jpg'/>
            <div className={styles.cardText}>
                <h1>03</h1>
                <h3>the Growth of Gaming</h3>
                <p>Wow the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
    </div>
  )
}

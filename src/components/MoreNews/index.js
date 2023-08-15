import React from 'react'
import styles from './MoreNews.module.css'

export default function MoreNews() {
  return (
    <div className={styles.moreNews}>
        <h1 className={styles.title}>
            New
        </h1>
        <div className={styles.moreNewsCard}>
            <h3 className={styles.subtitle}>Hydrogen VS Eletric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className={styles.moreNewsCard}>
            <h3 className={styles.subtitle}>The Downsides of AI Artistry</h3>
            <p>Whats are the possible adverse effects of on-demand AI imagem generation</p>
        </div>
        <div className={styles.moreNewsCard}>
            <h3 className={styles.subtitle}>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
    </div>
  )
}

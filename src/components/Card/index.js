import React from "react";
import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <img src="../images/image-web-3-desktop.jpg" />
      <div className={styles.cardDescription}>
        <h1>The Bright Future of Web 3.0?</h1>
        <div className={styles.cardText}>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className={styles.buttonCustom}>Ver Mais</button>
        </div>
      </div>
    </div>
  );
}

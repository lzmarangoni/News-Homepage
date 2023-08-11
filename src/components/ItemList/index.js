import React from 'react'
import styles from './ItemList.module.css'
import { Link } from 'react-router-dom'

export default function ItemList({to, children, onClick}) {
  return (
    <li><Link onClick={onClick} className={styles.itemDeLista} to={to}>{children}</Link></li>
  )
}

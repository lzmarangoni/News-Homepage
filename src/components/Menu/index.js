import React from 'react'
import styles from './Menu.module.css'
import { HiOutlineX } from 'react-icons/hi'
import ItemList from '../Header/ItemList'

export default function Menu({abreFecha, onClick, itensList}) {
    return (
        <nav className={abreFecha ? styles.menuLateral : styles.menuLateralOff}>
            <HiOutlineX onClick={onClick} className={styles.close} size={50} />
            <ul className={styles.menu}>
                {itensList.map(item => <ItemList to={item.path}>{item.name}</ItemList>)}
            </ul>
        </nav>
    )
}

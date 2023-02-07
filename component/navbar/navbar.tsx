import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from "react-icons/ai";
import styles from '../../styles/navbar.module.css'

function navbar() {
  return (
    <nav>
          <div className={styles.lt_nav}>
            <Link href={"/"}>
              <span className={styles.logo}>Haris Portfolio</span>
            </Link>
          </div>
          <div className={styles.rt_nav}>
            <AiOutlineMenu className={styles.menu}/>
          </div>
        </nav>
  )
}

export default navbar
import React, { Children } from 'react'
import styles from './styles.module.css'

const Cover = ({ children }) => {
  return (
    <div className={styles.layoutCover}>
      <div className={styles.layoutInner}>{children}</div>
    </div>
  )
}

export default Cover

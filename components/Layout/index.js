import React from 'react'
import styles from './styles.module.css'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutCover}>
      <div className={styles.layoutInner}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout

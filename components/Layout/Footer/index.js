import Image from 'next/image'
import React from 'react'
import Cover from '../../Cover'
import styles from './styles.module.css'
import { FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import Link from 'next/link'
// NEW IMPORT STYLE
const Footer = () => {
  return (
    <div className={styles.foofterContainer}>
      <Cover>
        <div className={styles.footerContent}>
          <div>
            <Image src="/Assets/troniclab_Logo.png" width={320} height={120} />
            <div className={styles.socials}>
              <Link href="https://instagram.com/tronic_lab?igshid=YmMyMTA2M2Y=">
                <FaInstagram />
              </Link>
              <Link href="#">
                <FaWhatsapp />
              </Link>
              <Link href="https://twitter.com/tronic_lab?s=21&t=_4LYEkpCKeMWcBsUfs0CGg">
                <FaTwitter />
              </Link>
            </div>
          </div>
          <div>
            <h1>Company</h1>
            <Link href="#Contact">Contact us</Link>
          </div>
          <div>
            <h1>Support</h1>
            <p>Send a message</p>
          </div>
          <div>
            <h1>Stay up to date</h1>
            <div className={styles.subscribe}>
              <input
                type="text"
                placeholder="your email address"
                className={styles.input}
              />
              <FiSend className={styles.sendBtn} />
            </div>
          </div>
        </div>
      </Cover>
    </div>
  )
}

export default Footer

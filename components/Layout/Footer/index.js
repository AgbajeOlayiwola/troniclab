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
            <div>
              <p>troniclab 3d printing</p>
            </div>
          </div>

          <div>
            <h1>Company</h1>
            <div className={styles.company}>
              <Link href="#Contact">Contact us</Link>
              <Link href="#Contact">About Us</Link>
              <Link href="#Contact">Privacy Policy</Link>
            </div>
          </div>
          <div>
            <h1>Support</h1>
            <div className={styles.support}>
              <Link href="#Contact">Get Help</Link>
              <Link href="#Contact">How It Works</Link>
              <Link href="#Contact">Contact Us</Link>
            </div>
            <p></p>
          </div>
          <div>
            <h1>Stay up to date</h1>
            {/* <div className={styles.subscribe}> */}
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
            {/* <input
                type="text"
                placeholder="your email address"
                className={styles.input}
              />
              <FiSend className={styles.sendBtn} /> */}
            {/* </div> */}
          </div>
        </div>
      </Cover>
    </div>
  )
}

export default Footer

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Cover from '../../Cover'
import styles from './styles.module.css'

const Navbar = () => {
  const router = useRouter()
  const [route, setRoute] = useState('')

  useEffect(() => {
    setRoute(router.query.index)
    console.log(route)
  }, [route])

  return (
    <div className={styles.navBg}>
      <Cover>
        <div className={styles.navigation}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/Assets/troniclab_Logo.png"
                width={320}
                height={120}
                alt="troniclab Logo"
              />
            </Link>
          </div>
          <div className={styles.navigationLinks}>
            <div>
              <Link href=" https://troniclab.com/Shop/" target="_blank">
                <a target="_blank">Shop</a>
              </Link>
            </div>
            <div>
              <Link href="#Contact">Contact Us</Link>
            </div>
            <div>
              <Link href="/Gallery">Gallery</Link>
            </div>
            <div>
              <Link href="/AboutUs">About Us</Link>
            </div>
          </div>
        </div>
      </Cover>
    </div>
  )
}

export default Navbar

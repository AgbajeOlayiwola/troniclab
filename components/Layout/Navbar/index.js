import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Cover from '../../Cover'
import styles from './styles.module.css'
import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
  var styless = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px',
    },
    bmBurgerBars: {
      background: '#fff',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      height: '100%',
      right: '0px',
      top: '96px',
    },
    bmMenu: {
      background: '#426cb4',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#fff',
      padding: '0.8em',
      width: '60%',
    },
    bmOverlay: {
      top: '96px',
    },
  }
  const router = useRouter()
  const [route, setRoute] = useState('')

  useEffect(() => {
    setRoute(router.query.index)
    console.log(route)
  }, [route])

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    console.log(width)
  }

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    // component is mounted and window is available
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [width])

  return (
    <>
      <div className={styles.navBg}>
        <Cover>
          <div className={styles.navigation}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/Assets/troniclab_Logo.png"
                  width={width >= 600 ? 320 : 260}
                  height={width >= 600 ? 120 : 95}
                  alt="troniclab Logo"
                />
              </Link>
            </div>
            {width >= 750 ? (
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
            ) : (
              <Menu width={300} styles={styless}>
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
              </Menu>
            )}
          </div>
        </Cover>
      </div>
    </>
  )
}

export default Navbar

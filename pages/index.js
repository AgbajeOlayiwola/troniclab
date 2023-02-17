import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import HomePage from './Home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <title>Troniclab</title>
      <HomePage />
    </div>
  )
}

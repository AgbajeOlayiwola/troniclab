import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import styles from './styles.module.css'
import Gallery from 'react-photo-gallery'
const GalleryT = () => {
  const photos = [
    {
      src: 'https://source.unsplash.com/2ShvY8Lf6l0/1600x1200',
      srcSet: [
        'https://i.pinimg.com/564x/54/85/8d/54858d7865419d11e908782b6b656eb3.jpg',
      ],
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 4,
      height: 3,
    },
    {
      src:
        'https://i.pinimg.com/564x/a9/5f/e3/a95fe3438f178e5f4cef33e111558a72.jpg',
      srcSet: [],
      sizes: ['(min-width: 680px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 1,
      height: 1,
    },
    {
      src: 'https://source.unsplash.com/qDkso9nvCg0/1200x1600',
      srcSet: [
        'https://source.unsplash.com/qDkso9nvCg0/375x500 375w',
        'https://source.unsplash.com/qDkso9nvCg0/600x800 600w',
        'https://source.unsplash.com/qDkso9nvCg0/768x1024 768w',
        'https://source.unsplash.com/qDkso9nvCg0/1200x1600 1200w',
      ],
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/iecJiKe_RNg/1200x1600',
      srcSet: [
        'https://source.unsplash.com/iecJiKe_RNg/375x500 375w',
        'https://source.unsplash.com/iecJiKe_RNg/600x800 600w',
        'https://source.unsplash.com/iecJiKe_RNg/768x1024 768w',
        'https://source.unsplash.com/iecJiKe_RNg/1200x1600 1200w',
      ],
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/epcsn8Ed8kY/1200x1600',
      srcSet: [
        'https://source.unsplash.com/epcsn8Ed8kY/375x500 375w',
        'https://source.unsplash.com/epcsn8Ed8kY/600x800 600w',
        'https://source.unsplash.com/epcsn8Ed8kY/768x1024 768w',
        'https://source.unsplash.com/epcsn8Ed8kY/1200x1600 1200w',
      ],
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/NQSWvyVRIJk/1600x1200',
      srcSet: [
        'https://source.unsplash.com/NQSWvyVRIJk/500x375 500w',
        'https://source.unsplash.com/NQSWvyVRIJk/800x600 800w',
        'https://source.unsplash.com/NQSWvyVRIJk/1024x768 1024w',
        'https://source.unsplash.com/NQSWvyVRIJk/1600x1200 1600w',
      ],
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/zh7GEuORbUw/1200x1600',
      srcSet: [
        'https://source.unsplash.com/zh7GEuORbUw/375x500 375w',
        'https://source.unsplash.com/zh7GEuORbUw/600x800 600w',
        'https://source.unsplash.com/zh7GEuORbUw/768x1024 768w',
        'https://source.unsplash.com/zh7GEuORbUw/1200x1600 1200w',
      ],
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/PpOHJezOalU/1600x1200',
      srcSet: [
        'https://source.unsplash.com/PpOHJezOalU/500x375 500w',
        'https://source.unsplash.com/PpOHJezOalU/800x600 800w',
        'https://source.unsplash.com/PpOHJezOalU/1024x768 1024w',
        'https://source.unsplash.com/PpOHJezOalU/1600x1200 1600w',
      ],
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/I1ASdgphUH4/1600x1200',
      srcSet: [
        'https://source.unsplash.com/I1ASdgphUH4/500x375 500w',
        'https://source.unsplash.com/I1ASdgphUH4/800x600 800w',
        'https://source.unsplash.com/I1ASdgphUH4/1024x768 1024w',
        'https://source.unsplash.com/I1ASdgphUH4/1600x1200 1600w',
      ],
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 4,
      height: 3,
    },
  ]

  return (
    <div className={styles.gallery}>
      {' '}
      <Gallery photos={photos} />
    </div>
  )
}

export default GalleryT

import React, { useState, useRef, useEffect } from 'react'
import styles from './styles.module.css'
import Cover from '../../components/Cover'
import Lottie from 'react-lottie'
import animationData from '../../components/Animations/ideasLottie.json'
import printerAnimationData from '../../components/Animations/printer.json'
import contactAnimationData from '../../components/Animations/contact.json'
import Link from 'next/link'
import Slider from 'react-slick'
import Image from 'next/image'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '20px',
  },
}
const customStylesMobile = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '20px',
  },
}
const HomePage = () => {
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

  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      subject,
      email,
      message,
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setSubject('')
        setEmail('')
        setMessage('')
      }
    })
  }

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const printerOptions = {
    loop: true,
    autoplay: true,
    animationData: printerAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const contactOptions = {
    loop: true,
    autoplay: true,
    animationData: contactAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  }
  return (
    <>
      <Cover>
        <div className={styles.hero}>
          <div className={styles.heroSection}>
            <h1>
              Harness Technology To Bring Your<span> Ideas</span> To{' '}
              <span>Reality</span>
            </h1>
            <p className={styles.heroCopy}>
              Welcome to Troniclab where we transform your ideas into reality!
              We believe that everyone has the potential to be a hero, and our
              cutting-edge technology allows you to unleash your creativity and
              bring your visions to life.
            </p>
            <div className={styles.letsTalk} onClick={openModal}>
              Lets Talk
            </div>
          </div>
          <div>
            <Lottie
              options={defaultOptions}
              height={width >= 600 ? 600 : 220}
              width={width >= 600 ? 600 : 220}
            />
          </div>
        </div>
      </Cover>
      <div className={styles.moreInfoBg}>
        <Cover>
          <div className={styles.moreInfo}>
            <div className={styles.moreInfoLeft}>
              <h3>
                Transforming the <span>Prototyping Industry </span>
                accross <span>Africa</span>
                <p>
                  Our 3D printing services are designed to empower businesses
                  and individuals to become their own heroes by making
                  prototyping and manufacturing faster, more efficient, and
                  cost-effective. Whether you&apos;re an entrepreneur looking to
                  bring a product to market or an artist seeking to create a
                  one-of-a-kind masterpiece, we&apos;re here to help you make it
                  happen.
                </p>
              </h3>
            </div>
            <div className={styles.moreInfoCenter}>
              {' '}
              <Lottie options={printerOptions} height={300} width={300} />
            </div>
            <div className={styles.moreInfoRight}>
              <h3>
                More than <span>3D Printing</span>
              </h3>
              <p>
                one-of-a-kind masterpiece, we&apos;re here to help you make it
                Whether youre looking to start a new business, launch a new
                product, or simply want to express your creativity, we have the
                expertise and resources to help you succeed. Our team of
                experienced professionals is dedicated to providing you with
                top-notch customer service, ensuring that your project is
                delivered on time and to your exact specifications.
              </p>
            </div>
          </div>
        </Cover>
        <svg
          className={styles.svgBtmm}
          viewBox="0 0 1460 346"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1460 346H0.00439453C172.939 134.791 435.729 0 730 0C1024.27 0 1287.06 134.791 1460 346Z"
            fill="#000"
          ></path>
        </svg>
      </div>
      <div className={styles.clientbg}>
        <Cover>
          <div className={styles.clients}>
            <h1>Trusted Clients</h1>
          </div>
          <div>
            <Slider {...settings}>
              <div className={styles.sildeone}>
                <Image
                  src="/Assets/WorkedWith/dufil.jpeg"
                  alt="troniclabXdufil"
                  width={width >= 600 ? 420 : 10}
                  height={width >= 600 ? 420 : 10}
                />
                <p className={styles.slideP}>
                  we designed and printed models for all kinds of noodles
                  produced by dufil foods which was used for a mmarketing
                  campaign
                </p>
              </div>
              <div className={styles.sildeone}>
                <Image
                  src="/Assets/WorkedWith/Aos.jpeg"
                  alt="troniclabXdufil"
                  width={420}
                  height={420}
                />
                <p className={styles.slideP}>
                  Designed several and printed several oil production and mining
                  equipment
                </p>
              </div>
              <div className={styles.sildeone}>
                <Image
                  src="/Assets/WorkedWith/bbn.jpeg"
                  alt="troniclabXdufil"
                  width={420}
                  height={420}
                />
                <p className={styles.slideP}>
                  Designed and printed models dor a big brother naija
                  capmetition
                </p>
              </div>

              <div className={styles.sildeone}>
                <Image
                  src="/Assets/WorkedWith/fadob.png"
                  alt="troniclabXdufil"
                  width={820}
                  height={320}
                />
                <p className={styles.slideP}>
                  designed and printed 3d helmets wich were used in a marketing
                  campaign for supa komando
                </p>
              </div>
              <div className={styles.sildeone}>
                <Image
                  src="/Assets/WorkedWith/kidzvogue.png"
                  alt="troniclabXdufil"
                  width={420}
                  height={420}
                />
                <p className={styles.slideP}>
                  deign and prototype several chasis for kids toy cars
                </p>
              </div>
              <div className={styles.sildeone}>
                <Image
                  src="/Assets/WorkedWith/supakomando.png"
                  alt="troniclabXdufil"
                  width={420}
                  height={420}
                />
                <p className={styles.slideP}>
                  designed and printed 3d helmets wich were used in a marketing
                  campaign for supa komando
                </p>
              </div>
            </Slider>
          </div>
        </Cover>
      </div>
      <div className={styles.contactBg} id="Contact">
        <Cover>
          <div className={styles.contact}>
            <div>
              <p>Contact us</p>
              <h1>How Can We Help</h1>
              <div className={styles.contactInfo}>
                <div>
                  <BsPhone />
                  +23408111062865
                </div>
                <div>
                  <AiOutlineMail /> support@troniclab.com
                </div>
                <div>
                  <GoLocation /> Charles Majekodunmi Street Sabo Yaba Lagos
                </div>
                <div className={styles.lagos}>
                  <p>Lagos</p>
                </div>
              </div>
              <div className={styles.contactButton} onClick={openModal}>
                Send Us a Message
              </div>
            </div>
            <div>
              <Lottie
                options={contactOptions}
                height={width >= 600 ? 600 : 220}
                width={width >= 600 ? 800 : 280}
              />
            </div>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={width >= 600 ? customStyles : customStylesMobile}
            contentLabel="Example Modal"
          >
            <div className={styles.closeModal}>
              <svg
                onClick={closeModal}
                width="16"
                height="16"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1514 9.50024L18.3257 3.32587C18.6737 2.97351 18.8681 2.49782 18.8665 2.00264C18.8649 1.50746 18.6675 1.03301 18.3174 0.682875C17.9672 0.332736 17.4927 0.135346 16.9976 0.133798C16.5024 0.132251 16.0267 0.326672 15.6744 0.674616L9.49999 6.84888L3.32562 0.674616C2.97295 0.328283 2.49779 0.135234 2.00351 0.137473C1.50923 0.139711 1.03583 0.337055 0.686321 0.686568C0.336809 1.03608 0.139465 1.50948 0.137226 2.00376C0.134988 2.49804 0.328037 2.9732 0.674369 3.32587L6.84863 9.50024L0.674369 15.6746C0.328037 16.0273 0.134988 16.5024 0.137226 16.9967C0.139465 17.491 0.336809 17.9644 0.686321 18.3139C1.03583 18.6634 1.50923 18.8608 2.00351 18.863C2.49779 18.8652 2.97295 18.6722 3.32562 18.3259L9.49999 12.1516L15.6744 18.326C16.0267 18.6739 16.5024 18.8683 16.9976 18.8667C17.4928 18.8652 17.9672 18.6678 18.3174 18.3176C18.6675 17.9675 18.8649 17.493 18.8664 16.9978C18.868 16.5026 18.6736 16.027 18.3256 15.6746L12.1514 9.50024Z"
                  fill="#374B58"
                ></path>
              </svg>
            </div>
            <h2
              ref={(_subtitle) => (subtitle = _subtitle)}
              className={styles.sub}
            >
              Send Us A Message
            </h2>
            <form className={styles.inputFormms}>
              <div>
                <label>Email</label>
                <br />
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <div>
                <label>Subject</label>
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <label>Message</label>
                <br />
                <br />
                <textarea
                  cols="8"
                  rows="12"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                className={styles.submit}
                type="submit"
                onClick={handleSubmit}
              >
                Submmit
              </button>
            </form>
          </Modal>
        </Cover>
      </div>
    </>
  )
}

export default HomePage

import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import Cover from '../Cover'
import contactAnimationData from '../Animations/contact.json'
import Lottie from 'react-lottie'
import styles from './styles.module.css'

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
const ContactModal = () => {
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
  console.log(submitted)
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
  const contactOptions = {
    loop: true,
    autoplay: true,
    animationData: contactAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
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
  )
}

export default ContactModal

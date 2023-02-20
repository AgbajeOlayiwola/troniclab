import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Cover from '../../components/Cover'
import styles from './styles.module.css'
import Slider from 'react-slick'
import ContactModal from '../../components/Contactmodal'

const AboutUs = () => {
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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  }
  return (
    <div className={styles.aboutUs}>
      <Cover>
        <div>AboutUs</div>
        <div className={styles.transforming}>
          <h1>We’re transforming the way Africa builds</h1>
        </div>
        <div>
          <Image src="/Assets/about3D.jpg" width={1400} height={900} />
        </div>
      </Cover>
      <Cover>
        <div className={styles.mission}>
          <div className={styles.ourMission}>
            <h1>Our Mission</h1>
          </div>
          <div className={styles.missionP}>
            <p>
              Our mission is to empower African communities by providing
              innovative and accessible 3D printing solutions. We strive to be a
              leader in the African 3D printing industry by offering
              cutting-edge technology, exceptional customer service, and a
              commitment to sustainability. Through our products and services,
              we aim to support entrepreneurship, education, and economic growth
              throughout the continent. Our ultimate goal is to create a more
              equitable and prosperous future for all Africans.
            </p>
          </div>
        </div>
      </Cover>
      <div className={styles.problemsBg}>
        <Cover>
          <div className={styles.problem}>
            <div>
              <Image src="/Assets/tom.jpg" width={900} height={870} />
            </div>
            <div>
              <div>
                <p>Problem</p>
              </div>
              <div className={styles.problemH1}>
                <h1>Prototyping is costly and slow</h1>
              </div>
              <div>
                <p className={styles.problemp}>
                  With traditional prototyping costing 70% more than rapid
                  prototyping Troniclab is here to provide a paradigm shift.
                </p>
              </div>
              <hr />
              <div>
                <p className={styles.problemp}>
                  Traditional prototyping methods may have limitations when it
                  comes to design flexibility, particularly for complex shapes
                  or geometries. This can result in compromises in the design or
                  require multiple iterations to achieve the desired result.
                  Waste
                </p>
              </div>
              <hr />
              <div>
                <p className={styles.problemp}>
                  Traditional prototyping methods may not be accessible to
                  smaller businesses or individuals due to the high cost and
                  required expertis
                </p>
              </div>
            </div>
          </div>
        </Cover>
      </div>
      <Cover>
        <div className={styles.solution}>
          <div>
            <div>
              <div className={styles.solutions}>
                <p>Solution</p>
              </div>
              <div className={styles.problemH1}>
                <h1>We’re fixing this with 3D printing and material science</h1>
              </div>
              <div>
                <p className={styles.problemp}>
                  With 3D printing, it is possible to create highly customized
                  and personalized products, such as prosthetic limbs, dental
                  implants, and hearing aids, which can be designed to fit the
                  unique needs of an individual.
                </p>
              </div>
              <hr />
              <div>
                <p className={styles.problemp}>
                  3D printing allows for the quick and cost-effective production
                  of prototypes and small batches of parts, which is useful for
                  product design, testing, and development
                </p>
              </div>
              <hr />
              <div>
                <p className={styles.problemp}>
                  3D printing enables local production, which can help to
                  mitigate supply chain disruptions and increase resilience,
                  particularly in remote or hard-to-reach areas.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src="/Assets/Solution.jpg" width={2300} height={1900} />
          </div>
        </div>
      </Cover>
      <div className={styles.clients}>
        {/* <Cover>
          <div className={styles.clients}>
            <h1>Trusted Clients</h1>
          </div>
          <div>
            <Slider {...settings}>
              <div className={styles.sildeone}>
                <Image
                  src="/Assets/WorkedWith/dufil.jpeg"
                  alt="troniclabXdufil"
                  width={width >= 600 ? 220 : 10}
                  height={width >= 600 ? 220 : 10}
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
                  width={220}
                  height={220}
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
                  width={220}
                  height={220}
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
                  width={420}
                  height={220}
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
                  width={220}
                  height={220}
                />
                <p className={styles.slideP}>
                  deign and prototype several chasis for kids toy cars
                </p>
              </div>
              <div className={styles.sildeone}>
                <Image
                  src="/Assets/WorkedWith/supakomando.png"
                  alt="troniclabXdufil"
                  width={220}
                  height={220}
                />
                <p className={styles.slideP}>
                  designed and printed 3d helmets wich were used in a marketing
                  campaign for supa komando
                </p>
              </div>
            </Slider>
          </div>
        </Cover> */}
      </div>
      <ContactModal />
    </div>
  )
}

export default AboutUs

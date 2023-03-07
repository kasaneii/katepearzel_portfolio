'use client'

import React from 'react'
import styles from '../styles'

const About = () => {
  return (
    <section className={`${styles.bottomPaddings} sm:pt-32 xs:pt-16 pt-24 bg-ivory`}>
      <div className={`${styles.innerWidth} ${styles.flexCenter} mx-auto`}>
        <div className='w-full flex items-start gap-10 overflow-hidden'>
          <p className='w-[60%] xl:text-[24px] 2xl:text-[32px] text-codgray'>I bridge the gap between aesthetics and technology to consistently deliver websites that leave a lasting impression on visitors. </p>
          <p className='w-[40%] xl:text-[14px] 2xl:text-[18px] font-light text-codgray'>Whether working on a small business website or a large-scale project, I bring my full attention and passion to every task, ensuring that each website I create is a true reflection of my dedication to quality and  excellence.</p>
        </div>
      </div>
    </section>
  )
}

export default About
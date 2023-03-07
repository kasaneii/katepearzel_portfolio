import React from 'react'
import styles from '../styles'
import { Navbar, Marquee } from '@/components'

const Hero = () => {
  return (
    <section className='bg-honey w-screen h-screen relative'>
      <Navbar textColor='codgray' logoColor='codgray'/>
      <div className='w-full h-full absolute z-10 flex items-end xl:pb-48 2xl:pb-60'>
        <div className='h-[300px] w-full flex justify-between items-end'>
          <div className='xl:w-[250px] 2xl:w-[290px] xl:h-[90px] 2xl:h-[120px] bg-mineshaft rounded-r-full flex gap-5 items-center'>
            <p className='xl:pl-12 2xl:pl-10 xl:text-[14px] xl:leading-[20px] 2xl:text-[18px] 2xl:leading-[22px] text-ivory font-medium'>Based <br /> from the <br /> Philippines</p>
            <div className='xl:w-[70px] xl:h-[70px] 2xl:w-[80px] 2xl:h-[80px] bg-honey rounded-full flex items-center justify-center'>
              <img src="/philippines.png" alt="philippines-flag" className='xl:w-[40px] xl:h-[40px] 2xl:w-[50px] 2xl:h-[50px] object-contain'/>
            </div>
          </div>
          <div className="w-[300px] flex flex-col xl:gap-10 2xl:gap-20 xl:mr-20 2xl:mr-48">
            <img src="/right-arrow.png" alt="arrow" className='xl:w-[20px] xl:h-[20px] 2xl:w-[30px] 2xl:h-[30px] object-contain rotate-[45deg]'/>
            <p className='xl:text-[14px] 2xl:text-[16px] font-normal text-codgray'>Crafting visually appealing and user-friendly experiences, one website at a time.</p>
          </div>
        </div>
      </div>
      <div className='w-full h-full absolute z-10 flex items-end'>
        <Marquee/>
      </div>
      <div className='w-full h-full pt-20 flex justify-center relative drop-shadow-lg'>
        <div className={`${styles.innerWidth} mx-auto`}>
          <h1 className={`${styles.heroHeading} tracking-tighter`}>designer & developer</h1>
        </div>
        <img src="/hero-img-1.png" className='absolute top-0 pt-10 h-screen object-contain drop-shadow-xl' />
      </div>
    </section>
  )
}

export default Hero
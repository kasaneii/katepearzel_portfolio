'use client'

import React from 'react'
import { myServices, designTools, devTools } from '@/constants'
import styles from '@/styles'

const AboutMe = () => {
  return (
    <section className={`${styles.yPaddings}`}>
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-20`}>
        <div className='flex gap-5 items-end'>
          <h2 className='xl:text-[64px] xl:leading-[48px] 2xl:text-[80px] 2xl:leading-[60px] font-light text-codgray'>Me, <span className='font-medium xl:text-[64px] 2xl:text-[80px]'>Myself</span> & I</h2>
          <img src="/rec.png" className="xl:w-[20px] xl:h-[20px] 2xl:w-[30px] 2xl:h-[30px] object-contain drop-shadow-lg"/>
        </div>
        <div className='w-full flex gap-10'>
          <div className='w-[40%] font-light px-10'>
            <p className='xl:text-[14px] 2xl:text-[16px]'>I'm a Web Designer and Front-End Developer in the Philippines with a passion for creating visually stunning and user-friendly websites. My technical skills, attention to detail, and drive for excellence have consistently delivered exceptional results for my clients.</p>
            <br/>
            <p className='xl:text-[14px] 2xl:text-[16px]'>As a tech-savvy child, I discovered my passion for web design and development in high school computer classes. I pursued this passion through a computer science degree, but continued to grow my skills through self-education and hands-on experience after graduation.</p>
            <br/>
            <h3 className='font-medium text-royalblue xl:text-[14px] 2xl:text-[16px]'>Transforming the digital landscape with passion and skill</h3>
          </div>
          <div className='w-[60%] overflow-hidden'>
            <img src="/hero-img-3.png" className='w-full h-full object-contain' />
          </div>
        </div>
        <h2 className='pt-20 xl:text-[48px] xl:leading-[52px] 2xl:text-[56px] 2xl:leading-[60px] font-light text-codgray'><span className='font-medium xl:text-[48px] 2xl:text-[56px]'>What</span> I can <span className='font-medium xl:text-[48px] 2xl:text-[56px]'>do</span> for <span className='font-medium xl:text-[48px] 2xl:text-[56px]'>you</span>
        <span className='font-medium xl:text-[48px] 2xl:text-[56px] typewriter'></span>
        </h2>
        <div className='flex'>
          {myServices.map((service, index) => (
            <div key={service.id} className={`flex flex-col justify-center items-center gap-10 w-[500px] h-[400px] border-[3px] border-codgray ${index === 0 ? 'border-r-0' : ''} ${index === myServices.length - 1 ? 'border-l-0' : ''}`}>
            <div className='flex flex-col items-center gap-5'>
              <div className='xl:w-[60px] xl:h-[60px] 2xl:w-[70px] 2xl:h-[70px] rounded-full bg-codgray flex items-center justify-center'>
                <img src={service.imgSrc} className='xl:w-[30px] xl:h-[30px] 2xl:w-[40px] 2xl:h-[40px] object-contain' />
              </div>
              <h3 className={`xl:text-[32px] 2xl:text-[40px] font-medium text-codgray underline-${index + 1}`}>
                {service.title}
              </h3>
            </div>
            <p className='font-light w-[80%] xl:text-[14px] 2xl:text-[16px]'>{service.paragraph}</p>
          </div>
          ))}
        </div>
        <div className='pt-20 flex gap-5 items-end'>
          <h2 className='xl:text-[64px] xl:leading-[48px] 2xl:text-[80px] 2xl:leading-[60px] font-medium text-codgray'>Tools <span className='font-light xl:text-[64px] 2xl:text-[80px]'>I use</span></h2>
          <img src="/rec.png" className="xl:w-[20px] xl:h-[20px] 2xl:w-[30px] 2xl:h-[30px] object-contain drop-shadow-lg"/>
        </div>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-wrap justify-center items-center gap-10'>
            {designTools.map((tool) => (
              <div key={tool.id} className='flex items-center gap-5 bg-honey p-5'>
                <img src={tool.imgUrl} alt="figma-logo" className="xl:w-[30px] xl:h-[30px] 2xl:w-[40px] 2xl:h-[40px] object-contain" />
                <h3 className='text-[18px] 2xl:text-[24px] font-medium text-codgray'>{tool.title}</h3>
              </div>
            ))}
            {devTools.map((tool) => (
              <div key={tool.id} className='flex items-center gap-5 bg-silver p-5'>
                <img src={tool.imgUrl} alt="figma-logo" className="xl:w-[30px] xl:h-[30px] 2xl:w-[40px] 2xl:h-[40px] object-contain" />
                <h3 className='text-[18px] 2xl:text-[24px] font-medium text-codgray'>{tool.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
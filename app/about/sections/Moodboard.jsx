'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '@/app/utils/motion'
import styles from '@/styles'

const Moodboard = () => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.yPaddings}`}
    >
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className='overflow-hidden'>
          <motion.h2
            variants={slideIn('right', 'tween', 0.2, 1)} 
            className='xl:text-[48px] xl:leading-[32px] 2xl:text-[56px] 2xl:leading-[40px] font-medium text-codgray py-10'
          >Turning Concept <br/> into Reality</motion.h2>
        </div>
        <div className='xl:w-[90%] 2xl:w-[70%] h-[500px] mx-auto flex justify-center relative'>
          <div className='w-full h-full flex items-end justify-center absolute'>
            <motion.img src="/moodboard/typing-2.png" className='h-[90%] object-contain' variants={slideIn('up', 'tween', 0.3, 0.5)}  />
            <motion.img src="/moodboard/design.jpg" className='h-full object-contain' variants={slideIn('up', 'tween', 0.4, 0.5)} />
            <motion.div variants={slideIn('up', 'tween', 0.5, 0.5)}  className='absolute w-full h-full'>
              <img src="/moodboard/bringing-ideas.png" className='absolute -top-10 right-0 h-[17%] rotate-[5deg] object-contain' />
            </motion.div>
          </div>
          <div className='absolute -top-10 w-full h-[550px] flex justify-center'>
            <motion.img src="/moodboard/center-img-blue.png" className='h-full object-contain' variants={slideIn('up', 'tween', 0.4, 0.5)} />
            <motion.img src="/moodboard/center-img-white.png" className='absolute pl-20 h-full object-contain' variants={slideIn('up', 'tween', 0.5, 0.5)} />
            <motion.img src="/moodboard/center-img-1.png" className='absolute pl-28 h-full object-contain' variants={slideIn('up', 'tween', 0.6, 0.5)} />
          </div>
          <div className="w-full h-full flex justify-center">
            <motion.div variants={slideIn('up', 'tween', 0.3, 0.5)} className='w-full h-full absolute'>
              <img src="/moodboard/mobile-2.png" className='absolute bottom-24 -right-10 h-[60%] object-contain' />
            </motion.div>
            <motion.img src="/moodboard/sketch.png" className='absolute bottom-0 right-10 h-[35%] object-contain' variants={slideIn('up', 'tween', 0.4, 0.5)} />
            <motion.img src="/moodboard/moodboard-10.png" className='absolute -bottom-20 left-28 h-[40%] object-contain -rotate-[30deg]' variants={slideIn('up', 'tween', 0.5, 0.5)} />
            <motion.img src="/moodboard/quote-2.png" className='absolute -bottom-10 pl-20 h-[20%] object-contain' variants={slideIn('up', 'tween', 0.6, 0.5)} />
          </div>
          <div className='absolute w-full h-full'>
            <motion.div variants={slideIn('up', 'tween', 0.5, 0.5)} className='absolute w-full h-full'>
              <img src="/moodboard/lamp.png" className='absolute left-72 h-[30%] object-contain' />
            </motion.div>
            <motion.div variants={slideIn('up', 'tween', 0.6, 0.5)} className='absolute w-full h-full'>
              <img src="/moodboard/moodboard-9.png" className='absolute top-20 left-10 h-[40%] object-contain' />
            </motion.div>
            <motion.div variants={slideIn('up', 'tween', 0.7, 0.5)} className='absolute w-full h-full'>
              <img src="/moodboard/coding.jpg" className='absolute top-44 left-0 h-[45%] object-contain -rotate-[10deg]' />
            </motion.div>
          </div>
        </div>
        <div className="overflow-hidden">
          <motion.p variants={fadeIn('up', 'tween', 0.8, 0.5)} className='pt-20 font-light text-[14px] w-[40%]'>I can help you bring your website vision to life with my exceptional design and technical expertise. I create impactful and user-friendly websites that accurately showcase your brand and set you apart from the competition.</motion.p>
        </div>
        <br/>
        <div className="overflow-hidden">
          <motion.p variants={fadeIn('up', 'tween', 0.9, 0.5)} className='font-medium text-royalblue text-[14px]'>Let's make something special together...</motion.p>
        </div>
      </div>
    </motion.section>
  )
}

export default Moodboard
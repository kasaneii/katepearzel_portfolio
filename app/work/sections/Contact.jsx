'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import styles from '@/styles'
import { gsap } from 'gsap'

const Contact = () => {
  const buttonRef = useRef(null);
  const blueRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  const buttonWidth = 200; // replace with your button width
  const buttonHeight = 200; // replace with your button height

  const btnMagnet = (event) => {
    const buttonBounds = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonBounds.left + buttonWidth / 2;
    const buttonCenterY = buttonBounds.top + buttonHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const distX = mouseX - buttonCenterX;
    const distY = mouseY - buttonCenterY;
    const dist = Math.sqrt(distX * distX + distY * distY);
    const magnetStrength = 0.15; // adjust the magnet strength
    const magnetX = distX * magnetStrength;
    const magnetY = distY * magnetStrength;
    gsap.to(blueRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
    gsap.to(textRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
    gsap.to(containerRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
  };

  const btnMouseEnter = () => {
    gsap.fromTo(blueRef.current, { y: '-100%' }, { duration: 0.5, y: 0, ease: 'Power2.easeOut' });
    gsap.fromTo(textRef.current, { color: '#171717' }, { color: '#FDFFF5' });
  };
  
  const btnMouseLeave = () => {
    gsap.to(containerRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.to(blueRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.to(textRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.fromTo(blueRef.current, { y: 0 }, { duration: 0.5, y: '100%', ease: 'Power2.easeOut' });
    gsap.fromTo(textRef.current, { color: '#FDFFF5' }, { color: '#171717' });
  };

  return (
    <section className={`${styles.yPaddings} px-32 h-[500px] relative`}>
      <div className="absolute bottom-10 w-[800px] h-[400px] -rotate-[10deg] royal-blue-gradient opacity-50"/>
      <div className="absolute -left-20 bottom-32 w-[800px] h-[300px] -rotate-[10deg] lime-gradient"/>
      <div className={`${styles.innerWidth} mx-auto flex justify-center absolute z-10`}>
        <div className='flex flex-col gap-20'>
          <div className='flex items-start gap-6 w-[1050px]'>
            <div className={`${styles.flexCenter} w-[100px] h-[100px] bg-silver rounded-full overflow-hidden pt-2 pr-2 drop-shadow-xl`}>
              <img src="/hero-img-2.png" className='w-full h-full object-cover object-top' />
            </div>
            <h2 className='font-medium xl:text-[64px] xl:leading-[64px] 2xl:text-[80px] 2xl:leading-[80px] text-codgray'>Let's work <br/> together.</h2>
          </div>
          <div className='xl:w-[60%] 2xl:w-[80%] border-[1px] border-opacity-50 border-mineshaft relative'>
            <Link href='/resume' target='_blank'>
              <button ref={containerRef} className={`${styles.flexCenter} absolute -top-28 -right-60 w-[200px] h-[200px] rounded-full cursor-pointer`}>
                <div 
                  ref={buttonRef} 
                  onMouseEnter={btnMouseEnter} 
                  onMouseLeave={btnMouseLeave} 
                  onMouseMove={btnMagnet} className={`relative w-full h-full bg-royalblue rounded-full flex items-center justify-center overflow-hidden`}
                >
                  <div ref={blueRef} className={`absolute w-[300px] h-[300px] bg-indigo rounded-full -translate-y-[100%]`}>
                  </div>
                  <div ref={textRef} className='w-full h-full flex items-center justify-center absolute top-0'>
                    <p className="text-ivory">Here's my CV</p>
                  </div>
                </div>
              </button>
            </Link>
            <div className='absolute flex gap-10 pt-10'>
              <button className='contact-button'>
                <Link href='mailto:pearzelkate1300@gmail.com' className='text-[16px] text-codgray'>pearzelkate1300@gmail.com</Link>
              </button>
              <button className='contact-button'>
                <Link href='tel:+639505051127' className='text-[16px] text-codgray'>+63 950 505 1127</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
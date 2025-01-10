'use client'

import React, { useState, useRef } from 'react'
import { recentWorks } from '../constants'
import Link from 'next/link'
import styles from '../styles'
import { gsap } from 'gsap'

const Work = () => {
  const [currentWork, setCurrentWork] = useState(null);
  const [hoveredWork, setHoveredWork] = useState(null);
  const workImageRefs = useRef({});
  const buttonRef = useRef(null);
  const blueRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const aboutButtonRef = useRef(null);
  const aboutBlueRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutContainerRef = useRef(null);

  const buttonWidth = 200; // replace with your button width
  const buttonHeight = 100; // replace with your button height

  const btnMagnet = (event) => {
    const buttonBounds = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonBounds.left + buttonWidth / 2;
    const buttonCenterY = buttonBounds.top + buttonHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const distX = mouseX - buttonCenterX;
    const distY = mouseY - buttonCenterY;
    const magnetStrength = 0.15; // adjust the magnet strength
    const magnetX = distX * magnetStrength;
    const magnetY = distY * magnetStrength;
    gsap.to(blueRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
    gsap.to(textRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
    gsap.to(containerRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
  };

  const btnMouseEnter = () => {
    gsap.fromTo(blueRef.current, { y: '-100%' }, { duration: 1, y: 0, ease: 'Power2.easeOut' });
    gsap.fromTo(textRef.current, { color: '#171717' }, { color: '#FDFFF5' });
  };
  
  const btnMouseLeave = () => {
    gsap.to(containerRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.to(blueRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.to(textRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.fromTo(blueRef.current, { y: 0 }, { duration: 1, y: '100%', ease: 'Power2.easeOut' });
    gsap.fromTo(textRef.current, { color: '#FDFFF5' }, { color: '#171717' });
  };

  const aboutButtonWidth = 200; // replace with your button width
  const aboutButtonHeight = 200; // replace with your button height

  const aboutBtnMagnet = (event) => {
    const buttonBounds = aboutButtonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonBounds.left + aboutButtonWidth / 2;
    const buttonCenterY = buttonBounds.top + aboutButtonHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const distX = mouseX - buttonCenterX;
    const distY = mouseY - buttonCenterY;
    const dist = Math.sqrt(distX * distX + distY * distY);
    const magnetStrength = 0.15; // adjust the magnet strength
    const magnetX = distX * magnetStrength;
    const magnetY = distY * magnetStrength;
    gsap.to(aboutBlueRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
    gsap.to(aboutTextRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
    gsap.to(aboutContainerRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
  };

  const aboutBtnMouseEnter = () => {
    gsap.fromTo(aboutBlueRef.current, { y: '-100%' }, { duration: 0.5, y: 0, ease: 'Power2.easeOut' });
  };
  
  const aboutBtnMouseLeave = () => {
    gsap.to(aboutContainerRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.to(aboutBlueRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.to(aboutTextRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.fromTo(aboutBlueRef.current, { y: 0 }, { duration: 0.5, y: '100%', ease: 'Power2.easeOut' });
  };
  
  const handleMouseEnter = (work) => {
    setCurrentWork(work);
    setHoveredWork(work.id);
    gsap.fromTo(workImageRefs.current[work.id], { opacity: 0, scale: 0.8, yPercent: -25, rotate: -15 }, { opacity: 1, scale: 1, yPercent: 25, rotate: 0, duration: 0.75 });
  };
  
  const handleMouseLeave = () => {
    if (currentWork) {
      gsap.fromTo(workImageRefs.current[currentWork.id], { opacity: 1, scale: 1, yPercent: 25, rotate: 0 }, { opacity: 0, scale: 0.8, yPercent: -25, rotate: -15, duration: 0.75 });
    }
    setCurrentWork(null);
    setHoveredWork(null);
  };  

  const handleMouseMove = (event) => {
    if (currentWork) {
      const { left, top } = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      gsap.to(workImageRefs.current[currentWork.id], {
        x: x,
        y: y,
        duration: 0.3,
      });
    }
  };

  return (
    <section className={`sm:pb-32 xs:pb-16 pb-24 bg-ivory`}>
      <div className={`${styles.innerWidth} ${styles.flexCenter} flex-col gap-32 mx-auto`}>
        <div className='w-full flex justify-between items-end'>
          <div className='flex gap-5 items-end'>
            <h2 className='xl:text-[60px] xl:leading-[40px] 2xl:text-[80px] 2xl:leading-[60px] font-medium text-codgray'>Recent <span className='font-light xl:text-[60px] 2xl:text-[80px]'>Project</span></h2>
            <img src="/rec.png" className="xl:w-[20px] xl:h-[20px] 2xl:w-[30px] 2xl:h-[30px] object-contain drop-shadow-lg"/>
          </div>
          <div ref={aboutContainerRef}>
            <Link href='https://www.figma.com/proto/YFpobtsiqQbx6Ezyqfxs7w/My-Portfolio?page-id=564%3A378&node-id=564-7857&p=f&viewport=569%2C83%2C0.03&t=th4y4waJsNIllIre-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=564%3A7857'>
              <button
              ref={aboutButtonRef}
              onMouseEnter={aboutBtnMouseEnter}
              onMouseLeave={aboutBtnMouseLeave}
              onMouseMove={aboutBtnMagnet} 
              className={`${styles.flexCenter} w-[200px] h-[200px] bg-codgray rounded-full cursor-pointer relative overflow-hidden`}>
                <div ref={aboutBlueRef} className='w-[300px] h-[300px] rounded-full bg-royalblue absolute -translate-y-[100%]'></div>
                <div ref={aboutTextRef} className='w-full h-full flex items-center justify-center absolute'>
                  <p className="text-ivory">Visit My Figma</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className='w-full flex flex-col gap-10'>
          {recentWorks.map((work) => (
            <Link key={work.id} href={work.url}>
              <div
                className="w-full h-[100px] flex border-b-2 border-opacity-50 border-mineshaft leading-[50px] relative"
                onMouseEnter={() => handleMouseEnter(work)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
              >
                <div className="w-full text-codgray flex items-end gap-5">
                  <div className="w-full flex justify-between">
                    <h2
                      className={`xl:text-[50px] 2xl:text-[64px] font-light ${
                        hoveredWork === work.id ? 'text-royalblue' : ''
                      }`}
                    >
                      {work.title}
                    </h2>
                    <h2
                        className={`font-medium ${
                          hoveredWork === work.id ? 'text-royalblue' : ''
                        }`}
                      >
                        / {work.category}
                      </h2>
                  </div>
                  <div className="xl:w-[500px] xl:h-[300px] 2xl:w-[600px] 2xl:h-[400px] absolute z-10 top-[50%] left-[30%] -translate-x-[50%] -translate-y-[25%]">
                    <img
                      ref={(ref) => (workImageRefs.current[work.id] = ref)}
                      src={work.imgUrl}
                      className={`w-full h-full object-contain ${
                        currentWork && currentWork.id === work.id ? 'visible' : 'hide'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div ref={containerRef} className='pb-20 relative z-20 flex justify-center'>
          <button
            ref={buttonRef}
            className='w-[200px] h-[100px] border-[1px] border-opacity-25 border-mineshaft rounded-full cursor-pointer text-codgray flex justify-center items-center overflow-hidden absolute'
            onMouseEnter={btnMouseEnter}
            onMouseLeave={btnMouseLeave}
            onMouseMove={btnMagnet}
          >
            <div
              ref={blueRef}
              className='w-[300px] h-[300px] rounded-full bg-royalblue absolute -translate-y-[100%]'
            ></div>
            <div className='w-full h-full flex items-center justify-center absolute top-0'>
              <Link href='/work'>
                <p ref={textRef} className='text-[20px]'>More work</p>
              </Link>
            </div>
          </button>
        </div>

        <div className={`bg-mineshaft w-full h-[700px] p-32 leading-[72px] overflow-hidden relative ${styles.flexCenter} rounded-[50px]`}>
          <div className='absolute w-[1536px] h-[1536px] two-tone rotate-[-45deg]'/>
          <div className='absolute z-10 w-full h-full flex flex-col justify-center font-medium text-ivory uppercase'>
            <div className={`${styles.flexCenter} gap-2 xl:text-[64px] 2xl:text-[72px]`}>
              <h3>a creative</h3>
              <img src="/abstract-1.jpg" className='h-[56px] w-[200px] object-cover rounded-full' />
              <h3>mind</h3>
            </div>
            <div className={`${styles.flexCenter} gap-2 xl:text-[64px] 2xl:text-[72px]`}>
              <h3>knows</h3>
              <img src="/abstract-2.jpg" className='h-[56px] w-[100px] object-cover rounded-full' />
              <h3>how to do</h3>
            </div>
            <div className={`${styles.flexCenter} gap-2 xl:text-[64px] 2xl:text-[72px]`}>
              <h3>the</h3>
              <img src="/abstract-3.jpg" className='h-[56px] w-[100px] object-cover rounded-full' />
              <h3>right thing at</h3>
            </div>
            <div className={`${styles.flexCenter} gap-2 xl:text-[64px] 2xl:text-[72px]`}>
              <h3>the right place and</h3>
            </div>
            <div className={`${styles.flexCenter} gap-2 xl:text-[64px] 2xl:text-[72px]`}>
              <h3>at the</h3>
              <img src="/abstract-4.jpg" className='h-[56px] w-[150px] object-cover rounded-full' />
              <h3>right time</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
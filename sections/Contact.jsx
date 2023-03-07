'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import styles from '../styles'
import { gsap } from 'gsap'
import { Footer } from '@/components'

const Contact = () => {
  const buttonRef = useRef(null);
  const blueRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  const emailButtonRef = useRef(null);
  const emailBlueRef = useRef(null);
  const emailTextRef = useRef(null);
  const emailContainerRef = useRef(null);

  const phoneButtonRef = useRef(null);
  const phoneBlueRef = useRef(null);
  const phoneTextRef = useRef(null);
  const phoneContainerRef = useRef(null);

  const buttonWidth = 200;
  const buttonHeight = 200;

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
  };
  
  const btnMouseLeave = () => {
    gsap.to(containerRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.to(blueRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.to(textRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.fromTo(blueRef.current, { y: 0 }, { duration: 0.5, y: '100%', ease: 'Power2.easeOut' });
  };

  const emailButtonWidth = 350;
  const emailButtonHeight = 80;

  const emailBtnMagnet = (event) => {
    const buttonBounds = emailButtonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonBounds.left + emailButtonWidth / 2;
    const buttonCenterY = buttonBounds.top + emailButtonHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const distX = mouseX - buttonCenterX;
    const distY = mouseY - buttonCenterY;
    const dist = Math.sqrt(distX * distX + distY * distY);
    const magnetStrength = 0.15; // adjust the magnet strength
    const magnetX = distX * magnetStrength;
    const magnetY = distY * magnetStrength;
    gsap.to(emailBlueRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
    gsap.to(emailTextRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
    gsap.to(emailContainerRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
  };

  const emailBtnMouseEnter = () => {
    gsap.fromTo(emailBlueRef.current, { y: '-100%' }, { duration: 1, y: 0, ease: 'Power2.easeOut' });
    gsap.fromTo(emailTextRef.current, { color: '#171717' }, { color: '#FDFFF5' });
  };
  
  const emailBtnMouseLeave = () => {
    gsap.to(emailContainerRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.to(emailBlueRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.to(emailTextRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.fromTo(emailBlueRef.current, { y: 0 }, { duration: 1, y: '100%', ease: 'Power2.easeOut' });
    gsap.fromTo(emailTextRef.current, { color: '#FDFFF5' }, { color: '#171717' });
  };

  const phoneButtonWidth = 250;
  const phoneButtonHeight = 80;

  const phoneBtnMagnet = (event) => {
    const buttonBounds = phoneButtonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonBounds.left + phoneButtonWidth / 2;
    const buttonCenterY = buttonBounds.top + phoneButtonHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const distX = mouseX - buttonCenterX;
    const distY = mouseY - buttonCenterY;
    const dist = Math.sqrt(distX * distX + distY * distY);
    const magnetStrength = 0.15; // adjust the magnet strength
    const magnetX = distX * magnetStrength;
    const magnetY = distY * magnetStrength;
    gsap.to(phoneBlueRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
    gsap.to(phoneTextRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
    gsap.to(phoneContainerRef.current, { x: magnetX, y: magnetY, duration: 0.3 });
  };
  
  const phoneBtnMouseEnter = () => {
    gsap.fromTo(phoneBlueRef.current, { y: '-100%' }, { duration: 1, y: 0, ease: 'Power2.easeOut' });
    gsap.fromTo(phoneTextRef.current, { color: '#171717' }, { color: '#FDFFF5' });
  };
  
  const phoneBtnMouseLeave = () => {
    gsap.to(phoneContainerRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.to(phoneBlueRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.to(phoneTextRef.current, { x: 0, y: 0, duration: 0.3 });
    gsap.fromTo(phoneBlueRef.current, { y: 0 }, { duration: 1, y: '100%', ease: 'Power2.easeOut' });
    gsap.fromTo(phoneTextRef.current, { color: '#FDFFF5' }, { color: '#171717' });
  };

  return (
    <section className={`${styles.yPaddings} w-screen h-screen bg-mineshaft`}>
      <div className='w-full h-full flex items-center'>
        <div className={`${styles.innerWidth} mx-auto`}>
          <div className={`${styles.flexCenter} flex-col gap-20 w-full xl:h-[550px] 2xl:h-[700px] rounded-b-[100px] bg-honey p-20`}>
            <div className='flex items-start gap-6 w-[1050px]'>
              <div className={`${styles.flexCenter} w-[100px] h-[100px] bg-silver rounded-full overflow-hidden pt-2 pr-2 drop-shadow-xl`}>
                <img src="/hero-img-2.png" className='w-full h-full object-cover object-top' />
              </div>
              <h2 className='font-medium xl:text-[64px] xl:leading-[64px] 2xl:text-[80px] 2xl:leading-[80px] text-codgray'>Let's work <br/> together.</h2>
            </div>
            <div className='w-[70%] border-[1px] border-opacity-50 border-mineshaft relative'>
              <Link href='/resume' target='_blank'>
                <button ref={containerRef} className={`absolute -top-28 right-20 w-[200px] h-[200px] rounded-full cursor-pointer overflow-hidden`}>
                  <div 
                    ref={buttonRef} 
                    onMouseEnter={btnMouseEnter} 
                    onMouseLeave={btnMouseLeave} 
                    onMouseMove={btnMagnet} className={`relative w-full h-full bg-royalblue rounded-full flex items-center justify-center`}>
                      <div ref={blueRef} className={`absolute w-[300px] h-[300px] bg-indigo rounded-full -translate-y-[100%]`}>
                      </div>
                      <div ref={textRef} className='w-full h-full flex items-center justify-center absolute top-0'>
                        <p className="text-ivory">Here's my CV</p>
                      </div>
                  </div>
                </button>
              </Link>
            </div>
            <div className='flex gap-10 pt-10'>
              <div ref={emailContainerRef} className='w-[350px] h-[80px]'>
                <button 
                ref={emailButtonRef}
                onMouseEnter={emailBtnMouseEnter} 
                onMouseLeave={emailBtnMouseLeave} 
                onMouseMove={emailBtnMagnet} 
                className='w-full h-full border-[1px] border-opacity-25 border-mineshaft rounded-full cursor-pointer relative flex items-center justify-center overflow-hidden'>
                  <div ref={emailBlueRef} className='w-[400px] h-[400px] bg-royalblue rounded-full absolute -translate-y-[100%]'></div>
                  <div ref={emailTextRef} className='w-full h-full absolute flex items-center justify-center'>
                    <Link href='mailto:pearzelkate1300@gmail.com' className='text-[16px]'>pearzelkate1300@gmail.com</Link>
                  </div>
                </button>
              </div>
              <div ref={phoneContainerRef} className='w-[250px] h-[80px]'>
                <button
                ref={phoneButtonRef}
                onMouseEnter={phoneBtnMouseEnter}
                onMouseLeave={phoneBtnMouseLeave}
                onMouseMove={phoneBtnMagnet} 
                className='w-full h-full border-[1px] border-opacity-25 border-mineshaft rounded-full cursor-pointer relative flex justify-center items-center overflow-hidden'>
                  <div ref={phoneBlueRef} className='w-[300px] h-[300px] bg-royalblue rounded-full absolute -translate-y-[100%]'></div>
                  <div ref={phoneTextRef} className='w-full h-full absolute flex items-center justify-center'>
                    <Link href='tel:+639505051127' className='text-[16px]'>+63 950 505 1127</Link>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Contact
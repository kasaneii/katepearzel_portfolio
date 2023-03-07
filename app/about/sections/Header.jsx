'use client'

import React, { useRef } from 'react'
import styles from '@/styles'
import { gsap } from 'gsap'

const header = () => {
  const containerRef = useRef(null);

  let tl = null;

  const handleMouseEnter = () => {
    tl = gsap.timeline({repeat: -1});
    tl.to(containerRef.current, {background: "#4269E2", duration: 1.5, ease: "power1.inOut"})
      .to(containerRef.current, {background: "#5A82EA", duration: 1.5, ease: "power1.inOut"})
      .to(containerRef.current, {background: "#FDDB5B", duration: 1.5, ease: "power1.inOut"})
      .to(containerRef.current, {background: "#FAB935", duration: 1.5, ease: "power1.inOut"})
      .to(containerRef.current, {background: "#3D4EBD", duration: 1.5, ease: "power1.inOut"})
      .to(containerRef.current, {background: "#2058DC", duration: 1.5, ease: "power1.inOut"});
  };

  const handleMouseLeave = () => {
    gsap.to(containerRef.current, {background: "#2058DC", duration: 1.5, ease: "power1.inOut"});
    if (tl !== null) {
      tl.clear();
    }
  };
  
  return (
    <section className={`${styles.yPaddings} px-32 flex items-center h-[650px] relative overflow-hidden`}>
      <div className="absolute top-24 -right-20 w-[400px] h-[400px] rounded-full rotate-[15deg] royal-blue-gradient"/>
      <div className="absolute top-40 right-20 w-[400px] h-[400px] rounded-full rotate-[15deg] lime-gradient"/>
      <div className={`${styles.innerWidth} absolute mx-auto flex flex-col justify-center pb-20`}>
        <h1 className={`${styles.heading}`}>Hi, I'm Pearzel.</h1>
        <h1 className={`${styles.heading}`}>
          Nice to meet you
          <span className={`${styles.heading} typewriter`}></span>
        </h1>
      </div>
      <div className="absolute bottom-28 w-[85%] border-[1px] border-opacity-50 border-mineshaft">
        <div ref={containerRef} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className={`${styles.flexCenter} absolute -top-24 right-52 w-[200px] h-[200px] bg-[#2058DC] rounded-full cursor-pointer`}>
          <img src="/icons/code.png" alt="code-icon" className='w-[100px] h-[100px] object-contain'/>
        </div>
      </div>
    </section>
  )
}

export default header
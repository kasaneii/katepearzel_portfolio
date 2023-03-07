'use client'

import React, { useEffect, useRef } from 'react'
import styles from '@/styles'
import { Navbar } from '@/components'
import { Header, Project, Footer, Contact } from './sections'
import Scrollbar from 'smooth-scrollbar'
import { gsap, Power3 } from 'gsap'

const page = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      {
        y: '200%',
        skewY: 15,
        opacity: 0,
      },
      {
        duration: 1,
        y: 0,
        skewY: 0,
        ease: Power3.easeOut,
        opacity: 1,
        onComplete: () => {
          contentRef.current.style.opacity = 1;
        },
      },
    );
  }, []);

  useEffect(() => {
    let scrollbar = Scrollbar.init(document.querySelector('#my-scrollbar'), {
      damping: 0.05,
    });

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <section>
      <div className={`${styles.flexCenter} flex-col gap-5 w-screen h-screen bg-mineshaft block xl:hidden`}>
        <img src="/smile-ivory.png" className="w-[30px] h-[30px] object-contain" />
        <p className="text-ivory text-center">Please visit on a desktop device <br/> for a better experience.</p>
      </div>
      <div className="main-container xl:block hidden">
        <div className="background"/>
        <section className='bg-ivory main-content' ref={contentRef} style={{ opacity: 0 }}>
          <div id="my-scrollbar">
            <Navbar textColor='codgray' logoColor='codgray' />
            <Header/>
            <Project/>
            <Contact/>
            <Footer/>
          </div>
        </section>
      </div>
    </section>
  )
}

export default page
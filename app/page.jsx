'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Hero, About, Work, Contact } from '../sections';
import Scrollbar from 'smooth-scrollbar';
import Link from 'next/link'
import styles from '../styles'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isLoaded) {
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
          opacity: 1,
          ease: Power3.easeOut,
        }
      );
    }
  }, [isLoaded]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 6000);
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
      {!isLoaded && (
        <div className="preloader">
          <video autoPlay muted>
            <source src="/preloader-v2.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      <div className="background"/>
      <div className="main-content" ref={contentRef} style={{ visibility: isLoaded ? 'visible' : 'hidden' }}>
        <div id="my-scrollbar">
          <Hero/>
          <About/>
          <Work/>
          <Contact/>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Page;


'use client'

import React, { useState, useRef, useEffect } from "react";
import { Navbar } from '@/components'
import Link from 'next/link'
import styles from '@/styles'
import Scrollbar from 'smooth-scrollbar'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const imageRef = useRef(null);
  const cursorRef = useRef(null);
  const nextRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    const cursor = cursorRef.current;

    const handleMouseEnter = (e) => {
      setIsHovering(true);
      gsap.fromTo(cursor, {
        scale: 0,
        opacity: 0,
      },{
        scale: 1,
        opacity: 1,
        duration: 0.5,
      });
    };

    const handleMouseMove = (e) => {
      if (isHovering) {
        const rect = image.getBoundingClientRect();
        gsap.to(cursor, {
          x: e.clientX - (150 / 2) - rect.left,
          y: e.clientY - (150 / 2) - rect.top,
          duration: 0.2,
        });
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      gsap.fromTo(cursor, {
        scale: 1,
      },{
        scale: 0,
        duration: 0.5,
      });
    };
    
  const bounds = (el) => el.getBoundingClientRect();
  const magnetStrength = 0.5;

  nextRef.current.addEventListener('mousemove', (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      x: (e.clientX - bounds(e.target).left - bounds(e.target).width / 2) * magnetStrength,
      y: (e.clientY - bounds(e.target).top - bounds(e.target).height / 2) * magnetStrength,
      ease: 'power2.out'
    });
  })

  nextRef.current.addEventListener('mouseleave', (e) => {
    gsap.to(e.target, { duration: 0.3, x: 0, y: 0, ease: 'power2.out' });
  })

    image.addEventListener('mouseenter', handleMouseEnter);
    image.addEventListener('mousemove', handleMouseMove);
    image.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      image.removeEventListener('mouseenter', handleMouseEnter);
      image.removeEventListener('mousemove', handleMouseMove);
      image.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  const cover1Ref = useRef(null);
  const cover2Ref = useRef(null);
  const cover3Ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const cover1 = cover1Ref.current;
    const cover2 = cover2Ref.current;
    const cover3 = cover3Ref.current;
    const text = textRef.current;

    // Initialize Smooth Scrollbar
    const scrollbar = Scrollbar.init(document.querySelector('#my-scrollbar'), {
      damping: 0.05,
    });

    // Set ScrollTrigger to use Smooth Scrollbar instead of window
    ScrollTrigger.scrollerProxy('#my-scrollbar', {
      scrollTop(value) {
        if (arguments.length) {
          scrollbar.scrollTop = value;
        }
        return scrollbar.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // Parallax effect for cover1
    gsap.fromTo(cover1, {
      scale: 1.4,
      y: 0,
    }, {
      y: '25%',
      ease: 'none',
      scrollTrigger: {
        trigger: cover1,
        scroller: '#my-scrollbar',
        scrub: 1,
      },
    });

    // Parallax effect for cover2
    gsap.fromTo(cover2, {
      scale: 1,
    }, {
      scale: 1.2,
      ease: 'none',
      scrollTrigger: {
        trigger: cover2,
        scroller: '#my-scrollbar',
        scrub: 1,
      },
    });

    // Parallax effect for cover3
    gsap.fromTo(cover3, {
      scale: 2,
    }, {
      scale: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: cover3,
        scroller: '#my-scrollbar',
        scrub: 1,
      },
    });

    // Parallax effect for text
    gsap.fromTo(text, {
      y: '-200%',
    }, {
      y: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: text,
        scroller: '#my-scrollbar',
        scrub: 1,
      },
    });

    // Remove ScrollTrigger when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
    };
  }, []); 

  return (
    <section>
      <div className={`${styles.flexCenter} flex-col gap-5 w-screen h-screen bg-mineshaft block xl:hidden`}>
        <img src="/smile-ivory.png" className="w-[30px] h-[30px] object-contain" />
        <p className="text-ivory text-center">Please visit on a desktop device <br/> for a better experience.</p>
      </div>
      <div className="xl:block hidden">
        <div id="my-scrollbar">
          <Navbar textColor='ivory' logoColor='ivory'/>
          <div className="relative w-screen h-[1900px] overflow-hidden">
            <Image
              ref={cover1Ref}
              src="/adam_johnson/cover.jpg"
              objectFit="cover"
              objectPosition="top center"
              layout="fill"
            />
            <div className='w-full h-full absolute top-0 bg-black opacity-25'></div>
          </div>
          <div className='w-screen h-[1900px] absolute top-0 flex items-center'>
            <div className={`${styles.innerWidth} mx-auto text-ivory`}>
              <h2 className={`${styles.heroHeading2}`}>Adam Johnson</h2>
              <div className='pt-5 flex justify-between items-center'>
                <div className='flex flex-1 justify-start'>
                  <p className='font-light'>Creative photography portfolio</p>
                </div>
                <div className='flex flex-1 justify-end'>
                  <Link href='https://adamjohnson.vercel.app/' target='_blank' rel='noopener noreferrer'>
                    <button className='visitWebsite bg-mineshaft px-6 py-4 rounded-full flex items-center gap-10 relative'>
                      <p className='pr-10'>Visit Website</p>
                      <div className='circle flex justify-center items-center'>
                        <img src="/right-arrow.png" alt="arrow" className='opacity-0 transform-opacity object-contain' />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
              <div className='pt-32 w-[700px]'>
                <p className={`${styles.heroParagraph}`}>
                  Adam Johnson is a master storyteller and visual artist, using his photography skills to capture the beauty and complexities of the world. As a creative director, he infuses his projects with imagination and a touch of magic.
                </p>
              </div>
              <div className='pt-32 flex gap-20 '>
                <div className='flex flex-col gap-5'>
                  <p className='font-medium uppercase'>role/services</p>
                  <div className='flex flex-col gap-2'>
                    <p className='text-[14px] font-light'>UI & UX Design</p>
                    <p className='text-[14px] font-light'>Web Development</p>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <p className='font-medium uppercase'>Industry</p>
                  <div className='flex flex-col gap-2'>
                    <p className='text-[14px] font-light'>Photography</p>
                    <p className='text-[14px] font-light'>Film making</p>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <p className='font-medium uppercase'>Year</p>
                  <div className='flex flex-col gap-2'>
                    <p className='text-[14px] font-light'>'2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-gallery'>
            <div className={`${styles.paddingY} ${styles.innerWidth} mx-auto flex flex-col gap-48`}>
              <Image src="/adam_johnson/page-1.png" alt="adam-johnson webpage one" width={1920} height={1080} quality={100} layout="responsive" />
              <Image src="/adam_johnson/page-2.png" alt="adam-johnson webpage two" width={1920} height={1080} quality={100} layout="responsive" />
            </div>
          </div>


          <div className='w-screen h-screen flex justify-center items-center relative overflow-hidden'>
            <Image
              ref={cover2Ref}
              src="/adam_johnson/cover-2.jpg"
              alt="photographer"
              layout='fill'
              objectFit="cover" 
              quality={100}
            />
            <h2 className={`${styles.heading2} absolute text-ivory drop-shadow-xl`}>Bringing the world to life, one frame at a time.</h2>
          </div>

          <div className={`${styles.paddingY} ${styles.innerWidth} mx-auto flex justify-center`}>
            <Image src="/adam_johnson/mockup.png" alt='adam-johnson website mockup' layout="responsive" width={1920} height={1080} objectFit="contain" quality={100} />
          </div>

          <div ref={imageRef} className='w-screen h-screen flex items-center justify-center relative overflow-hidden'>
            <Image
              ref={cover3Ref}
              src="/metaversus/meta-1-v2.jpg"
              alt="Metaversus Cover"
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
              quality={100}
              blurDataURL="/metaversus/meta-1-v2.jpg"
              placeholder="blur"
              className='blur-sm'
            />
            <Link href='/work/metaversus'>
              <div
                ref={cursorRef}
                className={`${styles.flexCenter} w-[150px] h-[150px] rounded-full bg-royalblue absolute top-0 left-0 opacity-0 z-10`}
              >
                <p ref={nextRef} className='text-ivory text-center font-light'>Next</p>
              </div>
            </Link>
            <div className={`${styles.innerWidth} mx-auto flex justify-center items-center absolute`}>
              <Link href='/work/metaversus' className="absolute w-full h-full flex justify-center items-center">
                <div ref={textRef} className="absolute left-20">
                  <h3 className='text-ivory font-normal text-[40px] leading-[40px]'>Metaversus</h3>
                  <p className='pt-5 text-ivory'>Metaverse landing page</p>
                </div>
                <img src="/metaversus/meta-1.jpg" className="w-[300px] h-[400px] object-cover" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
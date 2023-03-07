'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Navbar } from '@/components'
import Link from 'next/link'
import styles from '@/styles'
import Scrollbar from 'smooth-scrollbar'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image'

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
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const cover1 = cover1Ref.current;
    const cover2 = cover2Ref.current;
    const cover3 = cover3Ref.current;
    const text1 = textRef1.current;
    const text2 = textRef2.current;

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

    gsap.fromTo(cover1, {
      scale: 1.2,
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

    gsap.fromTo(text1, {
      scale: 1,
    }, {
      scale: 1.1,
      ease: 'none',
      scrollTrigger: {
        trigger: text1,
        scroller: '#my-scrollbar',
        scrub: 1,
      },
    });

    gsap.fromTo(text2, {
      y: '-200%',
    }, {
      y: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: text2,
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
      <div>
        <div id="my-scrollbar">
          <Navbar textColor='ivory' logoColor='ivory'/>
          <div className='w-screen h-[1900px] relative overflow-hidden'>
            <Image ref={cover1Ref} src="/hoobank/cover.jpg" alt='hoobank cover' layout='fill' objectFit='cover' quality={100} />
            <div className='w-full h-full absolute top-0 bg-black opacity-25'></div>
          </div>

          <div className='w-screen h-[1900px] absolute top-0 flex items-center'>
            <div className={`${styles.innerWidth} mx-auto`}>
              <h2 className={`${styles.heroHeading2} text-ivory w-1/2`}>Hoobank</h2>
              <div className='pt-5 flex justify-between items-center'>
                <div className='flex flex-1 justify-start'>
                  <p className='font-light text-ivory'>Digital Banking Landing Page</p>
                </div>
                <div className='flex flex-1 justify-end'>
                  <Link href='https://hoobank-tau-puce.vercel.app/' target='_blank' rel='noopener noreferrer'>
                    <button className='visitWebsite bg-mineshaft px-6 py-4 rounded-full flex items-center gap-10 relative'>
                      <p className='text-ivory pr-10'>Visit Website</p>
                      <div className='circle flex justify-center items-center'>
                        <img src="/right-arrow.png" alt="arrow" className='opacity-0 transform-opacity object-contain' />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
              <div className='pt-32 w-[700px]'>
                <p className={`${styles.heroParagraph} text-ivory`}>
                  Hoobank is a digital banking company providing easy and convenient online transactions. It offers a range of features and tools for customers to manage their finances securely and effectively from any location, any time.
                </p>
              </div>
              <div className='pt-32 flex gap-20 '>
                <div className='flex flex-col gap-5'>
                  <p className='text-ivory font-medium uppercase'>role/services</p>
                  <div className='flex flex-col gap-2'>
                    <p className='text-[14px] text-ivory font-light'>Web Development</p>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <p className='text-ivory font-medium uppercase'>Industry</p>
                  <div className='flex flex-col gap-2'>
                    <p className='text-[14px] text-ivory font-light'>Fintech</p>
                    <p className='text-[14px] text-ivory font-light'>Digital Banking</p>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <p className='text-ivory font-medium uppercase'>Year</p>
                  <div className='flex flex-col gap-2'>
                    <p className='text-[14px] text-ivory font-light'>'2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.paddingY} ${styles.innerWidth} mx-auto flex flex-col items-center xl:gap-20 2xl:gap-32`}>
            <Image src="/hoobank/cover-3.jpg" alt='hoobank cover three' layout='responsive' width={1920} height={1080} objectFit='contain' quality={100} />
            <h2 ref={textRef1} className={`xl:text-[40px] xl:leading-[40px] 2xl:text-[60px] 2xl:leading-[60px] font-medium text-codgray text-center`}>Effortless banking, anytime, anywhere</h2>
            <Image src="/hoobank/page-1.png" alt='hoobank webpage one' layout='responsive' width={1920} height={1950} objectFit='contain' quality={100} />
          </div>

          <div className='w-screen h-screen overflow-hidden relative'>
            <Image ref={cover2Ref} src="/hoobank/mockup.png" alt='hoobank website mockup' layout='fill' objectFit='cover' quality={100} />
          </div>

          <div className={`${styles.paddingY} ${styles.innerWidth} mx-auto`}>
            <Image src="/hoobank/cover-2.jpg" alt="hoobank cover two" layout='responsive' width={1920} height={1080} objectFit='contain' />
          </div>

          <div ref={imageRef} className='w-screen h-screen flex items-center justify-center relative overflow-hidden'>
            <Image
              ref={cover3Ref}
              src="/bnkly_x/cover-1.jpg"
              alt="Bnkly X Cover"
              layout="fill"
              objectFit="cover"
              quality={100}
              blurDataURL="/bnkly_x/cover-1.jpg"
              placeholder="blur"
              className='blur-sm'
            />
            <Link href='/work/bnkly-x'>
              <div
                ref={cursorRef}
                className={`${styles.flexCenter} w-[150px] h-[150px] rounded-full bg-royalblue absolute top-0 left-0 opacity-0 z-10`}
              >
                <p ref={nextRef} className='text-ivory text-center font-light'>Next</p>
              </div>
            </Link>
            <div className={`${styles.innerWidth} mx-auto flex justify-center items-center absolute`}>
              <Link href='/work/bnkly-x' className="absolute w-full h-full flex justify-center items-center">
                <div ref={textRef2} className="absolute left-20">
                  <h3 className='text-ivory font-normal text-[40px] leading-[40px]'>Bnkly X</h3>
                  <p className='pt-5 text-ivory'>Bank landing page</p>
                </div>
                <div className='absolute w-[339px] h-[422px]'>
                  <img src="/bnkly_x/cover-1.jpg" className='w-[300px] h-[400px] object-cover' />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
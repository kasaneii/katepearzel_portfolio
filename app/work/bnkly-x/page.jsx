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
  const cover4Ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const cover1 = cover1Ref.current;
    const cover2 = cover2Ref.current;
    const cover3 = cover3Ref.current;
    const cover4 = cover4Ref.current;
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
      scale: 1.3,
      y: 0,
    }, {
      y: '25%',
      ease: 'none',
      scrollTrigger: {
        trigger: cover2,
        scroller: '#my-scrollbar',
        scrub: 1,
      },
    });

    gsap.fromTo(cover3, {
      scale: 1.3,
      y: 0,
    }, {
      y: '25%',
      ease: 'none',
      scrollTrigger: {
        trigger: cover3,
        scroller: '#my-scrollbar',
        scrub: 1,
      },
    });

    gsap.fromTo(cover4, {
      scale: 2,
    }, {
      scale: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: cover4,
        scroller: '#my-scrollbar',
        scrub: 1,
      },
    });

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
          <div className='w-screen h-[1900px] relative overflow-hidden'>
            <img ref={cover1Ref} src="/bnkly_x/cover-1-v2.jpg" className='w-full h-full object-cover' />
            {/* <Image ref={cover1Ref} src="/bnkly_x/cover-1.jpg" alt='bnkly x cover' layout='fill' objectFit='cover' quality={100} /> */}
          </div>

          <div className='w-screen h-[1900px] absolute top-0 flex items-center'>
            <div className={`${styles.innerWidth} mx-auto`}>
              <h2 className={`${styles.heroHeading2} text-ivory w-1/2`}>Bnkly X</h2>
              <div className='pt-5 flex justify-between items-center'>
                <div className='flex flex-1 justify-start'>
                  <p className='font-light text-ivory'>Banking Website</p>
                </div>
                <div className='flex flex-1 justify-end'>
                  <Link href='https://bnkly-x.vercel.app/' target='_blank' rel='noopener noreferrer'>
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
                  Bnkly X is a digital bank that offers innovative financial services, providing customers with a secure and easy-to-use platform for managing their finances. From mobile banking to budgeting advice, Bnkly X has everything needed for convenient and efficient financial management.
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

          <div className={`${styles.paddingY} ${styles.innerWidth} mx-auto flex justify-center items-center`}>
            <Image src="/bnkly_x/mockup.jpg" alt='bnkly x website mockup' layout='responsive' width={1920} height={1746} objectFit='contain' quality={100} />
          </div>

          <div className='w-screen h-screen overflow-hidden relative'>
            <img ref={cover2Ref} src="/bnkly_x/cover-5-v2.jpg" className='w-full h-full object-cover' />
            {/* <Image ref={cover2Ref} src="/bnkly_x/cover-5-v2.jpg" alt='bnkly x cover five' layout='fill' objectFit='cover' quality={100} /> */}
          </div>

          <div className='bg-gallery'>
            <div className={`${styles.paddingY} ${styles.innerWidth} mx-auto flex flex-col gap-48`}>
              <div className='w-[1280] h-[720px] relative'>
                <Image src="/bnkly_x/page-1-v2.jpg" alt='bnkly x webpage one' layout='fill' objectFit='contain' quality={100} />
              </div>
              <div className="w-[1280] h-[720px] relative">
                <Image src="/bnkly_x/page-3-v2.jpg" alt='bnkly x webpage three ' layout='fill' objectFit='contain' quality={100} />
              </div>
            </div>
          </div>

          <div className='w-screen h-[1500px] flex justify-center items-center relative overflow-hidden'>
            <img ref={cover3Ref} src="/bnkly_x/cover-6-v2.jpg" className='w-full h-full object-cover' />
            {/* <Image ref={cover3Ref} src="/bnkly_x/cover-6-v2.jpg" alt="bnkly x cover six" layout='fill' objectFit='cover' quality={100} /> */}
            <div className='w-full h-full absolute flex justify-center items-center'>
              <div className='w-[1061px] h-[691px] relative'>
                <img src="/bnkly_x/page-2-v2.jpg" className='w-full h-full object-contain' />
                {/* <Image src="/bnkly_x/page-2.png" alt='bnkly x webpage two' layout='fill' objectFit='contain' quality={100} /> */}
              </div>
            </div>
          </div>

          <div className={`${styles.paddingY} ${styles.innerWidth} mx-auto `}>
            <Image src="/bnkly_x/cover-4.jpg" alt='bnkly x cover four' layout='responsive' width={1920} height={1080} objectFit='contain' quality={100} />
          </div>

          <div ref={imageRef} className='w-screen h-screen flex items-center justify-center relative overflow-hidden'>
            <img ref={cover4Ref} src="/adam_johnson/cover-v4.jpg" className='w-full h-full object-cover blur-sm object-top' />
            {/* <Image
              ref={cover4Ref}
              src="/adam_johnson/cover.jpg"
              alt="Adam Johnson Cover"
              layout="fill"
              objectFit="cover"
              quality={100}
              blurDataURL="/adam_johnson/cover.jpg"
              placeholder="blur"
              className='blur-sm'
            /> */}
            <Link href='/work/adam-johnson'>
              <div
                ref={cursorRef}
                className={`${styles.flexCenter} w-[150px] h-[150px] rounded-full bg-royalblue absolute top-0 left-0 opacity-0 z-10`}
              >
                <p ref={nextRef} className='text-ivory text-center font-light'>Next</p>
              </div>
            </Link>
            <div className={`${styles.innerWidth} mx-auto flex justify-center items-center absolute`}>
              <Link href='/work/adam-johnson' className="absolute w-full h-full flex justify-center items-center">
                <div ref={textRef} className="absolute left-20">
                  <h3 className='text-ivory font-normal text-[40px] leading-[40px]'>Adam Johnson</h3>
                  <p className='pt-5 text-ivory'>Photography portfolio</p>
                </div>
                <img src="/adam_johnson/cover-2-v2.jpg" className='w-[300px] h-[400px] object-cover' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
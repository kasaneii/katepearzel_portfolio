'use client'

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link'
import styles from '@/styles'

const ImageContainer = ({ imageUrl, bgColor }) => {
  const imageRef = useRef(null);
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const hoverImg = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    const cursor = cursorRef.current;
    const imgHover = hoverImg.current;

    const handleMouseEnter = (e) => {
      setIsHovering(true);
      gsap.fromTo(imgHover, {
        scale: 1,
      },{
        scale: 1.05,
        duration: 0.9,
        ease: 'Power2.easeOut',
      });
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
      gsap.fromTo(imgHover, {
        scale: 1.05,
      },{
        scale: 1,
        duration: 0.9,
        ease: 'Power2.easeOut',
      });
      gsap.fromTo(cursor, {
        scale: 1,
      },{
        scale: 0,
        duration: 0.5,
      });
    };
    
  const bounds = (el) => el.getBoundingClientRect();
  const magnetStrength = 0.5;

  textRef.current.addEventListener('mousemove', (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      x: (e.clientX - bounds(e.target).left - bounds(e.target).width / 2) * magnetStrength,
      y: (e.clientY - bounds(e.target).top - bounds(e.target).height / 2) * magnetStrength,
      ease: 'power2.out'
    });
  })

  textRef.current.addEventListener('mouseleave', (e) => {
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

  return (
    <div ref={imageRef} className={`xl:w-[600px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[600px] ${bgColor} flex justify-center items-center relative`}>
      <img ref={hoverImg} src={imageUrl} className='xl:w-[400px] 2xl:w-[500px] h-auto object-contain drop-shadow-lg' />
      <div
        ref={cursorRef}
        className={`${styles.flexCenter} w-[150px] h-[150px] rounded-full bg-royalblue absolute top-0 left-0 opacity-0`}
      >
        <p ref={textRef} className='text-ivory text-center font-light'>Visit <br/> Website</p>
      </div>
    </div>
  )
}

const Project = () => {
  return (
    <section className={`${styles.yPaddings}`}>
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className='flex flex-col gap-20'>
          <div className='flex justify-between border-b-2 border-opacity-50 border-mineshaft pb-20'>
            <div className='flex flex-col justify-center gap-10 text-codgray'>
              <div>
                <h2 className='xl:text-[40px] 2xl:text-[56px]'>Pink Parlour</h2>
                <h3 className='2xl:text-[20px]'>Beauty Service Marketing Website</h3>
                <h3 className='2xl:text-[20px]'>2024</h3>
              </div>
              <div className='xl:w-[400px] 2xl:w-[500px] box-shadow'>
                <img src="/pinkparlour.png" alt="" className='w-full h-full object-cover' />
              </div>
            </div>
            <Link href='https://pinkparlour.asia/'>
              <ImageContainer imageUrl='/projects/pinkparlour-pages.png' bgColor='bg-[#D8AD8B]' />
            </Link>
          </div>
          <div className='flex justify-between border-b-2 border-opacity-50 border-mineshaft pb-20'>
            <div className='flex flex-col justify-center gap-10 text-codgray'>
              <div>
                <h2 className='xl:text-[40px] 2xl:text-[56px]'>Oh!Jobs.ph</h2>
                <h3 className='2xl:text-[20px]'>Job Listing Website</h3>
                <h3 className='2xl:text-[20px]'>2024</h3>
              </div>
              <div className='xl:w-[400px] 2xl:w-[500px] box-shadow'>
                <img src="/ohjobsph.png" alt="" className='w-full h-full object-cover' />
              </div>
            </div>
            <Link href='https://ohjobs.ph/'>
              <ImageContainer imageUrl='/projects/ohjobsph-pages.png' bgColor='bg-[#24C583]' />
            </Link>
          </div>
          <div className='flex justify-between border-b-2 border-opacity-50 border-mineshaft pb-20'>
            <div className='flex flex-col justify-center gap-10 text-codgray'>
              <div>
                <h2 className='xl:text-[40px] 2xl:text-[56px]'>IEMOP</h2>
                <h3 className='2xl:text-[20px]'>Corporate and Marketing Website</h3>
                <h3 className='2xl:text-[20px]'>2024</h3>
              </div>
              <div className='xl:w-[400px] 2xl:w-[500px] box-shadow'>
                <img src="/iemop.png" alt="" className='w-full h-full object-cover' />
              </div>
            </div>
            <Link href='https://www.iemop.ph/'>
              <ImageContainer imageUrl='/projects/iemop-pages.png' bgColor='bg-[#2C6294]' />
            </Link>
          </div>
          <div className='flex justify-between border-b-2 border-opacity-50 border-mineshaft pb-20'>
            <div className='flex flex-col justify-center gap-10 text-codgray'>
              <div>
                <h2 className='xl:text-[40px] 2xl:text-[56px]'>Maxsupport</h2>
                <h3 className='2xl:text-[20px]'>Agency and Marketing Landing Page</h3>
                <h3 className='2xl:text-[20px]'>2023</h3>
              </div>
              <div className='xl:w-[400px] 2xl:w-[500px] box-shadow'>
                <img src="/maxsupport.png" alt="" className='w-full h-full object-cover' />
              </div>
            </div>
            <Link href='https://maxsupport.com.ph/'>
              <ImageContainer imageUrl='/projects/maxsupport-pages.png' bgColor='bg-[#C0051C]' />
            </Link>
          </div>
          <div className='flex justify-between border-b-2 border-opacity-50 border-mineshaft pb-20'>
            <div className='flex flex-col justify-center gap-10 text-codgray'>
              <div>
                <h2 className='xl:text-[40px] 2xl:text-[56px]'>Adam Johnson</h2>
                <h3 className='2xl:text-[20px]'>Creative Photography Portfolio</h3>
                <h3 className='2xl:text-[20px]'>2023</h3>
              </div>
              <div className='xl:w-[400px] 2xl:w-[500px] box-shadow'>
                <img src="/adam-johnson.png" alt="" className='w-full h-full object-cover' />
              </div>
            </div>
            <Link href='https://adamjohnson.vercel.app/'>
              <ImageContainer imageUrl='/projects/adam-johnson-pages.png' bgColor='bg-[#5E7787]' />
            </Link>
          </div>
          <div className='flex justify-between border-b-2 border-opacity-50 border-mineshaft pb-20'>
            <Link href='https://metaversus-olive.vercel.app/'>
              <ImageContainer imageUrl='/projects/metaversus-pages.png' bgColor='bg-[#D4ABF2]' />
            </Link>
            <div className='flex flex-col justify-center gap-10 text-codgray'>
              <div className='text-right'>
                <h2 className='xl:text-[40px] 2xl:text-[56px]'>Metaversus</h2>
                <h3 className='2xl:text-[20px]'>Metaverse Landing Page</h3>
                <h3 className='2xl:text-[20px]'>2023</h3>
              </div>
              <div className='xl:w-[400px] 2xl:w-[500px] box-shadow'>
                <img src="/metaversus.png" alt="" className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
          <div className='flex justify-between border-b-2 border-opacity-50 border-mineshaft pb-20'>
            <div className='flex flex-col justify-center gap-10 text-codgray'>
              <div>
                <h2 className='xl:text-[40px] 2xl:text-[56px]'>Architecte</h2>
                <h3 className='2xl:text-[20px]'>Architecture Landing Page</h3>
                <h3 className='2xl:text-[20px]'>2023</h3>
              </div>
              <div className='xl:w-[400px] 2xl:w-[500px] box-shadow'>
                <img src="/architecte.png" alt="" className='w-full h-full object-cover' />
              </div>
            </div>
            <Link href='https://architecte-liard.vercel.app/'>
              <ImageContainer imageUrl='/projects/architecte-pages.png' bgColor='bg-[#f5f5dc]' />
            </Link>
          </div>
          <div className='flex justify-between border-b-2 border-opacity-50 border-mineshaft pb-20'>
            <Link href='https://musecollective.vercel.app/'>
              <ImageContainer imageUrl='/projects/the-muse-collective-pages.png' bgColor='bg-[#e97451]' />
            </Link>
            <div className='flex flex-col justify-center gap-10 text-codgray'>
              <div className='text-right'>
                <h2 className='xl:text-[40px] 2xl:text-[56px]'>The Muse <br/> Collective</h2>
                <h3 className='2xl:text-[20px]'>Creative Agency Landing Page</h3>
                <h3 className='2xl:text-[20px]'>2023</h3>
              </div>
              <div className='xl:w-[400px] 2xl:w-[500px] box-shadow'>
                <img src="/the-muse-collective.png" alt="" className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
          {/* <div className='flex justify-between border-b-2 border-opacity-50 border-mineshaft pb-20'>
            <div className='flex flex-col justify-center gap-10 text-codgray'>
              <div>
                <h2 className='xl:text-[40px] 2xl:text-[56px]'>Tokyo NFT</h2>
                <h3 className='2xl:text-[20px]'>NFT Landing Page</h3>
                <h3 className='2xl:text-[20px]'>2022</h3>
              </div>
              <div className='xl:w-[400px] 2xl:w-[500px] box-shadow'>
                <img src="/tokyo-nft.png" alt="" className='w-full h-full object-cover' />
              </div>
            </div>
            <Link href='/work/tokyo-nft'>
              <ImageContainer imageUrl='/projects/tokyo-nft-pages.png' bgColor='bg-[#EEBFC8]' />
            </Link>
          </div> */}
          <div className='flex justify-between border-b-2 border-opacity-50 border-mineshaft pb-20'>
            <Link href='https://hoobank-tau-puce.vercel.app/'>
              <ImageContainer imageUrl='/projects/hoobank-pages.png' bgColor='bg-[#C3E6F4]' />
            </Link>
            <div className='flex flex-col justify-center gap-10 text-codgray'>
              <div className='text-right'>
                <h2 className='xl:text-[40px] 2xl:text-[56px]'>Hoobank</h2>
                <h3 className='2xl:text-[20px]'>Digital Banking Landing Page</h3>
                <h3 className='2xl:text-[20px]'>2022</h3>
              </div>
              <div className='xl:w-[400px] 2xl:w-[500px] box-shadow'>
                <img src="/hoobank.png" alt="" className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
          <div className='flex justify-between border-b-2 border-opacity-50 border-mineshaft pb-20'>
            <div className='flex flex-col justify-center gap-10 text-codgray'>
              <div>
                <h2 className='xl:text-[40px] 2xl:text-[56px]'>Bnkly X</h2>
                <h3 className='2xl:text-[20px]'>Bank Landing Page</h3>
                <h3 className='2xl:text-[20px]'>2022</h3>
              </div>
              <div className='xl:w-[400px] 2xl:w-[500px] box-shadow'>
                <img src="/bnkly-x.png" alt="" className='w-full h-full object-cover' />
              </div>
            </div>
            <Link href='https://bnkly-x.vercel.app/'>
              <ImageContainer imageUrl='/projects/bnkly-x-pages.png' bgColor='bg-[#f5deb3]' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
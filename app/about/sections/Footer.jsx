'use client'

import React from 'react'
import Link from 'next/link'
import { footerLinks } from '@/constants'
import styles from '@/styles'
import { gsap } from 'gsap'

const Footer = () => {
  const bounds = (el) => el.getBoundingClientRect();
  const magnetStrength = 0.3;

  const handleMouse = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      x: (e.clientX - bounds(e.target).left - bounds(e.target).width / 2) * magnetStrength,
      y: (e.clientY - bounds(e.target).top - bounds(e.target).height / 2) * magnetStrength,
      ease: 'power2.out'
    });
  
    gsap.to(e.target.querySelector('.underline'), {
      duration: 0.3,
      scale: 1,
      ease: 'power2.out'
    });
  };
  
  const handleMouseLeave = (e) => {
    gsap.to(e.target, { duration: 0.3, x: 0, y: 0, ease: 'power2.out' });
    
    gsap.to(e.target.querySelector('.underline'), {
      duration: 0.3,
      scale: 0,
      ease: 'power2.out'
    });
  };

  return (
    <footer className={`${styles.xPaddings} py-8 w-full`}>
      <div className='text-codgray font-light flex justify-between'>
        <div className={`${styles.flexStart}`}>
          <p className='text-[14px]'>©2023 Design and Coded with ❤️</p>
        </div>
        <div className={`${styles.flexEnd} gap-10`}>
          {footerLinks.map((link) => (
            <Link target='_blank' key={link.id} href={link.url}>
              <p className='text-[14px] links pb-5' onMouseEnter={handleMouse} onMouseLeave={handleMouseLeave}>
                {link.link}
                <span className='underline'></span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
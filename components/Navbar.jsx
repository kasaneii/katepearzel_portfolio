'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles'
import { navLinks } from '../constants'
import { gsap } from 'gsap'

const Navbar = ({ textColor, logoColor }) => {
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
    <nav className={`${styles.xPaddings} py-8 bg-transparent absolute top-0 z-20 w-screen`}>
      <div className='hidden sm:flex items-center justify-between'>
        <Link href='/'>
          <button className="contact-button">
            <div className="flex gap-2 items-center cursor-pointer">
              <p className={`text-${textColor} font-normal`}>Kate Pearzel</p>
              <img src={`/smile-${logoColor}.png`} className="w-[15px] h-[15px] object-contain" />
            </div>
          </button>
        </Link>
        <ul className='list-none flex justify-end items-center gap-12 flex-1'>
          {navLinks.map((nav) => (
            <li key={nav.id} className={`font-normal text-${textColor} cursor-pointer`}>
              <Link href={nav.url}>
                <p className='navLink pb-5' onMouseEnter={handleMouse} onMouseLeave={handleMouseLeave}>
                  {nav.link}
                  <span className='underline'></span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
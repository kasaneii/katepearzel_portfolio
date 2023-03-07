'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles'
import { navLinks } from '../constants'
import { gsap } from 'gsap'

const Navbar = ({ textColor, logoColor }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [buttonLabel, setButtonLabel] = useState('Menu')

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen)
  }

  if(isModalOpen) {
    document.body.classList.add('modal-open')
  } else {
    document.body.classList.remove('modal-open')
  }

  useEffect(() => {
    if(isModalOpen) {
      setButtonLabel('Close')
    } else {
      setButtonLabel('Menu')
    }
  }, [isModalOpen])

  const handleModalClose = () => {
    setModalOpen(false)
  }

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
          <div className="flex gap-2 items-center">
            <p className={`text-${textColor} font-normal cursor-pointer`}>Kate Pearzel</p>
            <img src={`/smile-${logoColor}.png`} className="w-[15px] h-[15px] object-contain" />
          </div>
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

      <button className='sm:hidden absolute right-10 cursor-pointer' onClick={handleModalToggle}>
        <p className='text-codgray'>{buttonLabel}</p>
      </button>

      {isModalOpen && (
        <div className='h-screen w-[35%] bg-codgray fixed z-50 top-0 right-0 py-8 px-20 flex'>
          <div className='flex flex-col w-full'>
            <div className='flex justify-between items-center'>
              <p className='font-light text-ivory opacity-50'>Navigation</p>
              <button className='cursor-pointer w-[100px] h-[100px] bg-codgray p-5 rounded-full relative' onClick={handleModalToggle}>
                <div className='absolute top-0 left-0 bg-royalblue w-[100px] h-[100px] rounded-full flex justify-center items-center'>
                  <p className='text-ivory'>{buttonLabel}</p>
                </div>
              </button>
            </div>
            <div className='flex flex-1 items-center pb-10'>
              <ul className='list-none flex flex-col gap-5'>
                <li className='font-normal text-ivory cursor-pointer'>
                  <Link href='/' className='text-[60px]' onClick={handleModalClose}>
                    Home
                  </Link>
                </li>
                <li className='font-normal text-ivory cursor-pointer'>
                  <Link href='/work' className='text-[60px]' onClick={handleModalClose}>
                    Work
                  </Link>
                </li>
                <li className='font-normal text-ivory cursor-pointer'>
                  <Link href='/about' className='text-[60px]' onClick={handleModalClose}>
                    About
                  </Link>
                </li>
                <li className='font-normal text-ivory cursor-pointer'>
                  <Link href='mailto:pearzelkate1300@gmail.com' className='text-[60px]' onClick={handleModalClose}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <ul className='list-none flex gap-10'>
              <li className='font-light text-ivory cursor-pointer'>
                <Link href='#'>LinkedIn</Link>
              </li>
              <li className='font-light text-ivory cursor-pointer'>
                <Link href='#'>GitHub</Link>
              </li>
              <li className='font-light text-ivory cursor-pointer'>
                <Link href='#'>Email</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
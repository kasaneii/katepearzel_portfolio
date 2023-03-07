'use client'

import React from 'react'
import styles from '@/styles'

const Header = () => {
  return (
    <section className={`${styles.yPaddings} px-32 flex items-center h-[650px] relative overflow-hidden`}>
      <div className={`${styles.innerWidth} z-10 mx-auto flex items-center`}>
        <h1 className={`${styles.heading}`}>Crafting Online Experiences That Leave a Mark</h1>
      </div>
      <div className="absolute top-24 -right-20 w-[400px] h-[400px] rounded-full rotate-[15deg] royal-blue-gradient"/>
      <div className="absolute top-40 right-20 w-[400px] h-[400px] rounded-full rotate-[15deg] lime-gradient"/>
    </section>
  )
}

export default Header
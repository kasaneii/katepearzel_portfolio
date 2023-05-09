'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { designTools, devTools, skills, experiences } from '@/constants'
import styles from '@/styles'
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
    let scrollbar = Scrollbar.init(document.querySelector('#my-scrollbar'));

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
        <div className="w-screen main-content bg-ivory" ref={contentRef} style={{ opacity: 0 }}>
          <section id="my-scrollbar" className={`py-20 drop-shadow-xl`}>
            <div className={`${styles.innerWidth} mx-auto`}>
              <div className='bg-gallery w-full p-20'>
                <div className='flex flex-1 justify-end'>
                  <div className='flex gap-5 items-center'>
                    <Link href='https://www.linkedin.com/in/kate-pearzel-cayabyab-aa7609177/' target='_blank'>
                      <img src="/assets/linkedin.png" alt="linkedin-logo" className='w-[20px] h-[20px] object-contain' />
                    </Link>
                    <Link href='/KatePearzel-Resume-updated.pdf' target='_blank'>
                      <div className='flex gap-2 items-center cursor-pointer'>
                        <img src="/assets/download.png" alt="download-icon" className='w-[20px] h-[20px] object-contain' />
                        <p className={`${styles.resumeParagraph}`}>Download</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className='pt-10 w-full flex gap-20'>
                  <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-5'>
                      <Link href='https://katepearzel.vercel.app/'>
                        <div className="flex items-center gap-2 cursor-pointer">
                          <p className='text-royalblue font-medium'>Kate Pearzel</p>
                          <img src="/smile-royalblue.png" className="w-[15px] h-[15px] object-contain" />
                        </div>
                      </Link>
                      <div className='flex gap-2 items-center'>
                        <img src="/assets/location.png" alt="location-icon" className="w-[20px] h-[20px] object-contain" />
                        <p className={`${styles.resumeParagraph}`}>Dagupan City, Philippines</p>
                      </div>
                      <Link href='mailto:pearzelkate1300@gmail.com'>
                        <div className='flex gap-2 items-center'>
                          <img src="/assets/email.png" alt="email-icon" className="w-[20px] h-[20px] object-contain" />
                          <p className={`${styles.resumeParagraph}`}>pearzelkate1300@gmail.com</p>
                        </div>
                      </Link>
                      <Link href='tel:+639505051127'>
                        <div className='flex gap-2 items-center'>
                          <img src="/assets/phone.png" alt="phone-icon" className="w-[20px] h-[20px] object-contain" />
                          <p className={`${styles.resumeParagraph}`}>+63 950 505 1127</p>
                        </div>
                      </Link>
                    </div>

                    <div className='flex flex-col gap-2'>
                      <p className='text-[20px] font-medium text-royalblue'>Core Technologies:</p>
                      {designTools.map((tool) => (
                        <div key={tool.id} className='flex gap-2 items-center'>
                          <div className='w-[7px] h-[7px] bg-mineshaft'/>
                          <p className={`${styles.resumeParagraph}`}>{tool.title}</p>
                        </div>
                      ))}
                      {devTools.map((tool) => (
                        <div key={tool.id} className='flex gap-2 items-center'>
                          <div className='w-[7px] h-[7px] bg-mineshaft'/>
                          <p className={`${styles.resumeParagraph}`}>{tool.title}</p>
                        </div>
                      ))}
                    </div>

                    <div className='flex flex-col gap-2'>
                      <p className='text-[20px] font-medium text-royalblue'>Skills:</p>
                      {skills.map((skill) => (
                        <div key={skill.id} className='flex gap-2 items-center'>
                          <div className='w-[7px] h-[7px] bg-mineshaft'/>
                          <p className={`${styles.resumeParagraph}`}>{skill.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex flex-col gap-20'>
                    <div className='flex flex-col gap-10'>
                      <div className='flex flex-col gap-2'>
                        <h3 className='text-royalblue font-medium text-[40px]'>Kate Pearzel <br/> Cayabyab</h3>
                        <p className='text-[20px] text-mineshaft'>Web Designer and Front-end Developer</p>
                      </div>
                      <p className='leading-[36px] font-light w-3/4'>I'm a passionate and highly skilled web designer and front-end developer, with expertise in UI/UX design, front-end frameworks, and web performance optimization. I excel at crafting beautiful and engaging digital experiences, and thrive on finding creative solutions to complex challenges.</p>
                    </div>

                    <div className='flex flex-col gap-5'>
                      <p className='text-[28px] font-medium text-royalblue'>Work Experience</p>
                      {experiences.map((experience, index) => (
                        <div key={index} className='flex flex-col gap-5'>
                          <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-2'>
                              <p className='text-[20px] text-royalblue font-medium'>{experience.company}</p>
                              <p className='text-mineshaft'>{experience.position}</p>
                            </div>
                            <p className='text-mineshaft'>{experience.date}</p>
                          </div>
                          <div className='flex flex-col gap-2'>
                            <p className={`${styles.resumeParagraph} font-light`}>{experience.description}</p>
                            <ul className='list-none'>
                              {experience.tasks.map((task, index) => (
                                <div key={index} className='flex gap-2 items-center'>
                                  <div className='w-[7px] h-[7px] bg-mineshaft'/>
                                  <li className={`${styles.resumeParagraph} font-light`}>
                                    {task.task}
                                  </li>
                                </div>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default page
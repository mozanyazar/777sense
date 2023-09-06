'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { FormEvent, useEffect, useState } from 'react'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation'
import { RxHamburgerMenu } from 'react-icons/rx'

// images
import home from '../../../public/images/home.png'
import logo from '../../../public/images/Logo.png'
import foundation from '../../../public/images/Foundation.png'
import analytics from '../../../public/images/analytics.png'
import feed from '../../../public/images/feed.png'

analytics
export default function Header() {
   const pathname = usePathname()
   const [isActive, setIsActive] = useState(false)

   function navbarToggle(event: FormEvent) {
      event.preventDefault()
      setIsActive(!isActive)
   }

   return (
      <header
         className={`${styles.header} max-w-[1440px] w-[95%] mx-auto  h-10 max-[1440px]:max-w-[1134px] flex items-center `}
      >
         <div className={`hidden max-[768px]:flex justify-between w-full items-center`}>
            <Link
               className={``}
               href='/'
            >
               <Image
                  src={logo}
                  alt='logo'
                  width={110}
                  height={110}
               />
            </Link>
            <button
               onClick={(e) => navbarToggle(e)}
               className='text-white rounded-lg w-10 h-10 flex justify-center items-center bg-slate-800 transition ease-in duration-100 hover:bg-slate-500 hover:text-white'
            >
               <RxHamburgerMenu size={25} />
            </button>
         </div>
         <ul className={`${isActive && `${styles.active}`} flex items-center justify-between w-full`}>
            <li className={`${pathname === '/' && `${styles.active}`}`}>
               <Link
                  className={`flex items-center gap-1 justify-center text-white font-medium text-sm min-w-[140px]`}
                  href='/'
               >
                  <Image
                     src={home}
                     alt='home'
                     width={24}
                     height={24}
                  />
                  Home
               </Link>
            </li>

            <li className={`${pathname === '/foundation' && `${styles.active}`}`}>
               <Link
                  className={`flex items-center gap-1 justify-center text-white font-medium text-sm min-w-[140px]   `}
                  href='/#'
               >
                  <Image
                     src={foundation}
                     alt='foundation'
                     width={24}
                     height={24}
                  />
                  Foundation
                  <small className='text-[#68F899] text-[8px] relative top-[-5px] uppercase'>soon</small>
               </Link>
            </li>

            <li>
               <Link
                  className={`flex items-center gap-1 justify-center text-white font-medium text-sm min-w-[140px]   `}
                  href='/'
               >
                  <Image
                     src={logo}
                     alt='logo'
                     width={92}
                     height={92}
                  />
               </Link>
            </li>

            <li className={`${pathname === '/analytics' && `${styles.active}`}`}>
               <Link
                  className={`flex items-center gap-1 justify-center text-white font-medium text-sm min-w-[140px]   `}
                  href='/#'
               >
                  <Image
                     src={analytics}
                     alt='Analytics'
                     width={24}
                     height={24}
                  />
                  Analytics
                  <small className='text-[#68F899] text-[8px] relative top-[-5px] uppercase'>soon</small>
               </Link>
            </li>

            <li className={`${pathname === '/feed' && `${styles.active}`}`}>
               <Link
                  className={`flex items-center gap-1 justify-center text-white font-medium text-sm min-w-[140px]   `}
                  href='/#'
               >
                  <Image
                     src={feed}
                     alt='feed'
                     width={24}
                     height={24}
                  />
                  Feed
               </Link>
            </li>
         </ul>
      </header>
   )
}

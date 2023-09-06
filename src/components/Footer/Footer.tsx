import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import logo from '../../../public/images/Logo.png'
import insta from '../../../public/images/Instagram.png'

export default function Footer() {
   return (
      <footer className='bg-[#1E1E1E]'>
         <div className='max-w-[1440px] w-[95%] mx-auto py-11 justify-between flex max-[1440px]:max-w-[1134px] max-[900px]:max-w-[768px] max-[950px]:flex-wrap max-[950px]:gap-12'>
            <div className='flex flex-col gap-5 max-[1440px]:w-[255px] max-[1150px]:w-max '>
               <Link href='/'>
                  <Image
                     width={120}
                     height={52}
                     src={logo}
                     alt='logo'
                     className='object-contain'
                  />
               </Link>
               <p className='text-[#FFFFFF] text-base font-normal mt-2'>777 Sense Labs © 2022</p>
               <p className='text-[#FFFFFF80] text-sm font-medium'>
                  Ste 1200,
                  <br /> 1309 Coffeen Avenue
                  <br /> Sheridan, US, 82801
               </p>
            </div>

            <div className='flex gap-[30px] max-[1100px]:gap-4'>
               <ul className='w-[160px] flex flex-col gap-5 max-[1150px]:w-max px-6 max-[450px]:px-1'>
                  <li>
                     <Link
                        className='text-[#FFFFFF80] text-xs'
                        href='#'
                     >
                        Contact Us
                     </Link>
                  </li>
                  <li>
                     <Link
                        className='text-[#FFFFFF80] text-xs'
                        href='#'
                     >
                        FAQ
                     </Link>
                  </li>
                  <li>
                     <Link
                        className='text-[#FFFFFF80] text-xs'
                        href='#'
                     >
                        Privacy Policy
                     </Link>
                  </li>
                  <li>
                     <Link
                        className='text-[#FFFFFF80] text-xs'
                        href='#'
                     >
                        Terms of Use
                     </Link>
                  </li>
                  <li>
                     <Link
                        className='text-[#FFFFFF80] text-xs'
                        href='#'
                     >
                        Cookie Policy
                     </Link>
                  </li>
               </ul>
               <ul className='w-[160px] flex flex-col gap-5 max-[1150px]:w-max px-6 max-[450px]:px-1'>
                  <li>
                     <Link
                        className='text-[#FFFFFF80] text-xs'
                        href='#'
                     >
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link
                        className='text-[#FFFFFF80] text-xs'
                        href='#'
                     >
                        Feed
                     </Link>
                  </li>
                  <li>
                     <Link
                        className='text-[#FFFFFF80] text-xs'
                        href='#'
                     >
                        Foundation
                     </Link>
                  </li>
                  <li>
                     <Link
                        className='text-[#FFFFFF80] text-xs'
                        href='#'
                     >
                        Analytics
                     </Link>
                  </li>
               </ul>
               <ul className='w-[160px] flex flex-col gap-5 max-[1150px]:w-max px-6 max-[450px]:px-1'>
                  <li>
                     <Link
                        className='text-[#FFFFFF80] text-xs gap-1 flex items-center'
                        href='#'
                     >
                        <Image
                           src={insta}
                           width={20}
                           height={20}
                           alt='instagram'
                        />
                        <p className='mt-[-2px]'>Instagram</p>
                     </Link>
                  </li>
                  <li>
                     <Link
                        className='text-[#FFFFFF80] text-xs gap-1 flex items-center'
                        href='#'
                     >
                        <Image
                           src={insta}
                           width={20}
                           height={20}
                           alt='instagram'
                        />
                        <p className='mt-[-2px]'>Twitter</p>
                     </Link>
                  </li>{' '}
                  <li>
                     <Link
                        className='text-[#FFFFFF80] text-xs gap-1 flex items-center'
                        href='#'
                     >
                        <Image
                           src={insta}
                           width={20}
                           height={20}
                           alt='instagram'
                        />
                        <p className='mt-[-2px]'>Discord</p>
                     </Link>
                  </li>{' '}
                  <li>
                     <Link
                        className='text-[#FFFFFF80] text-xs gap-1 flex items-center'
                        href='#'
                     >
                        <Image
                           src={insta}
                           width={20}
                           height={20}
                           alt='instagram'
                        />
                        <p className='mt-[-2px]'>Medium</p>
                     </Link>
                  </li>
               </ul>
            </div>

            <div>
               <label
                  htmlFor='text'
                  className='relative'
               >
                  <input
                     placeholder='hello@buket.design'
                     className='flex-1 w-[285px] py-2 min-h-[50px] pl-3 placeholder:text-sm placeholder:text-[#fff] bg-transparent border-2 border-[#FFFFFF1A] rounded-md '
                     type='text'
                  />
                  <button className='absolute right-2 top-[-8px] text-sm font-bold bg-[#A27DF9] rounded-lg text-white flex items-center justify-center w-[105px] h-[40px] duration-100 ease transition-all hover:scale-[.9]'>
                     Subscribe
                  </button>
               </label>
            </div>
         </div>
      </footer>
   )
}

import { PrismaClient } from '@prisma/client'
import React from 'react'

import nftImage from '../../../public/images/image2.jpeg'
import avatar from '../../../public/images/Avatar.png'

import Image from 'next/image'

async function getData() {
   const db = new PrismaClient()

   const nft = await db.nft.findFirst({
      where: {
         title: {
            contains: 'great nft project',
            mode: 'insensitive',
         },
      },
      include: {
         creator: true,
      },
   })

   return nft
}

export default async function FirstSectionHome() {
   const data = await getData()

   return (
      <section className='max-w-[1440px] w-[95%] mx-auto flex flex-col gap-[30px] pt-[30px] pb-[60px] max-[1440px]:max-w-[1134px] max-[900px]:max-w-[768px]'>
         <h2 className=' font-semibold text-xl text-[#FFFFFF]'>Project</h2>
         <div className='flex gap-[30px] max-[900px]:flex-col'>
            <div className='w-[57%] h-[649px] p-8 bg-[#1E1E1E] rounded-lg flex items-center justify-center max-[1000px]:h-[550px] max-[900px]:w-full max-[550px]:h-[420px] max-[550px]:p-4 max-[450px]:h-[350px] '>
               <div className='relative w-full h-full'>
                  <Image
                     src={nftImage}
                     alt='nft'
                     fill
                     className='rounded-md'
                  />
               </div>
            </div>
            <div className='flex-1 flex flex-col gap-4 max-[1440px]:w-[451px] max-[900px]:w-full'>
               <h3 className='text-[#FFFFFF] capitalize text-5xl leading-[72px] max-[1070px]:text-4xl max-[1070px]:leading-[1.2]'>
                  {data?.title}
               </h3>
               <div className='flex justify-between items-center '>
                  <div className='w-full flex gap-4 items-center'>
                     <Image
                        src={avatar}
                        alt='nft'
                        width={48}
                        height={48}
                     />
                     <div className='flex flex-col gap-1'>
                        <span className=' text-xs text-[#444444] '>Creator</span>
                        <p className='text-white font-semibold capitalize text-sm'>{data?.creator.name}</p>
                     </div>
                     <button className='bg-[#A27DF9] rounded-lg text-white flex items-center justify-center w-[127px] h-[40px] ml-auto duration-100 ease transition-all hover:scale-[.9]'>
                        Mint
                     </button>
                  </div>
               </div>

               <article>
                  <p className='text-[#FFFFFF] text-sm leading-[24px] max-[1000px]:text-[12.5px]'>{data?.description}</p>
               </article>

               <div className=' flex flex-col bg-[#1E1E1E] gap-11 items-center justify-center py-11 rounded-[10px] max-[1440px]:h-[316px] max-[1440px]:mt-auto max-[1000px]:h-[246px] max-[100px]:gap-3'>
                  <div className='flex flex-col gap-4 items-center max-[1000px]:gap-2'>
                     <p className='text-[#A27DF9] text-[14px] font-medium'>Mint Price</p>
                     <h3 className='text-[#FFFFFF] uppercase text-5xl leading-[72px] max-[1000px]:text-4xl max-[1000px]:leading-[1.2]'>
                        {data?.price} ETH
                     </h3>
                     <p className='text-[#FFFFFF] text-[15px] font-semibold'>$3,102.76</p>
                  </div>
                  <div className='flex flex-col gap-4 items-center max-[1000px]:gap-2'>
                     <p className='text-[#A27DF9] text-[14px] font-medium'>Mint Starting in</p>
                     <div className='flex gap-16'>
                        <div className='flex flex-col items-center'>
                           <p className='text-[#FFFFFF] text-xl font-semibold'>19</p>
                           <p className='text-[#ffffffa6] text-xs font-medium'>hrs</p>
                        </div>
                        <div className='flex flex-col items-center'>
                           <p className='text-[#FFFFFF] text-xl font-semibold'>26</p>
                           <p className='text-[#ffffffa6] text-xs font-medium'>min</p>
                        </div>
                        <div className='flex flex-col items-center'>
                           <p className='text-[#FFFFFF] text-xl font-semibold'>48</p>
                           <p className='text-[#ffffffa6] text-xs font-medium'>sec</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

import Image from 'next/image'
import React from 'react'

import img from '../../../../public/images/image.png'
import eth from '../../../../public/images/Ethereum.png'

interface NFT {
   id: string
   title: string
   description: string
   creatorId: string
   price: number
   creator: {
      id: string
      name: string
   }
}

export default function Card({ id, title, description, creatorId, price, creator }: NFT) {
   return (
      <div className='w-[22.5%] p-5 box-border rounded-md shadow-md bg-[#1E1E1E] transition-all ease-linear duration-75 hover:scale-[1.05] max-[1440px]:w-[262px] max-[1440px]:h-[382px]  max-[1120px]:w-[240px] max-[1120px]:h-max max-[1000px]:w-[300px] max-[970px]:hover:scale-[.95] '>
         <Image
            src={img}
            width={300}
            height={300}
            className='max-[1440px]:w-full max-[1440px]:h-[221px]'
            alt={title}
         />
         <div className='flex flex-col gap-2 mt-5'>
            <p className='flex items-center capitalize gap-2 font-semibold text-xl text-white'>
               {title} <span className='font-medium text-[#A27DF9] text-xs'>3 in stock</span>
            </p>

            <p className='flex gap-2 text-sm font-medium text-[#ededed]'>
               Creator <span className='font-bold text-[#fffffff] pl-3'>{creator.name} </span>
            </p>
         </div>

         <div className='flex gap-3 items-center mt-[10px]'>
            <button className='bg-[#A27DF9] rounded-lg text-white flex items-center justify-center w-[113px] h-[40px] duration-100 ease transition-all hover:scale-[.9]'>
               Mint
            </button>
            <div className='flex gap-1 text-white items-center justify-center border-1 border p-1 rounded-md px-3 border-slate-500'>
               <p className='text-white text-sm'>{price}</p>
               <Image
                  src={eth}
                  width={16}
                  height={16}
                  alt='eth'
               />
            </div>
         </div>
      </div>
   )
}

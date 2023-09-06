import { PrismaClient } from '@prisma/client'
import React from 'react'
import Card from './Card'

async function getData() {
   const db = new PrismaClient()

   const nft = await db.nft.findMany({
      where: {
         title: {
            contains: 'The Big Mac',
            mode: 'insensitive',
         },
      },
      include: {
         creator: true,
      },
      take: 4,
   })

   return nft
}

export default async function SecondSectionHome() {
   const data = await getData()

   return (
      <section className='max-w-[1440px] w-[95%] mx-auto flex flex-col gap-[30px] pb-[60px] max-[1440px]:max-w-[1134px] max-[1000px]:max-w-[768px] '>
         <div className='flex items-center justify-center max-[450px]:flex-col max-[450px]:gap-2'>
            <h4 className='font-semibold text-[#ffffff] text-xl '>Creator’s Other Projects</h4>
            <button className='bg-[#2C2C2C] rounded-lg text-white flex items-center justify-center w-[128px] h-[40px] ml-auto duration-100 ease transition-all hover:scale-[.9] max-[450px]:ml-0'>
               Mint
            </button>
         </div>
         <div className='second-card-wrapper flex items-center justify-between gap-[30px] max-[1000px]:gap-x-10 max-[1000px]:flex-wrap max-[800px]:justify-center max-[800px]:gap-4 max-[648px]:max-h-[500px] max-[648px]:overflow-y-auto '>
            {data?.map((nft) => {
               return (
                  <Card
                     key={nft.id}
                     {...nft}
                  />
               )
            })}
         </div>
      </section>
   )
}

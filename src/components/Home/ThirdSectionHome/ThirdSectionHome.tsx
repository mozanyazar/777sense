import { PrismaClient } from '@prisma/client'
import Image from 'next/image'

import btn from '../../../../public/images/Filter.png'
import nftImg from '../../../../public/images/image.png'
import eth from '../../../../public/images/Ethereum.png'
import avatar from '../../../../public/images/Avatar.png'
import insta from '../../../../public/images/Instagram.png'
import twitter from '../../../../public/images/Twitter.png'

async function getData() {
   const db = new PrismaClient()

   const nft = await db.nft.findMany({
      where: {
         creatorId: '64f76482a41912ccee22de20',
         NOT: {
            title: 'The Big Mac',
         },
      },
      include: {
         creator: true,
      },
      take: 5,
   })

   return nft
}

export default async function ThirdSectionHome() {
   const data = await getData()

   return (
      <section className='bg-[#0F0F0F] '>
         <div className='max-w-[1440px] w-[95%] mx-auto flex  gap-[30px] pt-[30px] pb-[45px]  max-[1440px]:max-w-[1134px] max-[900px]:max-w-[768px] max-[1200px]:flex-col max-[1200px]:items-center'>
            <div className='w-[65%] min-w-[746px] flex gap-[30px] max-[1200px]:min-w-[650px] max-[1200px]:w-full max-[780px]:min-w-[100%] max-[780px]:flex-col max-[780px]:items-center'>
               <div className='w-1/2 flex flex-col gap-[30px] max-[780px]:min-w-[355px]'>
                  <h4 className='text-white text-xl font-semibold'>Look at Other Project</h4>
                  <div className='flex items-center gap-4 justify-between'>
                     <input
                        placeholder='Search...'
                        className='min-w-[299px] flex-1 py-2 min-h-[45px] pl-3 placeholder:text-sm placeholder:text-[#333] bg-transparent border-2 border-[#FFFFFF1A] rounded-md max-[1440px]:w-[299px]'
                        type='text'
                     />
                     <button>
                        <Image
                           src={btn}
                           alt='sort'
                           width={45}
                           height={45}
                        />
                     </button>
                  </div>
                  <div className='flex flex-col gap-[30px]'>
                     {data.slice(0, 3).map((el) => {
                        return (
                           <div
                              key={el.id}
                              className='w-full bg-[#1E1E1E] flex gap-4 py-[20.5px] px-5 border boder-1 border-[#FFFFFF1A] rounded-md'
                           >
                              <div>
                                 <Image
                                    src={nftImg}
                                    alt={el.title}
                                    width={126}
                                    height={126}
                                 />
                              </div>
                              <div className='flex flex-col justify-between '>
                                 <p className='text-[15px] font-semibold text-white'>{el.title}</p>
                                 <p className='flex gap-2 text-sm font-medium text-[#ededed6a] '>
                                    Creator <span className='font-bold text-[#fffffff] pl-3'>{el.creator.name} </span>
                                 </p>
                                 <div className='flex items-center gap-4 mt-auto'>
                                    <span className='font-medium text-[#A27DF9] text-xs'>3 in stock</span>
                                    <div className='flex gap-1 items-center justify-center border-1 border py-[2px] rounded-md px-3 border-slate-500 '>
                                       <p className='text-white text-sm'>{el.price}</p>
                                       <Image
                                          src={eth}
                                          width={16}
                                          height={16}
                                          alt='eth'
                                       />
                                    </div>
                                 </div>
                                 <button className='bg-[#A27DF9] mt-auto rounded-lg text-white flex items-center justify-center w-[113px] h-[40px] duration-100 ease transition-all hover:scale-[.9]'>
                                    Mint
                                 </button>
                              </div>
                           </div>
                        )
                     })}
                  </div>
               </div>

               <div className='w-1/2 flex flex-col gap-[30px] max-[780px]:min-w-[355px]'>
                  <div className=' w-full  p-5 bg-[#1E1E1E] mt-5 border boder-1 border-[#FFFFFF1A] rounded-md max-[1440px]:h-[478px]'>
                     <div>
                        <Image
                           src={nftImg}
                           width={318}
                           height={318}
                           alt='eth'
                           className='w-full h-[318px] object-contain max-[1440px]:h-[318px] max-[1440px]:w-[318px] max-[1200px]:w-full'
                        />
                     </div>
                     <div className='flex  relative items-center capitalize gap-2 font-semibold text-xl text-white mt-4'>
                        {data[3].title} <span className='font-medium text-[#A27DF9] text-xs'>18 in stock</span>
                        <div className='flex gap-1 items-center justify-center border-1 border py-[2px] rounded-md px-1 border-slate-500 absolute right-0'>
                           <p className='text-white text-sm'>{data[3].price}</p>
                           <Image
                              src={eth}
                              width={16}
                              height={16}
                              alt='eth'
                           />
                        </div>
                     </div>

                     <p className='flex gap-2 text-sm font-medium text-[#ededed6a] mt-1'>
                        Creator <span className='font-bold text-[#fffffff] pl-3 '>{data[3].creator.name} </span>
                     </p>
                     <button className='bg-[#A27DF9] mt-[10px] rounded-lg text-white flex items-center justify-center w-[113px] h-[40px] duration-100 ease transition-all hover:scale-[.9]'>
                        Mint
                     </button>
                  </div>

                  <div className='w-full bg-[#1E1E1E] flex gap-4 py-[20.5px] px-5 border boder-1 border-[#FFFFFF1A] rounded-md mt-auto'>
                     <div>
                        <Image
                           src={nftImg}
                           alt={data[4].title}
                           width={126}
                           height={126}
                        />
                     </div>
                     <div className='flex flex-col justify-between'>
                        <p className='text-[13px] font-semibold text-white'>{data[4].title}</p>
                        <p className='flex gap-2 text-sm font-medium text-[#ededed6a] '>
                           Creator <span className='font-bold text-[#fffffff] pl-3'>{data[4].creator.name} </span>
                        </p>
                        <div className='flex items-center gap-4 mt-auto'>
                           <span className='font-medium text-[#A27DF9] text-xs'>3 in stock</span>
                           <div className='flex gap-1 items-center justify-center border-1 border py-[2px] rounded-md px-3 border-slate-500 '>
                              <p className='text-white text-sm'>{data[4].price}</p>
                              <Image
                                 src={eth}
                                 width={16}
                                 height={16}
                                 alt='eth'
                              />
                           </div>
                        </div>
                        <button className='bg-[#A27DF9] mt-auto rounded-lg text-white flex items-center justify-center w-[113px] h-[40px] duration-100 ease transition-all hover:scale-[.9]'>
                           Mint
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className='flex-1 min-w-[358px] flex flex-col gap-[23px] max-[1200px]:min-w-[300px] max-[780px]:min-w-[350px]'>
               <h4 className='text-white text-xl font-semibold'>Look at Other Project</h4>
               <div className='w-full mt-auto  p-5 bg-[#1E1E1E] flex gap-4 py-[20.5px] border boder-1 border-[#FFFFFF1A] max-h-[88px] rounded-md'>
                  <div className='w-full flex gap-4 items-center'>
                     <Image
                        src={avatar}
                        alt='nft'
                        width={48}
                        height={48}
                     />
                     <div className='flex flex-col gap-1'>
                        <span className=' text-xs text-[#FFFFFF99] '>Creator</span>
                        <p className='text-white font-semibold capitalize text-sm'>
                           Eric Clapton <span className='font-medium text-[#A27DF9] text-xs ml-3'>3 Project</span>
                        </p>
                     </div>
                  </div>
                  <div className='flex gap-2 ml-auto flex-row items-center'>
                     <Image
                        src={insta}
                        alt='nft'
                        width={30}
                        height={30}
                     />
                     <Image
                        src={twitter}
                        alt='nft'
                        width={30}
                        height={30}
                     />
                  </div>
               </div>
               <div className='w-full p-5 bg-[#1E1E1E] flex gap-4 py-[20.5px] border boder-1 border-[#FFFFFF1A] max-h-[88px] rounded-md'>
                  <div className='w-full flex gap-4 items-center'>
                     <Image
                        src={avatar}
                        alt='nft'
                        width={48}
                        height={48}
                     />
                     <div className='flex flex-col gap-1'>
                        <span className=' text-xs text-[#FFFFFF99] '>Creator</span>
                        <p className='text-white font-semibold capitalize text-sm'>
                           Eric Clapton <span className='font-medium text-[#A27DF9] text-xs ml-3'>3 Project</span>
                        </p>
                     </div>
                  </div>
                  <div className='flex gap-2 ml-auto flex-row items-center'>
                     <Image
                        src={insta}
                        alt='nft'
                        width={30}
                        height={30}
                     />
                     <Image
                        src={twitter}
                        alt='nft'
                        width={30}
                        height={30}
                     />
                  </div>
               </div>
               <div className='w-full p-5 bg-[#1E1E1E] flex gap-4 py-[20.5px] border boder-1 border-[#FFFFFF1A] max-h-[88px] rounded-md'>
                  <div className='w-full flex gap-4 items-center'>
                     <Image
                        src={avatar}
                        alt='nft'
                        width={48}
                        height={48}
                     />
                     <div className='flex flex-col gap-1'>
                        <span className=' text-xs text-[#FFFFFF99] '>Creator</span>
                        <p className='text-white font-semibold capitalize text-sm'>
                           Eric Clapton <span className='font-medium text-[#A27DF9] text-xs ml-3'>3 Project</span>
                        </p>
                     </div>
                  </div>
                  <div className='flex gap-2 ml-auto flex-row items-center'>
                     <Image
                        src={insta}
                        alt='nft'
                        width={30}
                        height={30}
                     />
                     <Image
                        src={twitter}
                        alt='nft'
                        width={30}
                        height={30}
                     />
                  </div>
               </div>
               <div className='w-full p-5 bg-[#1E1E1E] flex gap-4 py-[20.5px] border boder-1 border-[#FFFFFF1A] max-h-[88px] rounded-md'>
                  <div className='w-full flex gap-4 items-center'>
                     <Image
                        src={avatar}
                        alt='nft'
                        width={48}
                        height={48}
                     />
                     <div className='flex flex-col gap-1'>
                        <span className=' text-xs text-[#FFFFFF99] '>Creator</span>
                        <p className='text-white font-semibold capitalize text-sm'>
                           Eric Clapton <span className='font-medium text-[#A27DF9] text-xs ml-3'>3 Project</span>
                        </p>
                     </div>
                  </div>
                  <div className='flex gap-2 ml-auto flex-row items-center'>
                     <Image
                        src={insta}
                        alt='nft'
                        width={30}
                        height={30}
                     />
                     <Image
                        src={twitter}
                        alt='nft'
                        width={30}
                        height={30}
                     />
                  </div>
               </div>
               <div className='w-full p-5 bg-[#1E1E1E] flex gap-4 py-[20.5px] border boder-1 border-[#FFFFFF1A] max-h-[88px] rounded-md'>
                  <div className='w-full flex gap-4 items-center'>
                     <Image
                        src={avatar}
                        alt='nft'
                        width={48}
                        height={48}
                     />
                     <div className='flex flex-col gap-1'>
                        <span className=' text-xs text-[#FFFFFF99] '>Creator</span>
                        <p className='text-white font-semibold capitalize text-sm'>
                           Eric Clapton <span className='font-medium text-[#A27DF9] text-xs ml-3'>3 Project</span>
                        </p>
                     </div>
                  </div>
                  <div className='flex gap-2 ml-auto flex-row items-center'>
                     <Image
                        src={insta}
                        alt='nft'
                        width={30}
                        height={30}
                     />
                     <Image
                        src={twitter}
                        alt='nft'
                        width={30}
                        height={30}
                     />
                  </div>
               </div>
               <div className='w-full p-5 bg-[#1E1E1E] flex gap-4 py-[20.5px] border boder-1 border-[#FFFFFF1A] max-h-[88px] rounded-md'>
                  <div className='w-full flex gap-4 items-center'>
                     <Image
                        src={avatar}
                        alt='nft'
                        width={48}
                        height={48}
                     />
                     <div className='flex flex-col gap-1'>
                        <span className=' text-xs text-[#FFFFFF99] '>Creator</span>
                        <p className='text-white font-semibold capitalize text-sm'>
                           Eric Clapton <span className='font-medium text-[#A27DF9] text-xs ml-3'>3 Project</span>
                        </p>
                     </div>
                  </div>
                  <div className='flex gap-2 ml-auto flex-row items-center'>
                     <Image
                        src={insta}
                        alt='nft'
                        width={30}
                        height={30}
                     />
                     <Image
                        src={twitter}
                        alt='nft'
                        width={30}
                        height={30}
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

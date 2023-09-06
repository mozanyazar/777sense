import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default async function loading() {
   return (
      <SkeletonTheme
         baseColor='#ededed'
         highlightColor='#eee'
      >
         <div className='max-w-[1440px] w-[95%] mx-auto flex flex-col gap-[30px] pt-[30px] pb-[60px] max-[1440px]:max-w-[1134px] max-[900px]:max-w-[768px]'>
            <div className='w-[240px] h-[30px]'>
               <Skeleton />
            </div>
            <div className='flex gap-[30px] max-[900px]:flex-col'>
               <div className='w-[57%] h-[649px] p-8 bg-[#1E1E1E] rounded-lg flex items-center justify-center max-[1000px]:h-[550px] max-[900px]:w-full max-[550px]:h-[420px] max-[550px]:p-4 max-[450px]:h-[350px] '>
                  <Skeleton />
               </div>
               <div className='flex-1 flex flex-col gap-4 max-[1440px]:w-[451px] max-[900px]:w-full'>
                  <div className='text-[#FFFFFF] capitalize text-5xl leading-[72px] max-[1070px]:text-4xl max-[1070px]:leading-[1.2]'>
                     <Skeleton />
                  </div>
                  <div className='flex justify-between'>
                     <div className='flex items-center gap-2'>
                        <Skeleton
                           borderRadius={50}
                           width={48}
                           height={48}
                        />
                        <Skeleton
                           width={86}
                           height={48}
                        />
                     </div>
                     <Skeleton
                        className='ml-auto'
                        width={127}
                        height={48}
                     />
                  </div>

                  <Skeleton
                     count={5}
                     height={24}
                  />

                  <Skeleton height={330} />
               </div>
            </div>
         </div>
      </SkeletonTheme>
   )
}

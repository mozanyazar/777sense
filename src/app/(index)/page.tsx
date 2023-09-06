import FirstSectionHome from '@/components/Home/FirstSectionHome'
import SecondSectionHome from '@/components/Home/SecondSectionHome/SecondSectionHome'
import ThirdSectionHome from '@/components/Home/ThirdSectionHome/ThirdSectionHome'
import Image from 'next/image'

export default function Home() {
   return (
      <>
         <FirstSectionHome />
         <SecondSectionHome />
         <ThirdSectionHome />
      </>
   )
}

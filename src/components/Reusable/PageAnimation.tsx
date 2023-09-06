'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function PageAnimation({ children }: { children: ReactNode }) {
   const pathname = usePathname()
   return (
      <motion.div
         key={pathname}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}
      >
         {children}
      </motion.div>
   )
}

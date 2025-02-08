import { motion } from 'framer-motion'
import React from 'react'
const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]'>
        <div className='text_marquee flex  border-t-[1px] border-b-[1px] border-[#EFEFEF] text-[#EFEFEF] text-[20rem] uppercase font-semibold tracking-tighter leading-none whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:9}} className='pl-20' >We Are AutoAGenix</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:9}} >We Are AutoAGenix</motion.h1>
            
            
        </div>
    </div>
  )
}

export default Marquee
import React from 'react'
import { AnimatedText } from '../utilities'
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <section data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full min-h-screen bg-[#EFEFEF] pt-1'>
        <div className='textstructure mt-40 px-20'>
            {["We Create", "Eye-catching", "AI & websites"].map((text, index) => {
                return  <div key={index} className='masker flex items-center gap-2'>
                            {index === 1 ? 
                            (
                                <>
                                    <motion.img 
                                                className='h-[4.5rem] rounded-3xl ' 
                                                alt='eyes_image' 
                                                src='https://forums.synfig.org/uploads/default/original/2X/1/171825fbf0a88a24cbed332d0b588f14735a060b.gif'
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1, scale: [0, 1, 1] }}
                                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                                                />
                                    <motion.h1 className={` uppercase text-[5.5rem] tracking-tighter leading-[5.5rem] font-bold  `}
                                                animate={{ x: [-200, 0, 0] }}
                                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                    >
                                        {text}
                                    </motion.h1>
                                </>) : (
                                    <h1 className={` uppercase text-[5.5rem] tracking-tighter leading-[5.5rem] font-bold  `}>
                                            {text}
                                    </h1>
                                )} 
                        </div>
            })}
        </div>
        <div className=' border-t-[1px] border-zinc-100 mt-32 flex justify-between items-center px-20' >
            {["For public and private companies", "From the first idea to the final product"].map(( text, index) => {
                return <p key={index} className='text-md font-light text-center mt-4 tracking-tight leading-none'>{text}</p>
            })}
            <div className='start_button mt-4'>
                <div className='px-4 text-sm font-light capitalize py-2 border-2 rounded-full hover:bg-zinc-800 duration-300 hover:text-[#EFEFEF] hover:border-zinc-100 cursor-pointer'>
                    start the project
                </div>

            </div>
        </div>
        <AnimatedText text="Scroll down to see more 👇"/>
    </section>
  )
}

export default LandingPage
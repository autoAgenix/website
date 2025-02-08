import React from 'react'
import { Button } from '../utilities'

const About = () => {
  return (
    <div data-scroll data-scroll-speed="0.3" className='w-full py-20 rounded-3xl bg-[#cdea68] -mt-48 '>
        <h2 className='w-[70vw] text-[3.5rem] leading-none tracking-tight px-20'>
            AutoAGenix helps forward-thinking business build impactful websites, leverage <span className=' underline'>AI automation</span>
            {' '}and drive growth through digital solutions.
        </h2>
        <div className='w-full border-t-[1px] border-[#5e8106] mt-10'>
            <div className='mt-10 px-20 flex justify-between'>
                <div>
                    <h3 className='text-[3.5rem] mb-10 leading-none tracking-tight'> 
                        Our approach:
                    </h3>
                    <Button text="Read More"/>
                </div>
                <img 
                    src='https://images.unsplash.com/photo-1462396240927-52058a6a84ec?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='About us'
                    className='h-[35rem] object-cover rounded-3xl'
                />
            </div>
        </div>
    </div>
  )
}

export default About
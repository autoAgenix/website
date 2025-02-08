import React from 'react'



const Footer = () => {
  return (
    <footer data-scroll data-scroll-speed='0.7' data-scroll-position="50%, 100%"  className='min-h-screen w-full flex justify-between px-20 z-[100] rounded-t-xl bg-[#EFEFEF]'>
        <div className='mt-15 w-full'>
            <h1 className='uppercase text-[5.5rem] tracking-tighter leading-[5.5rem] font-bold'>Eye-<br/>catching</h1>
        </div>
        <div className='mt-15 w-full'>
            <h1 className='uppercase text-[5.5rem] tracking-tighter leading-[5.5rem] font-bold'>AI & Websites</h1>
            <div className='mt-15 flex justify-between  items-end w-full'>
                <div className='h-full w-full'>
                    <div className='flex flex-col'>
                        <h4 className='mb-5'>S:</h4>
                        {["Instagram", "Facebook", "Twitter", "LinkedIn"].map((link, index) => {
                            return <a key={index + link} href='#' className='underline' >{link}</a>
                        })}
                    </div>
                    <div className='flex flex-col mt-10'>
                        <h4 className='mb-5'>L:</h4>
                         <a href='#' className='underline' >
                            something easeInOu <br/>
                            something easeInOut <br/>
                            <br/>
                            something something <br/>
                            pin 431001
                         </a>
                    </div>
                    <div className='flex flex-col mt-10'>
                        <h4 className='mb-5'>E:</h4>
                         <a href='#' className='underline' >
                            help@autoagenix.com
                         </a>
                    </div>
                    <p className='text-zinc-600 font-thin text-sm mt-15'>© AutoAgenix 2025. <a href='#' className='underline'>Legal Terms</a></p>
                </div>
                <div className=' flex justify-end h-full w-full'>
                    <div className='flex flex-col'>
                        <h4 className='mb-5'>M:</h4>
                        {["Home", "Services", "Our Work", "About Us", "Insights", "Contact Us"].map((link, index) => {
                            return <a key={index + link} href='#' className='underline' >{link}</a>
                        })}
                        <p className='text-zinc-600 font-thin text-sm mt-15'> Website by <a href='#' className='underline'>Sankalp</a></p>

                    </div>

                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer
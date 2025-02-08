import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [lastScrollY, setLastScrollY] = useState(0);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > lastScrollY){
                setVisible(false);
            }else{
                setVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY])

  return (
    <nav className={` z-50 fixed w-full backdrop-blur-md px-20 py-6 flex justify-between items-center transition-all duration-300 ${visible ? " translate-y-0 bg-white/10 " : "-translate-y-full opacity-0"}`}>
        <h3 className='logo text-lg font-bold cursor-pointer'>autoAgenix</h3>
        <div className='links flex gap-10'>
            {["Services", "About", "Contact", "Insights", "Contact"].map((link, index) => {
                return (
                    <a className={`link link--leda text-lg font-light capitalize cursor-pointer ${index === 4 && 'ml-32'}`} key={index} data-text={link}>
                        <span>{link}</span>
                    </a>
                )
            })}
        </div>
    </nav>
  )
}

export default Navbar
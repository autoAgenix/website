import React from 'react'
import { Navbar, LandingPage, Marquee, About, Eyes, Featuress, Footer, Cards, CTA } from './components'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <main className='w-full min-h-screen bg-[#EFEFEF] text-zinc-800 no-scrollbar overflow-y-auto ' > 
      <Navbar/>
      <LandingPage/>
      <div className="relative  overflow-hidden">
        <Marquee />
        <About />
      </div>
      <Eyes/>
      <Featuress/>
      <Cards/>
      <CTA/>
      <Footer/>

    </main>
  
  )
}

export default App
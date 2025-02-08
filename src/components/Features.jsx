import React, { useState } from 'react'
import {motion} from 'framer-motion'
const Features = [
  {
    feature_id: "1x223",
    title: "AI Chat Healper",
    image: "../../public/chatbot_UI_1.webp",
    alt: "chatbot_UI_1",
    tags: ["React", "Node.js", "Tailwind"],
  },
  {
    feature_id: "1x224",
    title: "Influencer Squads",
    image: "../../public/chatbot_UI_2.webp",
    alt: "chatbot_UI_2",
    tags: ["React", "Node.js", "Tailwind"],
  },
  {
    feature_id: "1x225",
    title: "PaCompany",
    image: "../../public/real_estate_1.webp",
    alt: "real_estate_1",
    tags: ["Figma", "HTML", "CSS"],
  },
  {
    feature_id: "1x226",
    title: "Estately",
    image: "../../public/real_estate_2.webp",
    alt: "real_estate_2",
    tags: ["Design", "React", "Tailwind"],
  },
]


const Featuress = () => {

  

  return (
    <div  className='w-full py-10'>  
        <div className='w-full px-20 border-b-[1px] border-zinc-800 pb-10'>
            <h1 className='Features text-[3.5rem] leading-none tracking-tight'> 
                Featured Projects:
            </h1>
        </div>
        <div className='cards w-full mt-20 grid grid-cols-2 gap-5 px-20'>
            {Features.map((feature,index) => {
              const [isHovering, setHovering] = useState(false);
              return (
                <div  className=' relative card-container ' key={feature.feature_id}>
                    <h2 className={` absolute flex overflow-hidden z-10 ${index%2 === 0 ? "left-full" : ""} -translate-x-1/2 top-1/2 -translate-y-1/2 text-[5rem] whitespace-nowrap font-semibold tracking-tight leading-none text-[#6c7b37]`}>
                      {feature.title.split("").map((letter, index) => {
                        return (
                          <motion.span 
                              key={index + letter} 
                              initial={{y: "100%"}} 
                              animate={isHovering ? {y:"0"} : {y:"100%"} } 
                              transition={{duration: 0.1, delay: index * 0.02}}
                              className=' inline-block select-none '
                            >
                              {letter}
                          </motion.span>
                        )
                      })}
                    </h2>
                    
                    <h5 className=' uppercase font-light tracking-tight mb-5'>{feature.title}</h5>
                    <div className='class w-full hover:scale-95 transition-all duration-300 cursor-pointer '>
                        <img
                          src={feature.image}
                          alt={feature.alt}
                          className='w-full h-full object-cover rounded-xl object-right'
                          onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                        />
                    </div>
                    <ul className='flex gap-5 mt-5'>
                        {feature.tags.map((tag, index) => {
                          return (
                            <li className='px-4 py-1 border rounded-full' key={index + tag}>
                              {tag}
                            </li>
                          )
                        })}
                    </ul>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Featuress
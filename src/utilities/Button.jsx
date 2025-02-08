import React from 'react'
import { HoverBorderGradient } from '../components/ui/hover-border-gradient'

const Button = ({text , styles}) => {
  return (
    <div className="mt-10 flex text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className={`${styles? styles : "bg-zinc-900 text-zinc-300"} bg-zinc-900 text-zinc-300 flex  gap-5 items-center`}
      >
        <span>{text}</span>
        <span className='w-3 h-3 rounded-full bg-zinc-300'></span>
      </HoverBorderGradient>
    </div>
  )
}

export default Button
import React, { useEffect, useState } from 'react'

const EyesComponent = ({scale}) => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            
            let deltaX = mouseX - window.innerWidth /2;
            let deltaY = mouseY - window.innerHeight /2;

            let angle = Math.atan2(deltaY, deltaX);
            let angleDeg = angle * 180 / Math.PI;
            setRotate(angleDeg - 180);

        })
    },[rotate])
  return (
        <div className={`flex gap-10 ${scale} z-50`}>
            <div className=' flex items-center justify-center w-[15vw] h-[20vw] rounded-full bg-zinc-300'>
                <div className=' relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                    <div style={{transform: ` rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 p-2'>

                        <div className=' w-[2rem] h-[2rem] bg-zinc-100 rounded-full'/>
                    </div>
                </div>
            </div>
            <div className=' flex items-center justify-center w-[15vw] h-[20vw] rounded-full bg-zinc-300'>
                <div className=' relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                    <div style={{transform: ` rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 p-2'>

                        <div className=' w-[2rem] h-[2rem] bg-zinc-100 rounded-full'/>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default EyesComponent
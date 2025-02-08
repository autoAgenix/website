import React from 'react';
import { center_absolute } from '../lib/styles';
import { Button, EyesComponent } from '../utilities';

const CTA = () => {
    return (
        <section 
            data-scroll
            data-scroll-speed='-0.7'
            className='relative h-screen flex flex-col rounded-t-xl items-center justify-center w-full bg-[#CDEA67]'
        >
            <h2 className='font-bold text-[9rem] tracking-tight leading-none text-center'>
                Ready <br />
                To start <br />
                The Project?
            </h2>
            <Button text='Get Quote' />
            <p className=' text-sm font-light text-center'>or</p>
            <Button text='Get in touch' styles="text-zinc-900" />
            <div data-scroll data-scroll-speed='0.3' data-scroll-position="45%, 55%" className={`${center_absolute}`}>
                <EyesComponent scale='scale-50' />
            </div>
        </section>
    );
};

export default CTA;

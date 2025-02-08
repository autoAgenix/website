import React from 'react';

const cards = [
    {
        title: 'autoAgenix',
        tag: '© 2024 - 2025',
        color: 'bg-[#004d43]',
        textColor: 'text-[#cdea68]',
        width: 'w-1/2'
    },
    {
        title: 'Clutch',
        tag: 'Rating 5.0 on Clutch',
        color: 'bg-[#212121]',
        textColor: 'text-zinc-200',
        width: 'w-1/4'
    },
    {
        title: 'Future Ac.',
        tag: 'Business bootcamp',
        color: 'bg-[#212121]',
        textColor: 'text-zinc-200',
        width: 'w-1/4'
    }
];

const Cards = () => {
    return (
        <div className='flex gap-5 border-t h-[160vh] p-20 mb-20'>
            {cards.map((card, index) => (
                <div 
                    key={index} 
                    className={`relative ${card.width} ${card.color} ${card.textColor} flex h-[25rem] rounded-xl items-end p-10 cursor-pointer hover:scale-95 transition-all duration-500`}
                >
                    <h3 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold tracking-tight text-4xl whitespace-nowrap'>
                        {card.title}
                    </h3>
                    <p className='px-4 py-1 border rounded-full'>{card.tag}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;

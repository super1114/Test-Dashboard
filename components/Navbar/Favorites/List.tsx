import React from 'react'
import Image from 'next/image';
interface propsList {
    items: string[];
}

const List = ({ items }: propsList) => {
    return (
        <div className='flex flex-col pt-3 space-y-3'>
            {items.map((item: string, index: number) => (
                <div key={index} className='hover:bg-grey-hover rounded-lg border border-transparent flex items-center  px-3'>
                    <Image className='mr-[13px]' src='disc.svg' alt='disc not found' width='6' height='6' />
                    <p className='text-sm text-black'>{item}</p>
                </div>
            ))}
        </div>

    )
}

export default List;
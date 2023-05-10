import React from 'react'
import Image from 'next/image';

interface rightItem {
    imageUrl: string;
    content: String;
    date?: String;
}

interface propsItems {
    title: String;
    items: rightItem[];
}

const RightBarItem = ({ title, items }: propsItems) => {
    return (
        <div className='flex flex-col'>
            <div className='pt-1 pl-1 pb-5 text-sm font-semibold'>{title}</div>
            <div className='flex flex-col gap-3'>
                {items.map((items: rightItem, index: number) => (
                    <div className={`flex items-center ${items.date ? 'mb-4' : ''}`}>
                        <Image src={items.imageUrl} alt='Not Found!' width='24' height='24' />
                        <div className={`relative ml-2 flex flex-col ${items.date ? 'bottom-1' : ''}`}>
                            <p className='text-sm max-w-[190px] truncate'>{items.content}</p>
                            {items.date && <p className='absolute whitespace-nowrap text-xs top-[23px] text-grey-text'>{items.date}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RightBarItem;
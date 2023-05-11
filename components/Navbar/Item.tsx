import React from 'react'
interface props {
    itemsProps: string[];
}

const Item = ({ itemsProps }: props) => {
    return (
        <div className='flex flex-col w-full'>
            {itemsProps.map((item: string, index: number) => (
                <div key={index} className='flex text-sm items-center navigation relative border-transparent rounded-lg my-[3px] hover:bg-grey-hover px-1'>
                    <p className='pl-[52px]'>{item}</p>
                    <div className="hidden navigation-item absolute left-[2px] border-transparent rounded-2xl px-[2px] py-2 bg-black p-2"></div>
                </div>
            ))}
        </div>
    )
}

export default Item;
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Item from '../Item';

interface PropsItem {
    imageUrl: string;
    text: string;
}

interface PropsItems {
    items: PropsItem[];
}

const DashboardItem = ({ items }: PropsItems) => {
    const itemsProps = ['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers']

    const [currentIndex, setCurrentIndex] = useState<number[]>(new Array(items.length).fill(0));

    const images = ['ArrowLineRight.svg', 'ArrowLineDown.svg'];

    const handleClick = (index: number) => {
        setCurrentIndex((prevIndex) => {
            const newValue = prevIndex[index] === 0 ? 1 : 0;

            // Create a new array with the updated value at the specified index
            const newArray = [...prevIndex];
            newArray[index] = newValue;

            return newArray;
        });
    };

    return (
        <div className="flex flex-col ml-[-5px] pt-3 space-y-3">
            {items.map((item: PropsItem, index: number) => (
                <div key={index} className="flex flex-col">
                    <div className='flex items-center px-3 hover:bg-grey-hover rounded-lg'>
                        <Image
                            src={images[currentIndex[index]]}
                            alt={currentIndex[index] === 0 ? 'AA' : 'BB'}
                            onClick={() => handleClick(index)}
                            className="cursor-pointer mr-[2px]"
                            width={20}
                            height={20}
                        />
                        <Image
                            className="mr-[3px]"
                            src={item.imageUrl}
                            alt="icon not found"
                            width={20}
                            height={20}
                        />
                        <p className="text-sm text-black">{item.text}</p>
                    </div>
                    <div className={`mt-1 ${currentIndex[index] === 0 ? 'hidden' : 'block'}`}>
                        <Item itemsProps={itemsProps} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardItem;

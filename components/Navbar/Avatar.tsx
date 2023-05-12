import React from 'react'
import Image from 'next/image'

interface imageProps {
    imageUrl: string;
    name: string;
}
const Avatar = ({ imageUrl, name }: imageProps) => {
    return (
        <div className='flex w-full px-[26px] items-center'>
            <Image
                className='mr-2'
                src={imageUrl}
                alt='NotFound!!'
                width='24'
                height='24' />
            <p className='text-sm'>{name}</p>
        </div>
    )
}

export default Avatar;
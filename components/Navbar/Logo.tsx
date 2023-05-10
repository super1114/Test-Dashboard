import React from 'react'
import Image from 'next/image';

const Logo = () => {
    return (
        <div className='flex justify-center'>
            <Image src='SnowLogo.svg' alt='logoNotFound' width='65' height='20' />
        </div>
    )
}

export default Logo;
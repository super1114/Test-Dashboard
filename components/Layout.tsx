import React from 'react'
import { useState } from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }
    return (
        <div className='flex p-3 items-center bg-green-300 '>
            <div className='inline-flex whitespace-nowrap items-center p-2 mr-4 text-white'>
                Fox Layout
            </div>
            <button onClick={handleClick} className='inline-flex ml-auto p-3 lg:hidden text-white'>
                I am a hamburger
            </button>
            <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:justify-end `}>
                <div className='w-full items-start justify-center lg:inline-flex lg:w-auto lg:flex-row flex-col'>
                    <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center text-white'>Home</div>
                    <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center text-white'>Services</div>
                    <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center text-white'>Contact Us</div>
                    <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center text-white'>About Us</div>
                </div>
            </div>
        </div>
    )
}

export default Layout;
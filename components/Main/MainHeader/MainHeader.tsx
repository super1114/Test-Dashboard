import React, { useContext } from 'react'
import Image from 'next/image'
import { MenuIcon } from '@heroicons/react/outline';

import SearchFilter from '../SearchFilter'
import NavContext from '@/contexts/NavContext';

export default function MainHeader() {

    const { showNav, toggleNav } = useContext(NavContext);
    return (
        <div className='flex lg:flex-row flex-col max-sm:px-3 justify-between sm:px-[34px] py-[22px] border-b border-b-grey-border'>
            <div className='flex max-ss:justify-center items-center'>
                <Image className='mr-5' src='mainHeader/Sidebar.svg' alt='Not Found' width={20} height={20} />
                <Image className='mr-[21px]' src='mainHeader/Star.svg' alt='Not Found' width={20} height={20} />
                <div className='text-grey-text'>Dashboards / <span className='text-black'>Default</span></div>
            </div>
            <div className='flex max-ss:flex-col max-ss:gap-y-5 lg:mt-0 lg:justify-start mt-2 justify-between items-center'>
                <SearchFilter />
                <div className="flex ml-6 gap-x-5">
                    <Image src='mainHeader/Sun.svg' width='20' height='20' alt='Not Found' />
                    <Image src='mainHeader/ClockCounterClockwise.svg' width='20' height='20' alt='Not Found' />
                    <Image src='mainHeader/Bell.svg' width='20' height='20' alt='Not Found' />
                    <Image src='mainHeader/Sidebar.svg' width='20' height='20' alt='Not Found' />
                    {/* Toggle the dashboard show */}
                    <MenuIcon className="max-lg:block lg:hidden h-5 w-5" onClick={toggleNav} />
                </div>
            </div>
        </div>
    )
}

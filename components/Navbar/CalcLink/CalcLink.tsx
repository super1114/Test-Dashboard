import React from 'react'
import Link from 'next/link';
import { CalculatorIcon } from '@heroicons/react/solid'

const CalcLink = () => {
    return (
        <div className='flex flex-col'>
            <div className='text-sm text-grey-text px-3'>Calculator</div>
            <Link href='/calculator'>
                <div className='flex items-center px-8 mt-3  hover:bg-grey-hover rounded-lg'>
                    <CalculatorIcon className='w-5 h-5 text-gray-500' />
                    <p className="whitespace-nowrap text-sm text-black">Calculator</p>
                </div>
            </Link>
        </div>
    )
}

export default CalcLink;
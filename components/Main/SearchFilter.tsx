import React from 'react'
import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/outline'

const TableFilter = () => {
    return (
        <div className=''>
            <div className='flex'>
                <div className="relative flex items-center">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder='Search'
                        className="max-ss:pl-5 placeholder:max-ss:pl-4 bg-grey-hover pl-10 rounded-lg py-[2px] border border-transparent placeholder:text-base focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none sm:text-sm"
                    />
                    <div className="absolute inset-y-0 right-2 flex items-center">
                        <Image src='mainHeader/filterMark.svg' alt="Not Found" width={18} height={18} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableFilter;
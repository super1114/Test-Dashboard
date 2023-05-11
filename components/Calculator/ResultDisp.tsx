import React from 'react'

import { ThemeContext } from '@/contexts/ThemeContext';
import { useContext } from 'react';

const ResultDisp = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'light' ? 'text-black' : 'text-white'} flex w-full items-start leading-[0px] justify-end font-light text-[96px] h-[96px] mt-[8vh]`} >
            1,258.2
        </div>
    )
}

export default ResultDisp;
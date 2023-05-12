import React from 'react'

import { ThemeContext } from '@/contexts/ThemeContext';
import { ResultContext } from '@/contexts/ResultContext';
import { useContext } from 'react';

const ResultDisp = () => {
    const { theme } = useContext(ThemeContext);
    const { resultContent } = useContext(ResultContext);

    return (
        <div className={`${theme === 'light' ? 'text-black' : 'text-white'} flex w-screen items-start leading-[0px] justify-end font-light text-[96px] h-[96px] mt-[8vh]`} >
            {resultContent.length !== 0 ? parseFloat(eval(resultContent.join('')).toFixed(4)).toLocaleString('en', { minimumFractionDigits: 2 }) : '0'}
        </div>
    )
}

export default ResultDisp;
import React from 'react'

import { ThemeContext } from '@/contexts/ThemeContext';
import { ValueContext } from '@/contexts/ValueContext';
import { ResultContext } from '@/contexts/ResultContext';
import { useContext } from 'react';

const ResultDisp = () => {
    const { theme } = useContext(ThemeContext);

    const { valueContent } = useContext(ValueContext);
    const { resultContent } = useContext(ResultContext);

    console.log(resultContent, 'resultContent');
    return (
        <div className={`${theme === 'light' ? 'text-black' : 'text-white'} flex w-screen items-start leading-[0px] justify-end font-light text-[96px] h-[96px] mt-[8vh]`} >
            {/* {eval(valueContent.join(''))} */}
            {resultContent.length !== 0 ? parseFloat(eval(resultContent.join('')).toFixed(4)).toLocaleString('en', { minimumFractionDigits: 2 }) : '0'}
        </div>
    )
}

export default ResultDisp;
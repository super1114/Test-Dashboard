import React from 'react'


import { ThemeContext } from '@/contexts/ThemeContext';

import { ValueContext } from '@/contexts/ValueContext';
import { useContext } from 'react';

const Expression = () => {
    const { theme } = useContext(ThemeContext);
    const { valueContent } = useContext(ValueContext);
    return (
        <div className={`${theme === 'dark' ? 'text-white-text' : 'text-grey-text'} flex w-full items-start justify-end font-light opacity-40 text-[40px] mt-[7.4vh] h-12 `}>
            {valueContent}
        </div>
    )
}

export default Expression;
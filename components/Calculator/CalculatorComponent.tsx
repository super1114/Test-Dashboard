import React, { useState } from 'react'
import ResultDisp from './ResultDisp'
import Expression from './Expression'
import ButtonBoard from './ButtonBoard'
import ToggleMode from './ToggleMode'

import { ValueContext } from '@/contexts/ValueContext'

const CalculatorComponent = () => {
    const [valueContent, setValue] = useState<string[]>([]);

    const concatValue = (val: string) => {
        setValue([...valueContent, val]);
    };
    return (
        <ValueContext.Provider value={{ valueContent, concatValue }}>
            <div className='flex flex-col items-center px-5 w-[375px] h-full ' >
                <ToggleMode />
                <Expression />
                <ResultDisp />
                <ButtonBoard />
            </div>
        </ValueContext.Provider>
    )
}

export default CalculatorComponent;
import React, { useState } from 'react'
import ResultDisp from './ResultDisp'
import Expression from './Expression'
import ButtonBoard from './ButtonBoard'
import ToggleMode from './ToggleMode'

import { ValueContext } from '@/contexts/ValueContext'
import { ResultContext } from '@/contexts/ResultContext'

const CalculatorComponent = () => {
    const [valueContent, setValueContent] = useState<string[]>([]);
    const [resultContent, setResultContent] = useState<string[]>([]);

    const setValueArray = (newArray: string[]) => {
        setValueContent(newArray);
    };
    const setResultArray = (newArray: string[]) => {
        setResultContent(newArray);
    };
    return (
        <ResultContext.Provider value={{ resultContent, setResultArray }}>
            <ValueContext.Provider value={{ valueContent, setValueArray }}>
                <div className='flex flex-col items-end px-5 w-[375px] h-full ' >
                    <ToggleMode />
                    <Expression />
                    <ResultDisp />
                    <ButtonBoard />
                </div>
            </ValueContext.Provider>
        </ResultContext.Provider>
    )
}

export default CalculatorComponent;
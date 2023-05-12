import React, { createContext } from 'react';

interface MyContextValue {
    resultArray: string[];
    setResultArray: (newValue: string[]) => void;
}

export const ResultContext = createContext({ resultContent: ['0'], setResultArray: (val: string[]) => { } });
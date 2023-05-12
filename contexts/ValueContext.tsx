import React, { createContext } from 'react';

// interface MyContextValue {
//     valueArray: string[];
//     setValueArray: (newValue: string[]) => void;
// }

export const ValueContext = createContext({ valueContent: ['0'], setValueArray: (val: string[]) => { } });

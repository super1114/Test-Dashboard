import React, { createContext } from 'react';

export const ValueContext = createContext({ valueContent: ['0'], setValueArray: (val: string[]) => { } });

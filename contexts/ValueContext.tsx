import React, { createContext } from 'react';

type StringOrNeverArray = string[] | never[];

export const ValueContext = createContext({ valueContent: [] as StringOrNeverArray, concatValue: (val: string) => { } });
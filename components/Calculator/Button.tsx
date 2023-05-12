import React from 'react'
import Image from 'next/image'

import { ThemeContext } from '@/contexts/ThemeContext';
import { ValueContext } from '@/contexts/ValueContext';
import { ResultContext } from '@/contexts/ResultContext';
import { useState, useContext } from 'react';
import { tempArray, tempCalcArray, tempOpt } from './globals';

interface Props {
  value: string,
  typeBtn: string,
  isIcon?: boolean,
  iconUrl?: string,
  typeOperator?: string
}

const Button = ({ typeBtn, value, isIcon, iconUrl, typeOperator }: Props) => {

  const { theme } = useContext(ThemeContext);
  let valueTemp: string[];
  let valueTempCalc: string[];

  const { valueContent, setValueArray } = useContext(ValueContext);
  const { resultContent, setResultArray } = useContext(ResultContext);


  const handleClick = () => {
    if (typeOperator === '=') {
      valueTemp = [...tempArray];
      valueTempCalc = [...tempCalcArray];
      setResultArray([...valueTempCalc]);
      setValueArray([...valueTemp]);
    } else {
      if (typeOperator) {
        //Only Operators

        //Clear btn
        if (value === 'C') {
          valueTempCalc = ['0'];
          valueTemp = ['0'];
          tempArray.length = 0;
          tempCalcArray.length = 0;
          setResultArray([...valueTempCalc]);
        } else if (value === 'del') {
          //Del btn
          tempArray.length--;
          tempCalcArray.length--;
          valueTemp = [...tempArray];
        } else {
          if (isNaN(parseInt(tempArray[tempArray.length - 1], 10))) {
            //Validate the input
            tempArray[tempArray.length - 1] = value;
            if (value === '×') value = '*';
            if (value === '÷') value = '/';
            tempCalcArray[tempArray.length - 1] = value;
          } else {
            {
              if (value === '÷') {
                tempCalcArray.push('/');
              } else if (value === '×') {
                tempCalcArray.push('*');
              } else {
                tempCalcArray.push(value);
              }
              tempArray.push(value);

            }
          }
          valueTemp = [...tempArray];
        }

      } else {
        //Only Numbers
        tempArray.push(value);
        tempCalcArray.push(value);
        valueTemp = [...tempArray];
        valueTempCalc = [...tempCalcArray];
        setResultArray([...valueTempCalc]);
      }
    }
    setValueArray([...valueTemp]);
  }
  return (
    <div className={`flex cursor-pointer hover:opacity-80 active:opacity-90 justify-center w-[72px] h-[72px] items-center rounded-3xl hover: ${typeBtn === 'sub-op' ? theme === 'light' ? 'bg-operator-light' : 'bg-operator-dark' : typeBtn === 'main-val' ? theme === 'dark' ? 'bg-value-dark' : 'bg-value-light' : 'bg-btn-purple'}`} onClick={handleClick}>
      {isIcon ? (<Image src={iconUrl} alt='Not Found' width='32' height='32' />) : (<div className={`${theme === 'dark' ? 'text-white' : `${typeBtn === 'main-op' ? 'text-white' : 'text-black'}`} text-[32px]`} >{value}</div>)}
    </div>
  )
}

export default Button;
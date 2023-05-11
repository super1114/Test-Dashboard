import React from 'react'
import Image from 'next/image'

import { ThemeContext } from '@/contexts/ThemeContext';
import { ValueContext } from '@/contexts/ValueContext';
import { useContext } from 'react';

interface Props {
  value: string,
  typeBtn: string,
  isIcon?: boolean
}

const Button = ({ typeBtn, value, isIcon }: Props) => {
  const { theme } = useContext(ThemeContext);
  const { valueContent, concatValue } = useContext(ValueContext);
  return (
    <div className={`flex hover:opacity-80 active:opacity-90 justify-center w-[72px] h-[72px] items-center rounded-3xl hover: ${typeBtn === 'sub-op' ? theme === 'light' ? 'bg-operator-light' : 'bg-operator-dark' : typeBtn === 'main-val' ? theme === 'dark' ? 'bg-value-dark' : 'bg-value-light' : 'bg-btn-purple'}`} onClick={() => concatValue(value)}>
      {isIcon ? (<Image src={value} alt='Not Found' width='32' height='32' />) : (<div className={`${theme === 'dark' ? 'text-white' : `${typeBtn === 'main-op' ? 'text-white' : 'text-black'}`} text-[32px]`} >{value}</div>)}
    </div>
  )
}

export default Button;
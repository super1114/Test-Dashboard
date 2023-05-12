import React from 'react'
import Button from './Button'

import { ThemeContext } from '@/contexts/ThemeContext';
import { useContext } from 'react';

const ButtonBoard = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className='w-full h-full mt-3 grid grid-cols-4 place-items-center gap-y-4'>
            <Button value='C' typeBtn='sub-op' />
            <Button value={theme === 'dark' ? 'calculator/plusminwhite.svg' : 'calculator/plusminblack.svg'} typeBtn='sub-op' isIcon={true} />
            <Button value='%' typeBtn='sub-op' />
            <Button value='÷' typeBtn='main-op' />
            <Button value='7' typeBtn='main-val' />
            <Button value='8' typeBtn='main-val' />
            <Button value='9' typeBtn='main-val' />
            <Button value='×' typeBtn='main-op' />
            <Button value='4' typeBtn='main-val' />
            <Button value='5' typeBtn='main-val' />
            <Button value='6' typeBtn='main-val' />
            <Button value='-' typeBtn='main-op' />
            <Button value='1' typeBtn='main-val' />
            <Button value='2' typeBtn='main-val' />
            <Button value='3' typeBtn='main-val' />
            <Button value='+' typeBtn='main-op' />
            <Button value='.' typeBtn='main-val' />
            <Button value='0' typeBtn='main-val' />
            <Button value={theme === 'dark' ? 'calculator/delete.svg' : 'calculator/deleteblack.svg'} isIcon={true} typeBtn='main-val' />
            <Button value='=' typeBtn='main-op' />
        </div>
    )
}

export default ButtonBoard;
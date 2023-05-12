import React from 'react'
import Button from './Button'

import { ThemeContext } from '@/contexts/ThemeContext';
import { useContext } from 'react';

const ButtonBoard = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className='w-full h-full grid grid-cols-4 place-items-center gap-y-4'>
            <Button value='C' typeBtn='sub-op' typeOperator='clear' />
            <Button value='plmi' iconUrl={theme === 'dark' ? 'calculator/plusminwhite.svg' : 'calculator/plusminblack.svg'} typeBtn='sub-op' isIcon={true} typeOperator='plusmin' />
            <Button value='%' typeBtn='sub-op' typeOperator='%' />
            <Button value='÷' typeBtn='main-op' typeOperator='/' />
            <Button value='7' typeBtn='main-val' />
            <Button value='8' typeBtn='main-val' />
            <Button value='9' typeBtn='main-val' />
            <Button value='×' typeBtn='main-op' typeOperator='*' />
            <Button value='4' typeBtn='main-val' />
            <Button value='5' typeBtn='main-val' />
            <Button value='6' typeBtn='main-val' />
            <Button value='-' typeBtn='main-op' typeOperator='-' />
            <Button value='1' typeBtn='main-val' />
            <Button value='2' typeBtn='main-val' />
            <Button value='3' typeBtn='main-val' />
            <Button value='+' typeBtn='main-op' typeOperator='+' />
            <Button value='.' typeBtn='main-val' typeOperator='.' />
            <Button value='0' typeBtn='main-val' />
            <Button value='del' iconUrl={theme === 'dark' ? 'calculator/delete.svg' : 'calculator/deleteblack.svg'} isIcon={true} typeBtn='main-val' typeOperator='del' />
            <Button value='=' typeBtn='main-op' typeOperator='=' />
        </div>
    )
}

export default ButtonBoard;
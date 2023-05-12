import React from 'react'
import { ThemeContext } from '@/contexts/ThemeContext';
import { useContext } from 'react';
import Image from 'next/image'

const ToggleMode = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleToggler = () => {
        const box: HTMLElement | null = document.getElementById('grey-box');
        if (box) {
            if (theme === 'light') {
                box.style.transform = `translateX(-38px)`;
                toggleTheme();
            } else {
                box.style.transform = `translateX(0px)`;
                toggleTheme();
            }
        } else {
            console.log('error')
        }
    }
    return (
        <div className='flex w-full justify-center'>
            <div className={`${theme === 'light' ? 'bg-white' : 'bg-value-dark'} relative flex justify-between px-1 py-1 w-[72px] h-8 rounded-2xl cursor-pointer`} onClick={handleToggler}>
                <Image src='calculator/moon.svg' width={24} height={24} alt='Not Found' />
                <Image src='calculator/sun.svg' width={24} height={24} alt='Not Found' />
                <div id='grey-box' className='absolute right-1 rounded-full w-6 h-6 bg-operator-light transition-transform duration-500 ease-out'></div>
            </div>
        </div>
    )
}

export default ToggleMode;
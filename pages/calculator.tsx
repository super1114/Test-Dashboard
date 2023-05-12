import React from 'react'
import CalculatorComponent from '@/components/Calculator/CalculatorComponent'
import { useState } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'

export default function Calculator() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`${theme === 'light' ? 'bg-light-back' : 'bg-dark-back'} flex h-full pt-[60px] pb-[66px] justify-center calc`}>
                <CalculatorComponent />
            </div>
        </ThemeContext.Provider>
    )
}

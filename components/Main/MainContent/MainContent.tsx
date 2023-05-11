import React from 'react'
import MainToolbar from './MainToolbar/MainToolbar'
import MainCoffee from './MainCoffee/MainCoffee'

const MainContent = () => {
    return (
        <div className='flex flex-col w-full pt-8'>
            <MainToolbar />
            <MainCoffee />
        </div>
    )
}

export default MainContent;
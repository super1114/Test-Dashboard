import React from 'react'
import MainBarItems from './MainBarItems'
import MainBarBtns from './MainBarBtns'

export default function MainToolbar() {
    const elements = ['Overview', 'Targets', 'Budget', 'Users', 'Files', 'Activity', 'Settings']
    return (
        <div className='flex flex-col max-sm:gap-y-3 max-xs:gap-y-2 xl:flex-row gap-y-2 w-full justify-between px-9 items-center'>
            <MainBarItems elements={elements} />
            <MainBarBtns />
        </div>
    )
}

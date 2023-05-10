import React from 'react'
import Tab from './Tab'
import List from './List'

const Favorites = () => {
    let menuItems = ['Overview', 'Projects'];
    return (
        <div className='flex flex-col text-sm  px-3'>
            <Tab />
            <List items={menuItems} />
        </div>
    )
}
export default Favorites;
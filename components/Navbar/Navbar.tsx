import React from 'react'
import Avatar from './Avatar';
import Logo from './Logo';
import Favorites from './Favorites/Favorites';
import NavMain from './NavMain';
const Navbar = () => {
    return (
        <div className='flex flex-col pt-7 pb-5 justify-between border-r-[1px] border-grey-border'>
            <Avatar imageUrl='ByeWind.svg' name='ByeWind' />
            <NavMain />
            <Logo />
        </div>
    )
}

export default Navbar;
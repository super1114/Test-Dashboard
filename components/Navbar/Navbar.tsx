import React, { useContext } from 'react'
import Avatar from './Avatar';
import Logo from './Logo';
import NavMain from './NavMain';

import NavContext from '@/contexts/NavContext';


const Navbar = () => {
    const { showNav } = useContext(NavContext);

    return (
        <div className={`${showNav ? 'max-sm:flex max-sm:h-full max-sm:fixed max-sm:overflow-y-auto max-sm:bg-white z-10' : 'hidden'} sm:relative block!important`}>
            <div className='top-0 left-0 z-10 h-full flex flex-col pt-7 pb-5 justify-between border-r-[1px] border-grey-border'>
                <Avatar imageUrl='ByeWind.svg' name='ByeWind' />
                <NavMain />
                <Logo />
            </div>
        </div>
    )
}

export default Navbar;
import React from 'react';

const NavContext = React.createContext({
    showNav: false,
    toggleNav: () => { }
});

export default NavContext;
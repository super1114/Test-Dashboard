import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react'

import NavContext from '@/contexts/NavContext';

export default function App({ Component, pageProps }: AppProps) {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  }
  return (
    <NavContext.Provider value={{ showNav, toggleNav }}>
      <Component {...pageProps} />
    </NavContext.Provider>
  )
}

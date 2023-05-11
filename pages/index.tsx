import React, { useContext } from 'react';
import Navbar from '@/components/Navbar/Navbar'
import RightBar from '@/components/RightBar/RightBar'
import Main from '@/components/Main/Main'

import NavContext from '@/contexts/NavContext';


const Home = () => {
  const { showNav } = useContext(NavContext);

  return (
    <div className='h-full w-screen flex flex-col sm:flex-row'>
      <Navbar />
      <div className='flex flex-col sm:flex-row'>
        <Main />
        <RightBar />
      </div>
    </div>
  )
}
export default Home;
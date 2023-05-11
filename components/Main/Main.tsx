import React from 'react'
import MainHeader from './MainHeader/MainHeader';
import MainContent from './MainContent/MainContent';
import MainTable from './MainContent/MainTable/MainTable';

const Main = () => {
    return (
        <div className='flex flex-col w-full sm:border-r sm:border-r-grey-border'>
            <MainHeader />
            <MainContent />
            <MainTable />
        </div>
    )
}

export default Main;
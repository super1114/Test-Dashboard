import React from 'react'
import DashboardItem from './DashboardItem'

const Dashboards = () => {
    const dashItems = [
        { imageUrl: 'ChartPieSlice.svg', text: 'Default' },
        { imageUrl: 'ShoppingBagOpen.svg', text: 'eCommerce' },
        { imageUrl: 'FolderNotch.svg', text: 'Projects' },
        { imageUrl: 'BookOpen.svg', text: 'Online Courses' }
    ];
    return (
        <div className='flex flex-col'>
            <div className='text-sm text-grey-text  px-3'>Dashboards</div>
            <DashboardItem items={dashItems} />
        </div>
    )
}

export default Dashboards;
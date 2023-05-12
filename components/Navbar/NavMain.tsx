import React from 'react'
import Favorites from './Favorites/Favorites'
import Dashboards from './Dashboards/Dashboards'
import Pages from './PagesComponent/Pages'
import CalcLink from './CalcLink/CalcLink'

export default function NavMain() {
    return (
        <div className='flex flex-col justify-start h-full pt-[26px] px-4 gap-y-8'>
            <Favorites />
            <Dashboards />
            <Pages />
            <CalcLink />
        </div>
    )
}

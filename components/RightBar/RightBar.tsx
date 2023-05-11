import React from 'react'
import RightBarItem from './RightBarItem';

const RightBar = () => {
    const notiItems = [
        { imageUrl: 'rightBar/noti1.svg', content: 'You have a bug that needs to be fixed.', date: '5m ago' },
        { imageUrl: 'rightBar/noti2.svg', content: 'New User Registered', date: '1:23 AM' },
        { imageUrl: 'rightBar/noti3.svg', content: 'You have a bug that needs to be fixed.', date: '0:32 AM' },
        { imageUrl: 'rightBar/noti4.svg', content: 'Andi Lane subscribed to you', date: 'Yesterday 12:39 AM' }
    ];
    const actiItems = [
        { imageUrl: 'rightBar/1.svg', content: 'Edited the details of Project X', date: '5m ago' },
        { imageUrl: 'rightBar/2.svg', content: 'ByeWind', date: '1:32 AM' },
        { imageUrl: 'rightBar/3.svg', content: 'Submitted a bug', date: 'Yesterday 12:39 AM' },
        { imageUrl: 'rightBar/4.svg', content: 'Modified A data in Page X', date: 'Last Thursday 3:34 AM' },
        { imageUrl: 'rightBar/5.svg', content: 'Deleted a page in Project X', date: 'Aug 11' }
    ];
    const contItems = [
        { imageUrl: 'rightBar/7.svg', content: 'Natali Craig' },
        { imageUrl: 'rightBar/3.svg', content: 'Drew Cano' },
        { imageUrl: 'rightBar/10.svg', content: 'Orlando Diggs' },
        { imageUrl: 'rightBar/9.svg', content: 'Andi Lane' },
        { imageUrl: 'rightBar/4.svg', content: 'Kate Morrison' },
        { imageUrl: 'rightBar/8.svg', content: 'Koray Okumus' },
    ];
    return (
        <div className='flex flex-col px-6 mr-6 py-[26px] gap-7'>
            <RightBarItem title='Notifications' items={notiItems} />
            <RightBarItem title='Activities' items={actiItems} />
            <RightBarItem title='Contacts' items={contItems} />
        </div>
    )
}

export default RightBar;
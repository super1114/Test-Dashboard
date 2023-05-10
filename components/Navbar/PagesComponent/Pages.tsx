import React from 'react'
import PageItem from './PageItem'

const Pages = () => {
    const pageItems = [
        { imageUrl: 'IdentificationBadge.svg', text: 'User Profile' },
        { imageUrl: 'IdentificationCard.svg', text: 'Account' },
        { imageUrl: 'UsersThree.svg', text: 'Corporate' },
        { imageUrl: 'NoteBook.svg', text: 'Blog' },
        { imageUrl: 'ChatsTeardrop.svg', text: 'Social' }
    ];
    return (
        <div className='flex flex-col'>
            <div className='text-sm text-grey-text  px-3'>Pages</div>
            <PageItem items={pageItems} />
        </div>
    )
}

export default Pages;
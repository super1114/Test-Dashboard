
import { DotsHorizontalIcon } from '@heroicons/react/solid';

const MainBarBtns = () => {
    return (
        <div className='flex items-center text-sm text-grey-text gap-x-6'>
            <div className='cursor-pointer hover:bg-grey-border'>+ Add User</div>
            <div className='cursor-pointer hover:bg-grey-border'>Add Target</div>
            <DotsHorizontalIcon className="h-3 w-4 cursor-pointer" />
        </div>
    )
}

export default MainBarBtns;
import SearchFilter from '../../SearchFilter'
import { DotsHorizontalIcon } from '@heroicons/react/solid';


const MainTableHeader = () => {
    return (
        <div className='flex max-ss:flex-col max-ss:gap-y-4 justify-between items-center'>
            <div className='max-ss:text-base text-sm font-semibold'>Project Spendings</div>
            <div className='flex max-ss:gap-x-2 items-center gap-x-6'>
                <SearchFilter />
                <DotsHorizontalIcon className="h-3 w-4 cursor-pointer" />
            </div>
        </div>
    )
}

export default MainTableHeader;
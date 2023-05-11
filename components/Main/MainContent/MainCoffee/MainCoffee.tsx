import Image from 'next/image';

const MainCoffee = () => {
    return (
        <div className='flex flex-col justify-between mx-7 p-6 sm:flex-row bg-main-content rounded-2xl mt-5'>
            <div className='flex flex-col'>
                <div className='text-lg font-semibold pb-4'>Coffee detail page</div>
                <div className='flex flex-col gap-y-2 sm:gap-0 sm:flex-row'>
                    <div className='flex flex-row justify-between items-center sm:flex-col sm:pr-7 sm:border-r  sm:items-start sm:justify-start sm:border-r-grey-border'>
                        <div className='text-sm pb-1'>Status</div>
                        <div>
                            <Image className='max-xs:w-[130px] max-xs:h-5 max-xs:ml-5' src='mainContent/progressBar.svg' alt='Not Found' width={163} height={28} />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center  sm:flex-col sm:px-7 sm:border-r sm:border-r-grey-border sm:items-start sm:justify-start '>
                        <div className='text-sm pb-1'>Total Tasks</div>
                        <div className='font-semibold text-lg max-xs:text-base'>15<span className=''>/</span>48</div>
                    </div>
                    <div className='flex flex-row justify-between items-center  sm:flex-col sm:px-7 sm:border-r sm:border-r-grey-border sm:items-start sm:justify-start '>
                        <div className='text-sm pb-1'>Due Date</div>
                        <div className='font-semibold text-lg max-xs:text-base'>29 Jan, 2022</div>
                    </div>
                    <div className='flex flex-row justify-between items-center  sm:flex-col sm:pl-7 sm:items-start sm:justify-start'>
                        <div className='text-sm pb-1'>Budget Spent</div>
                        <div className='font-semibold text-lg max-xs:text-base'>$15,000</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center gap-x- sm:flex-col sm:justify-start sm:gap-y-[30px]'>
                <Image src='mainContent/blue.svg' alt='Not Found' width={42} height={42} />
                <div className='flex items-center -space-x-3'>
                    <Image src='mainContent/katherine.svg' alt='Not Found' width={24} height={24}></Image>
                    <Image className='' src='rightBar/4.svg' alt='Not Found' width={24} height={24}></Image>
                    <div className='flex text-sm justify-center items-center w-6 h-6 border border-transparent  bg-[#E5ECF6] rounded-full hover:bg-gray-400'>+3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCoffee; 
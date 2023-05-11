import { useState } from "react";


const Tab = () => {
    const [isActive, setIsActive] = useState(true);

    function handleClick(tab: boolean) {
        setIsActive(tab);
    }
    return (
        <div className='flex   px-3'>
            <p className={`cursor-pointer pr-5 ${isActive ? "text-grey-text" : "text-grey-placeholder"}`}
                onClick={() => handleClick(true)}>Favorites</p>
            <p className={`cursor-pointer ${!isActive ? "text-grey-text" : "text-grey-placeholder"}`}
                onClick={() => handleClick(false)}>Recently</p>
        </div>
    )
}

export default Tab;
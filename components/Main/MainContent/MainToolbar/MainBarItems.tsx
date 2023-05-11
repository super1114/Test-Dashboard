import { useState } from 'react'

interface Props {
    elements: string[];
}

const MainBarItems = ({ elements }: Props) => {
    const [selectedElementIndex, setSelectedElementIndex] = useState(0);

    const handleClick = (index: number) => {
        setSelectedElementIndex(index);
    };

    return (
        <div className="flex max-xs:flex-col max-xs:items-center max-xs:gap-y-1 max-ss:gap-x-2 gap-x-5">
            {elements.map((element, index) => (
                <div
                    key={index}
                    className={`text-sm cursor-pointer ${selectedElementIndex === index ? 'font-semibold border-b-[2px] border-b-black text-black' : 'text-grey-text'
                        }`}
                    onClick={() => handleClick(index)}
                >
                    {element}
                </div>
            ))}
        </div>
    )
}

export default MainBarItems;
import MainTableContent from "./MainTableContent"
import MainTableHeader from "./MainTableHeader"

const MainTable = () => {
    return (
        <div className='flex flex-col mx-7 px-6 pt-5 pb-8 bg-[#F7F9FB] rounded-2xl mt-14'>
            <MainTableHeader />
            <MainTableContent />
        </div>
    )
}

export default MainTable;
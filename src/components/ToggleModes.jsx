import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"

const ToggleModes = ({isDarkMode, setIsDarkMode}) => {
    return (
        <>
            <div className=" flex items-center justify-center cursor-pointer" onClick={() => setIsDarkMode(!isDarkMode)}>
                            <div className="flex items-center justify-center border-[1px] dark:border-white  border-black w-16  h-9  rounded-full duration-200 ease-in-out dark:bg-black bg-white ">
                                <div
                                className={`relative top-0 w-6 h-6 rounded-full transition duration-200 ease-in-out flex items-center justify-center dark:bg-white  bg-black ${
                                isDarkMode ? 'left-3' : 'right-3'
                                }`}>
                            {isDarkMode ? <MdDarkMode className='text-black text-2xl'/> : <MdOutlineLightMode className='text-white text-xl'/>}
                        </div>
                        </div>
                                            
                    </div>
        </>
    )
}

export default ToggleModes
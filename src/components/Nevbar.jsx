import React, { useEffect } from 'react'

function Nevbar({ manuOpen, setmanuOpen }) {
    // for checking if the menu is open or not
    useEffect(() => {
        document.body.style.overflowY = manuOpen ? "hidden" : "";
    }, [manuOpen])
    return (
        <div className='fixed top-0 w-full z-40  bg-[rgb(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg' >
            <div className='max-w-5xl mx-auto px-4'>

                <div className='flex justify-between items-center h-16'>

                    <a href="#Home" className='font-mono font-bold text-white hover:scale-105 transition-all duration-500 ease-in-out' >
                        anas.<span className='text-blue-500'>saifi</span>
                    </a>

                    <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden'
                        onClick={() => setmanuOpen(!manuOpen)}>
                        &#9776;

                    </div>

                    <div className='hidden md:flex items-center space-x-5 font-mono' >
                        <a href="#Home" className='text-gray-300 hover:text-white hover:scale-105 transition-all duration-500 ease-in-out' >Home</a>
                        <a href="#About" className='text-gray-300 hover:text-white  hover:scale-105 transition-all duration-500 ease-in-out'>About</a>
                        <a href="#Project" className='text-gray-300 hover:text-white  hover:scale-105 transition-all duration-500 ease-in-out'>Project</a>
                        <a href="#Contact" className='text-gray-300 hover:text-white  hover:scale-105 transition-all duration-500 ease-in-out'>Contact</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Nevbar
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

function Nevbar({ manuOpen, setmanuOpen }) {
    const position = useSelector(state => state.position.value);

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

                    {
                        !manuOpen ? <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden'
                            onClick={() => setmanuOpen(!manuOpen)}>
                            &#9776;
                        </div> : <></>
                    }


                    <div className='hidden md:flex items-center space-x-5 font-mono' >
                        {["Home", "About", "Project", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className={`relative text-gray-300 hover:text-white transition-all duration-500 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-500 ${position === item ? 'after:w-full text-white' : ''
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Nevbar
import React from 'react'

function MobileManue({ manuOpen, setmanuOpen }) {
    // for checking if the menu is open or not
    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col justify-center items-center 
                    transition-all duration-500 ease-in-out
                     ${manuOpen ? "h-screen opacity-100 pointer-events-auto" :
                "h-0 opacity-0 pointer-events-none"}
                md:hidden`}>

            <button className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer'
                onClick={() => setmanuOpen(false)}
                aria-label='close manue'
            >
                &times;
            </button>

            <a href="#Home" onClick={() => setmanuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500 ease-in-out 
                ${manuOpen ? "opacity-100 translate-y-0 scale-100" :
                            "opacity-0 translate-y-5 scale-95"}`}>Home</a>
            <a href="#About" onClick={() => setmanuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500 ease-in-out 
                ${manuOpen ? "opacity-100 translate-y-0 scale-100" :
                            "opacity-0 translate-y-5 scale-95"}`}>About</a>
            <a href="#Contact" onClick={() => setmanuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500 ease-in-out 
                ${manuOpen ? "opacity-100 translate-y-0 scale-100" :
                            "opacity-0 translate-y-5 scale-95"}`}>Contact</a>

        </div>
    )
}

export default MobileManue
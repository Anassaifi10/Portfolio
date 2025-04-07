import React from 'react'
import RevealOnScroal from '../RevealOnScroal'

function Project() {
    return (
        <RevealOnScroal>
            <section id='Project' className='min-h-screen flex items-center justify-center py-20'>

                <div className='max-w-5xl mx-auto px-4'>
                    <h2 className='text-center text-3xl font-bold mb-8 font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'>Featured Project</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-0 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition ease-in-out duration-500'>
                            <h3 className='text-xl font-bold mb-2'>Social Media App</h3>
                            <p className='text-gray-400 text-sm mb-4'>
                                This project is a real-time social media application built using SignalR in .NET and Angular for establishing live data connections. TailwindCSS was used for designing a responsive and modern user interface.
                            </p>
                            <div>
                                {
                                    ["Angular", ".Net core", "SignalR"].map((skil, ind) =>
                                    (
                                        <span key={ind}
                                            className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>
                                            {skil}
                                        </span>
                                    ))
                                }
                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <a href="#Xyz">View Project 🔗 {" "}</a>
                            </div>
                        </div>

                        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-0 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition ease-in-out duration-500'>
                            <h3 className='text-xl font-bold mb-2'>Social Media App</h3>
                            <p className='text-gray-400 text-sm mb-4'>
                                This project is a real-time social media application built using SignalR in .NET and Angular for establishing live data connections. TailwindCSS was used for designing a responsive and modern user interface.
                            </p>
                            <div>
                                {
                                    ["Angular", ".Net core", "SignalR"].map((skil, ind) =>
                                    (
                                        <span key={ind}
                                            className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>
                                            {skil}
                                        </span>
                                    ))
                                }
                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <a href="#Xyz">View Project 🔗 {" "}</a>
                            </div>
                        </div>

                        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-0 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition ease-in-out duration-500'>
                            <h3 className='text-xl font-bold mb-2'>Social Media App</h3>
                            <p className='text-gray-400 text-sm mb-4'>
                                This project is a real-time social media application built using SignalR in .NET and Angular for establishing live data connections. TailwindCSS was used for designing a responsive and modern user interface.
                            </p>
                            <div>
                                {
                                    ["Angular", ".Net core", "SignalR"].map((skil, ind) =>
                                    (
                                        <span key={ind}
                                            className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>
                                            {skil}
                                        </span>
                                    ))
                                }
                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <a href="#Xyz">View Project 🔗 {" "}</a>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </RevealOnScroal>
    )
}

export default Project
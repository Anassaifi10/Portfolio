import React from 'react'

function ProjectCard({ title, Description, teckstack, Urls }) {
    return (
        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-0 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition ease-in-out duration-500'>
            <h3 className='text-xl font-bold mb-2'>{title}</h3>
            <p className='text-gray-400 text-sm mb-4'>
                {Description}
            </p>
            <div>
                {
                    teckstack.map((skil, ind) =>
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
                <p>View Project </p>
                <div className='flex gap-5'>
                    {Urls.map((Urls, index) => (
                        <a href={Urls} key={index} target='_blank'>🔗 {" "}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
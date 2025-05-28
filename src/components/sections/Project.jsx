import React from 'react'
import RevealOnScroal from '../RevealOnScroal'
import { ProjectInfo } from '../../constent/ProjectData'
import ProjectCard from '../ProjectCard'

function Project() {
    return (
        <RevealOnScroal>
            <section id='Project' className='min-h-screen flex items-center justify-center py-20'>

                <div className='max-w-5xl mx-auto px-4'>
                    <h2 className='text-center text-3xl font-bold mb-10 font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'>Featured Project</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            ProjectInfo.map((projectInfo,ind)=>(<ProjectCard 
                                Description={projectInfo.Description}
                                key={ind}
                                Urls={projectInfo.Urls}
                                teckstack={projectInfo.techstack} title={projectInfo.title} />))
                        }
                    </div>
                </div>


            </section>
        </RevealOnScroal>
    )
}

export default Project
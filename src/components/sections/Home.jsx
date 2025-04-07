import React from 'react'
import RevealOnScroal from '../RevealOnScroal'

function Home() {
  return (
    <RevealOnScroal>
    <section id='Home' className='min-h-screen flex items-center justify-center relative '>

      <div className=' flex flex-col justify-center  sm:gap-y-7 gap-y-10 text-center z-10 px-4'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold gradient-text leading-tight 
      font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-500'>Hi I'm Anas Saifi </h1>

        <p className='text-gray-400 text-lg max-w-lg mx-auto'>I am a full-stack developer with expertise in .NET for backend development and Angular, React, and Next.js for front-end solutions.
          I also have a basic understanding of Azure,
          allowing me to integrate cloud-based services effectively into web applications.</p>

        <div className='flex justify-around my-10'>
          <a href="#Project" className='bg-blue-500 text-white py-3 px-6 rounded font-medium hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all ease-in-out'>View Projects</a>
          <a href="#Project" className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 transition-all ease-in-out'>Contect Me</a>
        </div>
      </div>
    </section>
    </RevealOnScroal>
  )
}

export default Home
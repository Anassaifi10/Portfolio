import React from 'react'
import RevealOnScroal from '../RevealOnScroal';

function About() {

  const frontendSkils = ["HTML", "CSS", "Tailwindcss", "JavaScript", "TypeScript", "React", "Angular", "Redux", "Next.js", "Vue.js"];
  const backendSkills = [".NET", ".NET Core", "Node.js", "Express", "SQL Server", "MongoDB", "Azure"];

  return (
    <RevealOnScroal>
      <section id='About' className='min-h-screen flex items-center justify-center gap-2 py-20'>
        <div className='max-w-3xl mx-auto px-4 text-center'>

          <h2 className='text-3xl font-bold mb-8 font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'>About Me</h2>

          <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-0.5 transition-all duration-500
        hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] ease-in-out
        '>
            <p className='text-gray-300 text-sm mb-6'>
              Passionate about web development, with expertise in building scalable applications and creating innovative solutions.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

              <div className='rounded-xl p-6 hover:translate-y-1 transition-all duration-500 ease-in-out'>
                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                <div className='flex flex-wrap gap-2'>
                  {
                    frontendSkils.map((skil, ind) => (
                      <span key={ind}
                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                        {skil}
                      </span>
                    ))
                  }
                </div>
              </div>

              <div className='rounded-xl p-6 hover:translate-y-1 transition-all duration-500 ease-in-out'>
                <h3 className='text-xl font-bold mb-4'>Backend</h3>
                <div className='flex flex-wrap gap-2'>
                  {
                    backendSkills.map((skil, ind) => (
                      <span key={ind}
                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                        {skil}
                      </span>
                    ))
                  }
                </div>
              </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
              <div className='p-4 rounded-xl border-white/10 border hover:translate-y-1 transition-all duration-500 ease-in-out'>
                <h3 className='text-xl font-bold'>📚 Education</h3>
                <ul className='text-left text-xs list-disc list-inside text-gray-400  flex flex-col gap-3'>
                  <li >
                    <strong className='text-white'> B.Tech in computer Science</strong> - Dev Bhoomi Uttrakhand University (2020-2024)
                  </li>
                  <li>
                    <strong className='text-white'>12th</strong> - CBSE (2020)
                  </li>
                  <li>
                    <strong className='text-white'>12th</strong> - CBSE (2020)
                  </li>
                </ul>
              </div>
              <div className='p-4 rounded-xl border-white/10 border hover:translate-y-1 transition-all duration-500 ease-in-out'>
                <h3 className='text-xl font-bold'>💼 Work Experience</h3>

                <div className='text-left text-xs text-gray-400'>
                  <h4 className=' mb-1'>
                    <strong className='text-white'>Software Engineer At Defacto Infotech (Mohali)</strong> - March 2024 to Current
                  </h4>
                  <p >
                    Worked on developing and maintaining web applications using .NET Core for backend services and Angular and React for frontend development. Collaborated with cross-functional teams to deliver scalable and efficient solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroal>
  )
}

export default About
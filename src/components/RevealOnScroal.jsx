import React from 'react'
import { useRef,useEffect } from 'react'

function RevealOnScroal({children}) {
  // for revealing the component on scroll
  
  const ref=useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entries]) => {
            if(entries.isIntersecting){
                ref.current.classList.add("visible")
            }
        },{threshold:0.2,rootMargin:"0px 0px -50% 0px"})
        if(ref.current) {
            observer.observe(ref.current)
        }
        console.log("yes")
        return () => observer.disconnect()
    })

  return (
    <div ref={ref} className='reveal'>
      {children}
    </div>
  )
}

export default RevealOnScroal
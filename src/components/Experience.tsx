import Plane from '@/scripts/wave/gl/Plane'
import { useEffect } from 'react'

export default function Experience() {
  useEffect(() => {
    // document.body.classList.remove('loading');
    const elements = document.querySelectorAll('.js-plane')
    elements.forEach(el => new Plane().init(el, 1))
    // const smooth = new Smooth()
  }, [])

  return (
    <div className='experience-container relative flex h-screen w-screen gap-8 overflow-hidden p-16 text-sky-200'>
      <figure className='js-plane fixed inset-[-100px] z-[29]'>
        <img
          className='item__img absolute inset-0 hidden w-full bg-cover'
          src='img/samurai-2.jpeg'
          alt='Some image'
        />
      </figure>
      <div className='flex h-full max-w-md flex-1 flex-col items-center justify-center pb-12 text-justify font-light'>
        <p
          className='z-50 w-full text-2xl font-black uppercase leading-10'
          style={{
            fontFamily: 'vortice-concept, sans-serif',
            filter: 'drop-shadow(0 0 4px #1528d2aa)'
          }}
        >
          TGL Solutions
        </p>
        <p className='z-50 text-base'>
          I started as a{' '}
          <span className='text-lime-400'>
            FullStack Developer intern in March 2022
          </span>{' '}
          and transitioned to{' '}
          <span className='text-lime-400'>full-time in April 2022</span>. I work
          for a company that provides outsourcing services and my
          responsibilities include participating in product development
          projects.
        </p>
        <p className='z-50 mt-4 text-base'>
          Throughout my professional career, I have acquired extensive and
          varied experience in software development. This experience encompasses
          a range of different projects, including both in-house development
          work and outsourced work for third-party clients. I have been involved
          in a multitude of projects, each utilizing different technologies and
          methodologies, each of which has presented its own unique challenges.
          I have worked across a variety of software development areas, from
          FrontEnd development to BackEnd development and real-time
          communication management. This experience has made me an adaptable and
          dependable developer, capable of providing high-quality software
          solutions for a broad range of projects.
        </p>
      </div>
      <div className='relative z-40 flex-1'>
        <div className='absolute left-1/2 top-1/2 flex h-44 w-96 translate-x-[-100%] translate-y-[-100%] items-center justify-center bg-blue-500/20 transition-all duration-700 hover:h-1/2 hover:w-1/2 hover:bg-blue-500/90'>
          <div
            className='text-xl'
            style={{
              filter: 'drop-shadow(0 0 4px #1528d2aa)'
            }}
          >
            Travel booking system
          </div>
        </div>
        <div className='absolute left-1/2 top-1/2 flex h-72 w-56 translate-x-[-100%] items-center justify-center bg-red-500/20 transition-all duration-700 hover:h-1/2 hover:w-1/2 hover:bg-red-500/90'>
          <div
            className='text-xl'
            style={{
              filter: 'drop-shadow(0 0 4px #1528d2aa)'
            }}
          >
            House Inspection System
          </div>
        </div>
        <div className='absolute left-1/2 top-[50%] flex h-60 w-80 items-center justify-center bg-violet-500/20 transition-all duration-700 hover:h-1/2 hover:w-1/2 hover:bg-violet-500/90'>
          <div
            className='text-xl'
            style={{
              filter: 'drop-shadow(0 0 4px #1528d2aa)'
            }}
          >
            House Inspection System
          </div>
        </div>
        <div className='absolute left-1/2 top-[50%] flex h-72 w-72 translate-y-[-100%] items-center justify-center bg-gray-500/20 transition-all duration-700 hover:h-1/2 hover:w-1/2 hover:bg-gray-500/90'>
          <div
            className='text-xl'
            style={{
              filter: 'drop-shadow(0 0 4px #1528d2aa)'
            }}
          >
            House Inspection System
          </div>
        </div>
      </div>
    </div>
  )
}

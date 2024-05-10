import { useEffect } from 'react'

export default function Experience() {
  useEffect(() => {
    // document.body.classList.remove('loading');
    // const elements = document.querySelectorAll('.js-plane')
    // elements.forEach((el, index) => new Plane().init(el, index))
    // const smooth = new Smooth()
  }, [])
  return (
    <div className='experience-container relative h-screen w-screen p-16 text-sky-200'>
      <div className='flex h-full max-w-md flex-1 pb-12 flex-col items-center justify-center text-justify font-light'>
        <p
          className='z-50 w-full text-2xl font-black uppercase leading-10 text-transparent'
          style={{
            fontFamily: 'vortice-concept, sans-serif',
            filter: 'drop-shadow(0 0 4px #1528d2aa)',
            WebkitTextStroke: '0.5px white'
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

      {/* <div className='absolute bottom-0 right-0 h-96 w-96 bg-white/20 '>
        <figure className='item__fig js-plane'>
          <div className='aspect-video'></div>
          <img className='item__img hidden' src='img/13.jpg' alt='Some image' />
        </figure>
      </div> */}
    </div>
  )
}

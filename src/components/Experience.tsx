export default function Experience() {
  return (
    <div className='relative h-screen w-screen text-sky-400'>
      <div className='detail-skill absolute left-16 top-24 mr-10 flex h-fit w-[40%] flex-1 flex-col items-center justify-center text-justify font-light'>
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
          I started as a Full-Stack Developer intern in March 2022 and
          transitioned to full-time in April 2022. I work for a company that
          provides outsourcing services and my
          responsibilities include participating in product development
          projects.
        </p>
      </div>
    </div>
  )
}

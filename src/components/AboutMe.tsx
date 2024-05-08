export default function AboutMe() {
  return (
    <div className='content flex h-full w-full items-center gap-20 px-8 py-8 text-gray-100'>
      <div className='mr-10 flex h-full w-fit max-w-lg flex-col items-center justify-center bg-black p-8'>
        <p
          className='z-50 text-3xl font-black uppercase leading-10'
          style={{
            fontFamily: 'vortice-concept, sans-serif',
            filter: 'drop-shadow(0 0 4px #1528d2aa)'
            // WebkitTextStroke: '0.5px white'
          }}
        >
          Nguyen Duc Khang
        </p>
        <p className='z-50 mt-2 cursor-text text-justify text-lg font-light text-sky-400'>
          I'm a <span className='text-lime-500'>Full-Stack Developer</span> with{' '}
          <span className='text-lime-500'>2+ years</span> of experience in
          creating scalable web applications. My skills include{' '}
          <span className='text-lime-500'>NodeJS</span> (
          <span className='text-lime-500'>NestJS</span>),{' '}
          <span className='text-lime-500'>ReactJS</span>(
          <span className='text-lime-500'>NextJS</span>),{' '}
          <span className='text-lime-500'>TypeScript</span>,{' '}
          <span className='text-lime-500'>RESTful APIs</span>,{' '}
          <span className='text-lime-500'>GraphQL</span>, and{' '}
          <span className='text-lime-500'>database technologies</span>. I'm
          passionate about building user-centric software with exceptional user
          experiences. My workflow is optimized through{' '}
          <span className='text-lime-500'>Git</span>,{' '}
          <span className='text-lime-500'>Docker</span>,{' '}
          <span className='text-lime-500'>AWS</span> and{' '}
          <span className='text-lime-500'>Agile/Scrum methodologies</span>. I'm
          seeking a challenging opportunity to contribute my skills to a
          fast-paced and innovative team.
        </p>
      </div>
      <div className='flex-1'>
        {/* <IconInnerShadowTopRightFilled size={32} fill='yellow' /> */}
      </div>
    </div>
  )
}

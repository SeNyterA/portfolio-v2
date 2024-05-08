import { Cursor1 } from '@/scripts/cursors/cursor1'
import { Cursor2 } from '@/scripts/cursors/cursor2'
import { Cursor3 } from '@/scripts/cursors/cursor3'
import { Cursor4 } from '@/scripts/cursors/cursor4'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { useMemo } from 'react'

export default function App() {
  console.count('App')

  const cusror = useMemo(() => {
    window.addEventListener('load', async () => {
      // await utils()
      new Cursor4(4)
      // new Cursor2(2)
    })
  }, [])

  return (
    <>
      <div className='flex h-screen w-screen items-center gap-20 px-8 py-8 text-gray-100'>
        <div
          className='absolute inset-0 z-10 h-screen w-screen'
          id='cursor-4'
        ></div>

        <div className='mr-10 flex h-full w-fit max-w-lg flex-col items-center justify-center bg-black p-8'>
          <p
            className='text-3xl font-black uppercase z-50'
            style={{
              fontFamily: 'vortice-concept, sans-serif',
              filter: 'drop-shadow(0 0 4px #1528d2aa)',
              WebkitTextStroke: '0.5px white'
            }}
          >
            Nguyen Duc Khang
          </p>
          <p className='mt-2 max-w-lg cursor-text text-justify text-lg font-light text-sky-400 z-50'>
            I'm a <span className='text-lime-500'>Full-Stack Developer</span>{' '}
            with <span className='text-lime-500'>2+ years</span> of experience
            in creating scalable web applications. My skills include{' '}
            <span className='text-lime-500'>NodeJS</span> (
            <span className='text-lime-500'>NestJS</span>),{' '}
            <span className='text-lime-500'>ReactJS</span>(
            <span className='text-lime-500'>NextJS</span>),{' '}
            <span className='text-lime-500'>TypeScript</span>,{' '}
            <span className='text-lime-500'>RESTful APIs</span>,{' '}
            <span className='text-lime-500'>GraphQL</span>, and{' '}
            <span className='text-lime-500'>database technologies</span>. I'm
            passionate about building user-centric software with exceptional
            user experiences. My workflow is optimized through{' '}
            <span className='text-lime-500'>Git</span>,{' '}
            <span className='text-lime-500'>Docker</span>,{' '}
            <span className='text-lime-500'>AWS</span> and{' '}
            <span className='text-lime-500'>Agile/Scrum methodologies</span>.
            I'm seeking a challenging opportunity to contribute my skills to a
            fast-paced and innovative team.
          </p>
        </div>
        <div className='flex-1'></div>
      </div>

      <div className='fixed left-16 top-8 flex h-14 items-center gap-2 z-50'>
        <p
          className='text-lg uppercase text-gray-100'
          style={{
            fontFamily: 'vortice-concept, sans-serif',
            WebkitTextStroke: '0.5px white',
            filter: 'drop-shadow(0 0 4px #1528d2aa)'
          }}
        >
          Se:Nyter'A
        </p>
        <div className='flex gap-2'></div>
      </div>

      <div
        className='fixed bottom-16 left-16 font-thin text-gray-200 z-50'
        style={{
          fontFamily: 'Attack, sans-serif',
          WebkitTextStroke: '0.5px white'
        }}
      >
        <p className='flex items-center'>About me</p>
        <p className='flex items-center'>Skills</p>
        <p className='flex items-center'>Experience</p>
        <p className='flex items-center'>Live workspace</p>
      </div>

      <div className='fixed bottom-32 right-16 flex h-60 flex-col items-center justify-center rounded-full text-white z-50'>
        <IconChevronUp size={16} className='text-gray-700' />
        <div
          className='relative h-full w-0.5 rounded bg-gray-700'
          style={{
            clipPath:
              'polygon(0% 0%, 100% 0%, 100% 25%, 0 25%, 0% 75%, 0 50%, 100% 50%, 100% 100%, 0% 100%)'
          }}
        ></div>
        <div className='absolute left-1/2 top-1/4 flex h-1/4 translate-x-[-50%] items-center justify-center text-xs font-light text-white'>
          <span className='translate-x-[-4px] translate-y-[-4px]'>2</span>/
          <span className='translate-x-[4px] translate-y-[4px]'>4</span>
        </div>

        <IconChevronDown size={16} className='text-gray-700' />
      </div>
    </>
  )
}

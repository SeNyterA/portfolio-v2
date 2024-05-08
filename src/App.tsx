import { Cursor1 } from '@/scripts/cursors/cursor1'
import { Cursor4 } from '@/scripts/cursors/cursor4'
import { initSlides } from '@/scripts/slide/demo2'
import {
  IconBookDownload,
  IconBrandGithub,
  IconChevronDown,
  IconChevronUp,
  IconCloudDownload,
  IconDownload,
  IconDownloadOff,
  IconFileDownload,
  IconInnerShadowTopRightFilled
} from '@tabler/icons-react'
import { useEffect } from 'react'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Skills from './components/Skills'

export default function App() {
  useEffect(() => {
    initSlides()
    new Cursor4('cursor4')
    new Cursor1('cursor1')
    // initTypeShuffle()
  }, [])

  return (
    <>
      <div className='slides relative'>
        <div className='slide absolute inset-0'>
          <div
            className='absolute inset-0 z-10 h-screen w-screen'
            id='cursor4'
          />
          <AboutMe />
        </div>
        <div className='slide absolute inset-0'>
          <div
            className='absolute inset-0 z-10 h-screen w-screen'
            id='cursor1'
          />
          <Skills />
        </div>

        <div className='slide absolute inset-0'>
          <Experience />
        </div>
        <div className='deco deco--4'></div>
        <div className='deco deco--4'></div>
      </div>

      <div className='fixed inset-x-16 top-8 z-50 flex h-14 items-center justify-between gap-2 text-white'>
        <p
          className='uppercase text-gray-100'
          style={{
            fontFamily: 'vortice-concept, sans-serif',
            WebkitTextStroke: '0.5px white',
            filter: 'drop-shadow(0 0 4px #1528d2aa)'
          }}
        >
          Se:Nyter'A
        </p>
        <div className='flex gap-2 text-lime-500'>
          {/* <IconFileDownload /> */}
          <p
            className='font-light'
            onClick={() => {
              window.open('/NguyenDucKhang.pdf')
            }}
          >
            CV
          </p>
        </div>
      </div>

      <div
        className='fixed bottom-16 left-16 z-50 font-thin text-gray-200'
        style={{
          fontFamily: 'Attack, sans-serif'
        }}
      >
        <p className='flex items-center opacity-70'>About me</p>
        <p className='flex items-center uppercase text-lime-500'>Skills</p>
        <p className='flex items-center opacity-70'>Experience</p>
        <p className='flex items-center opacity-70'>Live workspace</p>
      </div>

      <div className='fixed bottom-32 right-16 z-50 flex h-96 flex-col items-center justify-center rounded-full text-white'>
        <IconChevronUp size={16} className='text-gray-500' />
        <div className='relative h-full'>
          <div
            className='relative h-full w-0.5 rounded bg-gray-500'
            style={{
              clipPath:
                'polygon(0% 0%, 100% 0%, 100% 25%, 0 25%, 0% 75%, 0 50%, 100% 50%, 100% 100%, 0% 100%)'
            }}
          ></div>
          <div className='absolute left-1/2 top-1/4 flex h-1/4 translate-x-[-50%] items-center justify-center text-xs font-light text-white'>
            <span className='translate-x-[-4px] translate-y-[-4px]'>2</span>/
            <span className='translate-x-[4px] translate-y-[4px]'>4</span>
          </div>
        </div>

        <IconChevronDown size={16} className='text-gray-500' />

        <div className='mt-6 flex flex-col items-center justify-center gap-2 text-yellow-500'>
          <p
            className='rotate-180 font-light'
            style={{
              writingMode: 'vertical-rl',
              fontFamily: 'Attack, sans-serif'
            }}
          >
            Github
          </p>
          <IconBrandGithub size={16} className='rotate-[270deg]' />
        </div>
      </div>

      <div className='b-8 fixed left-2 z-50 flex translate-x-[-50%] items-center justify-center gap-1 text-yellow-400'>
        {/* <div className='mr-4 h-[1px] w-20 rounded bg-yellow-400'></div> */}
        {/* <IconInnerShadowTopRightFilled /> */}
        <p
          className='font-light'
          onClick={() => {
            window.open('/NguyenDucKhang.pdf')
          }}
        >
          Download CV
        </p>
        {/* <div className='ml-4 h-[1px] w-20 rounded bg-yellow-400'></div> */}
      </div>
    </>
  )
}

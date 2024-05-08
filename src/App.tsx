import { Cursor1 } from '@/scripts/cursors/cursor1'
import { Cursor2 } from '@/scripts/cursors/cursor2'
import { Cursor3 } from '@/scripts/cursors/cursor3'
import { Cursor4 } from '@/scripts/cursors/cursor4'
import { initTypeShuffle } from '@/scripts/typeShuffle'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { useLayoutEffect } from 'react'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

export default function App() {
  console.count('App')

  useLayoutEffect(() => {
    // window.addEventListener('load', async () => {
    // await utils()
    setTimeout(() => {
      new Cursor4(4)
      initTypeShuffle()
    }, 0)
    // })
  }, [])

  return (
    <>
      <div className='fixed inset-0 z-10 h-screen w-screen' id='cursor' />

      <AboutMe />
      <Skills />

      <div className='fixed left-16 top-8 z-50 flex h-14 items-center gap-2'>
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
        className='fixed bottom-16 left-16 z-50 font-thin text-gray-200'
        style={{
          fontFamily: 'Attack, sans-serif'
        }}
      >
        <p className='flex items-center'>About me</p>
        <p className='flex items-center'>Skills</p>
        <p className='flex items-center'>Experience</p>
        <p className='flex items-center'>Live workspace</p>
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
          {/* <IconBrandGithub /> */}
        </div>
      </div>

      {/* <div className='b-8 fixed bottom-8 right-[72px] z-50 flex items-center justify-center gap-1 text-yellow-400'>
        <div className='mr-4 h-[1px] w-20 rounded bg-yellow-400'></div>
        <IconInnerShadowTopRightFilled />
        <p
          className='font-light'
          onClick={() => {
            window.open('/NguyenDucKhang.pdf')
          }}
        >
          Download CV
        </p>
      </div> */}
    </>
  )
}

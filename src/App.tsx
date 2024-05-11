import { Cursor1 } from '@/scripts/cursors/cursor1'
import { Cursor4 } from '@/scripts/cursors/cursor4'
import {
  IconBrandGithub,
  IconChevronDown,
  IconChevronUp
} from '@tabler/icons-react'
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import { useEffect } from 'react'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Skills from './components/Skills'
import { Cursor3 } from './scripts/cursors/cursor3'
import { Slideshow } from './scripts/slide/demo2/slideshow'

gsap.registerPlugin(Observer)
export default function App() {
  useEffect(() => {
    let timeOut: NodeJS.Timeout
    const slides = document.querySelector('.slides')
    const slideshow = new Slideshow(slides as any)

    // const autoNext = gsap.to('#progress-bar', {
    //   bottom: '0%',
    //   duration: 10,
    //   ease: 'none',
    //   onRepeat: () => slideshow.next(),
    //   repeat: -1
    // })

    window.addEventListener('mousemove', () => {
      clearTimeout(timeOut)
      // autoNext.pause()
      // timeOut = setTimeout(() => {
      //   autoNext.resume()
      // }, 400)
    })

    Observer.create({
      type: 'wheel,touch,pointer',
      onDown: () => {
        slideshow.prev()
        // autoNext.restart()
      },
      onUp: () => {
        slideshow.next()
        // autoNext.restart()
      },

      wheelSpeed: -1,
      tolerance: 10
    })

    slideshow.on('onStartChange', ({ from, to }: any) => {
      console.log({
        from,
        to
      })
      gsap.to('#progress-bar-container', {
        duration: 0.8,
        clipPath: `polygon(0% 0%, 100% 0%, 100% ${to * 25}%, 0% ${to * 25}%, 0% ${(to + 1) * 25}%, 100% ${(to + 1) * 25}%, 100% 100%, 0% 100%)`
      })
    })

    new Cursor4('about-me')
    new Cursor1('skill')
    new Cursor3('experience')
  }, [])

  return (
    <>
      <div className='slides'>
        <div className='slide'>
          <div
            className='absolute inset-0 z-10 h-screen w-screen'
            id='about-me'
          />
          <AboutMe />
        </div>
        <div className='slide'>
          <div className='absolute inset-0 z-10 h-screen w-screen' id='skill' />
          <Skills />
        </div>

        <div className='slide'>
          <div
            className='absolute inset-0 z-10 h-screen w-screen'
            id='experience'
          />
          <Experience />
        </div>

        <div className='slide'>
          <div
            className='absolute inset-0 z-10 h-screen w-screen'
            id='cursor3'
          />
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
          <p
            className='cursor-pointer font-light'
            onClick={() => {
              window.open('/NguyenDucKhang.pdf')
            }}
          >
            CV
          </p>
        </div>
      </div>

      <div
        className='fixed bottom-16 left-16 z-50 font-light text-gray-200'
        style={{
          fontFamily: 'Attack, sans-serif'
        }}
      >
        <p className='flex items-center'>About me</p>
        <p className='flex items-center uppercase text-lime-500'>Skills</p>
        <p className='flex items-center'>Experience</p>
        <p className='flex items-center'>Live workspace</p>
      </div>

      <div className='fixed bottom-32 right-16 z-50 flex h-72 flex-col items-center justify-center rounded-full text-white'>
        <IconChevronUp size={16} className='text-gray-500' />
        <div className='relative h-full'>
          <div
            className='relative h-full w-0.5 rounded bg-gray-500'
            style={{
              clipPath:
                'polygon(0% 0%, 100% 0%, 100% 25%, 0% 25%, 0% 50%, 100% 50%, 100% 100%, 0% 100%)'
            }}
            id='progress-bar-container'
          >
            <div
              className='absolute inset-x-0 top-0 bg-white'
              id='progress-bar'
            ></div>
          </div>
          <div
            id='page-index'
            className='absolute left-1/2 top-1/4 flex h-1/4 translate-x-[-50%] items-center justify-center text-xs font-light text-white'
          >
            <span className='translate-x-[-4px] translate-y-[-4px]'>2</span>/
            <span className='translate-x-[4px] translate-y-[4px]'>4</span>
          </div>
        </div>

        <IconChevronDown size={16} className='text-gray-500' />

        <div className='mt-6 flex flex-col items-center justify-center gap-2 text-yellow-500'>
          <p
            className='rotate-180 font-thin'
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
        <p
          className='font-light'
          onClick={() => {
            window.open('/NguyenDucKhang.pdf')
          }}
        >
          Download CV
        </p>
      </div>
    </>
  )
}

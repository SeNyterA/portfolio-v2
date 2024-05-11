import '@tabler/icons-webfont/dist/tabler-icons.scss'
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import { Slideshow } from './scripts/slide/demo2/slideshow'
import Plane from './scripts/wave/gl/Plane'

gsap.registerPlugin(Observer)

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    let timeOut: NodeJS.Timeout
    const slides = document.querySelector('.slides')
    const slideshow = new Slideshow(slides as any)

    const elements = document.querySelector('#background-plane')
    const bgPlane = new Plane()
    bgPlane.init(elements, 1, '/img/samurai-2.jpeg')

    const autoNext = gsap.to('#progress-bar', {
      bottom: '0%',
      duration: 100,
      ease: 'none',
      onRepeat: () => slideshow.next(),
      repeat: -1
    })

    window.addEventListener('mousemove', () => {
      clearTimeout(timeOut)
      autoNext.pause()
      timeOut = setTimeout(() => {
        autoNext.resume()
      }, 400)
    })

    Observer.create({
      type: 'wheel,touch,pointer',
      onDown: () => {
        slideshow.prev()
        autoNext.restart()
      },
      onUp: () => {
        slideshow.next()
        autoNext.restart()
      },

      wheelSpeed: -1,
      tolerance: 10
    })

    slideshow.on('onStartChange', ({ to }: any) => {
      setTimeout(() => {
        bgPlane.setImgUrl(`/img/${to}.jpg`)
      }, 400)

      gsap.to('#page-index span:first-child', {
        duration: 0.4,
        opacity: 0.5,
        onComplete: () => {
          document.querySelector('#page-index span:first-child')!.textContent =
            `${to + 1}`
          gsap.to('#page-index span:first-child', {
            duration: 0.4,
            opacity: 1
          })
        }
      })

      gsap.to('#progress-bar-container', {
        duration: 0.8,
        clipPath: `polygon(0% 0%, 100% 0%, 100% ${to * 25}%, 0% ${to * 25}%, 0% ${(to + 1) * 25}%, 100% ${(to + 1) * 25}%, 100% 100%, 0% 100%)`
      })

      gsap.to('#page-index', {
        duration: 0.8,
        top: `${to * 25}%`
      })
    })

    // new Cursor4('about-me')
    // new Cursor1('skill')
    // new Cursor3('experience')
  }, 0)
})

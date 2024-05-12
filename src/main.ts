import '@tabler/icons-webfont/dist/tabler-icons.scss'
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import { Cursor4 } from './scripts/cursors/cursor4'
import { Slideshow } from './scripts/slide/demo2/slideshow'
import Plane from './scripts/wave/gl/Plane'
import { Cursor1 } from './scripts/cursors/cursor1'

gsap.registerPlugin(Observer)

window.addEventListener('DOMContentLoaded', () => {
  let timeOut: NodeJS.Timeout
  const slides = document.querySelector('.slides')
  const slideshow = new Slideshow(slides as any)
  const menuContainer = document.getElementById('menu-container')!
  const elements = document.querySelector('#background-plane')
  const bgPlane = new Plane()
  bgPlane.init(elements, 1, '/img/51.jpg')

  const autoNext = gsap.to('#progress-bar', {
    bottom: '0%',
    duration: 10,
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
      bgPlane.setImgUrl(`/img/${to + 51}.jpg`)
    }, 400)

    menuContainer.setAttribute('data-active-index', (to + 1).toString())

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

  document.getElementById('prev-page')!.addEventListener('click', () => {
    slideshow.prev()
  })
  document.getElementById('next-page')!.addEventListener('click', () => {
    slideshow.next()
  })
  Array.from(menuContainer.children).forEach((menuItem, index) => {
    menuItem.addEventListener('click', () => {
      slideshow.goTo(index)
    })
  })

  // const gridItems = document.querySelectorAll('[data-grid-item]')
  // gridItems.forEach(item => {
  //   // const oldGirdArea = item.style.gridArea
  //   item.addEventListener('mouseenter', () => {
  //     gsap.to(item, {
  //       duration: 0.5,
  //       // gridArea: '1 / 1 / 31 / 31',
  //       scale: 1.2,
  //       z: 1000,
  //       zIndex: 1000
  //     })
  //   })

  //   item.addEventListener('mouseleave', () => {
  //     gsap.to(item, {
  //       duration: 0.5,
  //       // gridArea: oldGirdArea,
  //       scale: 1,
  //       z: 1000,
  //       zIndex: 1000
  //     })
  //   })
  // })

  const aboutMeCusor = new Cursor1('about-me')

  // new Cursor1('skill')
  // new Cursor1('experience')
})

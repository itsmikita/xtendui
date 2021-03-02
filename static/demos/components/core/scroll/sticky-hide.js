import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--sticky-hide-top',
  mount: ({ object }) => {
    // vars

    const content = object.querySelector('.demo--sticky-hide-content')
    const stickyInner = object.querySelector('.demo--sticky-hide-top-main')

    // sticky

    ScrollTrigger.create({
      trigger: object,
      start: 'top top',
      endTrigger: 'html',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      onUpdate: self => {
        // scrolling-down depending on scroll direction
        if (!self.getVelocity()) return // skip on initial
        if (
          content.classList.contains('scrolling-down') &&
          content.classList.contains('scrolling-hide') &&
          self.direction < 0
        ) {
          content.classList.remove('scrolling-down')
          gsap.killTweensOf(content)
          gsap.to(content, { y: 0, duration: 0.5, ease: 'quart.out' })
        } else if (
          !content.classList.contains('scrolling-down') &&
          content.classList.contains('scrolling-hide') &&
          self.direction > 0
        ) {
          content.classList.add('scrolling-down')
          gsap.killTweensOf(content)
          gsap.to(content, {
            y: -stickyInner.offsetHeight,
            duration: 0.5,
            ease: 'quart.out',
          })
        }
      },
    })

    // hide depending on content

    ScrollTrigger.create({
      trigger: object,
      start: -1, // needs -1 because start trigger is sticky
      endTrigger: content,
      end: () => `bottom top+=${stickyInner.offsetHeight}`,
      onUpdate: self => {
        if (self.isActive && self.direction < 0 && content.classList.contains('scrolling-hide')) {
          content.classList.remove('scrolling-hide')
          gsap.killTweensOf(content)
          gsap.to(content, { y: 0, duration: 0.5, ease: 'quart.out' })
        } else if (!self.isActive && self.direction > 0 && !content.classList.contains('scrolling-hide')) {
          content.classList.add('scrolling-hide')
        }
      },
    })
  },
})

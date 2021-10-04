import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/* mountSticky */

const mountSticky = ({ ref }) => {
  // vars

  const sticky = ref.querySelector('.xt-sticky')
  const sub = sticky.querySelector('[data-node-sticky-hide-sub]')

  // .scrolling-hide (always before pin ScrollTrigger)

  /***/
  ScrollTrigger.create({
    trigger: sticky,
    start: -1, // needs -1 because start trigger is sticky
    end: () => `top top-=${sticky.offsetHeight}`,
    onUpdate: self => {
      // show/hide depending on position
      if (self.isActive && self.direction < 0 && sticky.classList.contains('scrolling-hide')) {
        sticky.classList.remove('scrolling-hide')
        gsap.killTweensOf(sticky)
        gsap.to(sticky, {
          marginTop: 0, // use marginTop because ScrollTrigger sets top and translate
          duration: 0.5,
          ease: 'quart.out',
        })
      } else if (!self.isActive && self.direction > 0 && !sticky.classList.contains('scrolling-hide')) {
        sticky.classList.add('scrolling-hide')
        gsap.killTweensOf(sticky)
        gsap.to(sticky, {
          marginTop: -(sub.offsetTop + sub.offsetHeight), // use marginTop because ScrollTrigger sets top and translate
          duration: 0.5,
          ease: 'quart.out',
        })
      }
    },
  })
  /***/

  // sticky

  /***/
  ScrollTrigger.create({
    trigger: sticky,
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })
  /***/

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--sticky-hide',
  mount: ({ ref }) => {
    const unmountSticky = mountSticky({ ref })

    // unmount

    return () => {
      unmountSticky()
    }
  },
})

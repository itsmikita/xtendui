import { Xt } from 'xtendui'
import 'xtendui/src/usability'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/* animation */

gsap.config({ force3D: false }) // smoother pixels animations

// accessibility

if (matchMedia('(prefers-reduced-motion: reduce), (update: slow)').matches) {
  // instant animations
  gsap.globalTimeline.timeScale(1000)
  // instant interactions
  Xt.durationTimescale = 1000
  // double auto time
  Xt.autoTimescale = 0.5
}

/* ScrollToPlugin fix stop scroll animation on user interaction */

const stopScrolling = () => {
  gsap.killTweensOf(document.scrollingElement)
}

addEventListener('touchstart', stopScrolling)
addEventListener('wheel', stopScrolling)

/* ScrollTrigger fix Xt.mount inside pin items and no refresh on vertical resize */

ScrollTrigger.config({
  // removed resize we trigger it manually
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
})

addEventListener('resize', e => {
  Xt.eventDelay({
    event: e,
    prefix: 'xtScrollTriggerRefresh',
    func: () => {
      ScrollTrigger.refresh()
    },
  })
})

/* ScrollTrigger fix pin items with Xt.mount */

ScrollTrigger.addEventListener('refresh', () => {
  const stickys = document.querySelectorAll('.xt-sticky')
  for (const sticky of stickys) {
    sticky.classList.add('xt-ignore')
  }
  requestAnimationFrame(() => {
    for (const sticky of stickys) {
      sticky.classList.remove('xt-ignore')
    }
  })
})

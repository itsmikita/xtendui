import { Xt } from '/src/xt.js'
import '/src/vars.js'
import '/src/addons/animation/scroll-to-anchor.js'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js'

Xt.mount.push({
  matches: 'a[href*="#"]',
  mount: object => {
    // init

    let self = new Xt.ScrollToAnchor(object, {})

    // change

    const eventChange = e => {
      // @FIX double initialization don't know why it does
      if (self.target) {
        const distanceY = 50
        const posY = self.target.offsetTop - self.scrollAdd - distanceY
        const durationY = Xt.vars.timeLarge
        gsap.to(window, { scrollTo: posY, duration: durationY, ease: 'quart.inOut' })
      }
    }

    self.object.addEventListener('change.xt.scrolltoanchor', eventChange)
  },
})

/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

import { Xt } from './xt'

/**
 * Scrollto
 */
class Scrollto {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    const self = this
    self.object = object
    self.optionsCustom = optionsCustom
    self.componentName = self.constructor.componentName
    self.componentNs = self.componentName.replace('-', '.')
    // init
    self.initVars()
    self.initLogic()
  }

  //
  // init
  //

  /**
   * init vars
   */
  initVars() {
    const self = this
    // options
    self.optionsDefault = Xt.merge([self.constructor.optionsDefault, Xt.optionsGlobal[self.componentName]])
    self.optionsInitial = self.options = Xt.merge([self.optionsDefault, self.optionsCustom])
  }

  /**
   * init logic
   */
  initLogic() {
    const self = this
    const options = self.options
    // set self
    Xt.set(self.componentName, self.object, self)
    // namespace
    const uniqueId = Xt.dataStorage.get(self.object, 'xtUniqueId')
    Xt.dataStorage.set(self.object, 'xtUniqueId', uniqueId || Xt.getuniqueId())
    self.ns = `${self.componentName}-${Xt.dataStorage.get(self.object, 'xtUniqueId')}`
    // vars
    self.initial = true
    // class
    self.classes = options.class ? [...options.class.split(' ')] : []
    // prevent page hash on click anchors
    const changeHandler = Xt.dataStorage.put(
      self.object,
      `click/${self.ns}`,
      self.eventChange.bind(self).bind(self, false, null)
    )
    self.object.addEventListener('click', changeHandler, true)
    // scrollto
    const scrolltoHandler = Xt.dataStorage.put(window, `scrollto/${self.ns}`, self.eventScrollto.bind(self, {}))
    addEventListener(`scrollto.trigger.${self.componentNs}`, scrolltoHandler, true)
    // hash
    const hashHandler = Xt.dataStorage.put(
      window,
      `hashchange/${self.ns}`,
      self.eventChange.bind(self).bind(self, true, null)
    )
    addEventListener('hashchange', hashHandler)
    // scroll
    self.scrollers = [document.scrollingElement, ...document.querySelectorAll(options.scrollers)].reverse() // need reverse for proper activation
    for (const scroller of self.scrollers) {
      if (scroller) {
        const scrollHandler = Xt.dataStorage.put(
          scroller,
          `scroll/${self.ns}`,
          self.eventActivationHandler.bind(self).bind(self, scroller)
        )
        if (scroller === document.scrollingElement) {
          addEventListener('scroll', scrollHandler)
        } else {
          scroller.addEventListener('scroll', scrollHandler)
        }
      }
    }
    // document ready because on change page ajax
    Xt.ready(() => {
      // initial
      self.initStart()
      // keep the same level of raf for custom listener
      requestAnimationFrame(() => {
        // listener dispatch
        self.object.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
        self.initial = false
      })
    })
    // initialized class
    self.object.classList.add(`${self.componentName}-init`)
  }

  /**
   * init start
   * @param {Boolean} saveCurrents
   */
  initStart() {
    const self = this
    // initial activation
    for (const scroller of self.scrollers) {
      if (scroller) {
        self.eventActivationHandler(scroller)
      }
    }
    // initial scrollto
    self.eventStart()
  }

  //
  // methods
  //

  /**
   * start trigger current location hash
   */
  eventStart() {
    const self = this
    const options = self.options
    // hash trigger
    const hash = location.hash
    if (hash) {
      const el = self.object.querySelector(options.anchors.replace('{hash}', hash))
      if (el) {
        self.eventChange(false, el)
      }
    }
  }

  /**
   * scrollto
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el element
   * @param {Node|HTMLElement|EventTarget|Window} params.tr target
   * @param {Event} e
   */
  eventScrollto({ el = null, tr = null }, e = null) {
    const self = this
    const options = self.options
    // element
    el = el ?? e.target
    // not null and HTML element and not window
    if (el && el.nodeName && el !== window) {
      self.target = tr ?? el
      if (self.target) {
        // openauto.trigger.xt
        if (options.hash || el.getAttribute('data-xt-scrollto-hash')) {
          self.target.dispatchEvent(new CustomEvent('openauto.trigger.xt'))
        }
        // current scroll
        for (const scroller of self.scrollers) {
          if (scroller) {
            if (scroller.contains(self.target)) {
              self.scroller = scroller
              break
            }
          }
        }
        // force no hashchange
        self.hashchange = Xt.skiphash === true ? false : self.hashchange
        // vars
        self.position = options.position({ self })
        self.space = options.space({ self })
        self.duration = options.duration({ self })
        self.position = self.position - self.space
        // val
        const min = 0
        const max = self.scroller.scrollHeight - self.scroller.clientHeight
        self.position = self.position < min ? min : self.position
        self.position = self.position > max ? max : self.position
        // fix activate also if scroll position remains the same
        if (self.scroller.scrollTop === self.position) {
          self.scroller.dispatchEvent(new CustomEvent('scroll'))
        }
        // listener dispatch
        self.object.dispatchEvent(new CustomEvent(`scrollto.${self.componentNs}`))
      }
    }
  }

  /**
   * change
   * @param {Boolean} hashchange
   * @param {Node|HTMLElement|EventTarget|Window} el Change element
   * @param {Event} e
   */
  eventChange(hashchange = false, el = null, e = null) {
    const self = this
    const options = self.options
    // hashchange
    self.hashchange = false
    if (hashchange) {
      self.hashchange = true
      const hash = location.hash
      const elCheck = self.object.querySelector(options.anchors.replace('{hash}', hash))
      // do not listen to hash change when no hash on element
      if (elCheck) {
        if (options.hash || elCheck.getAttribute('data-xt-scrollto-hash')) {
          el = elCheck
        }
      }
    }
    // check because of event propagation
    el = el ?? e.target
    // not null and HTML element and not window
    if (el && el.nodeName && el !== window) {
      el = el.closest(options.anchors.replace('{hash}', '#'))
      if (el && el.matches(options.anchors.replace('{hash}', '#'))) {
        // event
        const loc = new URL(el.getAttribute('href'), location)
        if (loc.hash && loc.pathname === location.pathname) {
          if (!hashchange || location.hash === el.hash) {
            const hash = hashchange ? loc.hash : el.hash.toString()
            const tr = self.object.querySelector(hash)
            if (tr) {
              // prevent page hash on click anchors
              if (e) {
                e.preventDefault()
              }
              // current scroll
              for (const scroller of self.scrollers) {
                if (scroller) {
                  if (scroller.contains(tr)) {
                    self.scroller = scroller
                    break
                  }
                }
              }
              // prevent page hash with automatic scroll
              if (
                !hashchange &&
                (options.hash || el.getAttribute('data-xt-scrollto-hash')) &&
                location.hash !== el.hash
              ) {
                history.pushState({}, '', loc.hash)
              }
              // els
              let els = Array.from(self.object.querySelectorAll(options.anchors.replace('{hash}', '#')))
              // class
              for (const other of els) {
                other.classList.remove(...self.classes)
              }
              el.classList.add(...self.classes)
              // scrollto
              self.eventScrollto({ el, tr })
            }
          }
        }
      }
    }
  }

  /**
   * scroll activation handler
   * @param {Node|HTMLElement|EventTarget|Window} scroller Scroller element
   */
  eventActivationHandler(scroller) {
    const self = this
    const options = self.options
    // logic
    if (options.scrollActivation) {
      clearTimeout(Xt.dataStorage.get(scroller, `${self.ns}ScrollTimeout`))
      Xt.dataStorage.set(
        scroller,
        `${self.ns}ScrollTimeout`,
        setTimeout(() => {
          // handler
          self.eventActivation(scroller)
        }, options.scrollDelay)
      )
    }
  }

  /**
   * scroll activation
   * @param {Node|HTMLElement|EventTarget|Window} scroller Scroller element
   */
  eventActivation(scroller) {
    const self = this
    const options = self.options
    // scroll
    self.target = false
    self.scroller = scroller
    let found = false
    let scrollTop = self.scroller.scrollTop
    // fake scroll position if on bottom of the page
    const scrollMax = self.scroller.scrollHeight
    if (scrollTop + self.scroller.clientHeight >= scrollMax) {
      scrollTop = scrollMax
    }
    // anchors
    let els = Array.from(self.object.querySelectorAll(options.anchors.replace('{hash}', '#')))
    // loop
    for (const el of els) {
      // fix don't activate if elements is inside a inner scroller
      for (const scroller of self.scrollers) {
        if (scroller) {
          if (scroller === self.scroller) {
            break
          }
          if (scroller.contains(el)) {
            return
          }
        }
      }
      // event
      const loc = new URL(el.getAttribute('href'), location)
      if (loc.hash) {
        self.target = document.querySelector(loc.hash)
        if (self.target) {
          // vars
          const position = options.position({ self })
          const space = options.space({ self })
          // check if activating
          if (scrollTop >= Math.floor(position - space)) {
            // loop multiple els of
            const matches = options.anchors.replace('{hash}', loc.hash)
            const currents = els.filter(x => x.matches(matches))
            found = !!currents.length
            // reset others
            for (const other of els.filter(x => !currents.includes(x))) {
              other.classList.remove(...self.classes)
            }
            // class
            for (const current of currents) {
              if (self.classes.length && !current.classList.contains(...self.classes)) {
                current.classList.add(...self.classes)
              }
            }
          }
        }
      }
    }
    // reset others when not found anchors and found target
    if (!found && self.target) {
      for (const other of els) {
        other.classList.remove(...self.classes)
      }
    }
  }

  //
  // util
  //

  /**
   * reinit
   */
  reinit() {
    const self = this
    // reinit
    self.initLogic()
  }

  /**
   * destroy
   */
  destroy() {
    const self = this
    // remove events
    const changeHandler = Xt.dataStorage.get(self.object, `click/${self.ns}`)
    self.object.removeEventListener('click', changeHandler)
    const hashHandler = Xt.dataStorage.get(window, `hashchange/${self.ns}`)
    removeEventListener('hashchange', hashHandler)
    for (const scroller of self.scrollers) {
      if (scroller) {
        let scrollHandler = Xt.dataStorage.get(scroller, `scroll/${self.ns}`)
        scroller.removeEventListener('scroll', scrollHandler)
      }
    }
    // initialized class
    self.object.classList.remove(`${self.componentName}-init`)
    // set self
    Xt.remove(self.componentName, self.object)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent(`destroy.${self.componentNs}`))
  }

  //
}

//
// options
//

Scrollto.componentName = 'xt-scrollto'
Scrollto.optionsDefault = {
  // elements
  anchors: '[href*="{hash}"]',
  // class
  class: 'on',
  // event
  scrollActivation: true,
  scrollDelay: 150,
  hash: false,
  // scroll
  scrollers: '.xt-overlay:not(.xt-overlay-disabled)',
  position: ({ self }) => {
    const rect = self.target.getBoundingClientRect()
    let position = rect.top + self.scroller.scrollTop
    if (self.scroller !== document.scrollingElement) {
      const rectScrollElement = self.scroller.getBoundingClientRect()
      position = position - rectScrollElement.top
    }
    return position
  },
  space: () => {
    return 0
  },
  duration: () => {
    return 0
  },
}

//
// export
//

Xt.Scrollto = Scrollto

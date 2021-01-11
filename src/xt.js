/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2020 Riccardo Caroli
 * @license MIT (https://github.com/minimit/xtendui/blob/master/LICENSE)
 */

import './polyfill.js'

//
// constructor
//

export const Xt = {}

//
// vars
//

Xt.mount = []
Xt.unmount = []
Xt.currents = {} // Xt currents based on namespace (so shared between Xt objects)
Xt.optionsGlobal = {}
Xt.scrollDelay = false
Xt.resizeDelay = 250
Xt.medialoadedDelay = 250
Xt.stickyIndex = 800
Xt.scrollRestoration = 'auto'
Xt.focusables = 'a, button, details, input, iframe, select, textarea, .btn-close'
Xt.supportScroll = typeof window === 'undefined' ? false : 'onscroll' in window && !/(gle|ing)bot/.test(navigator.userAgent)
Xt.durationTimescale = matchMedia('(prefers-reduced-motion: reduce), (update: slow)').matches ? 1000 : 1
Xt.autoTimescale = 1
Xt.debug = typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development'

//
// debug
//

if (window.self === window.top && Xt.debug) {
  requestAnimationFrame(() => {
    console.debug(
      '%cXt.debug activated, to suppress set "Xt.debug = false" or set NODE_ENV="production"',
      'font-weight:bold; color: white; background-color: #0078ff; padding: 6px 10px;'
    )
    // images
    Xt.mount.push({
      ignore: false,
      matches: 'img[src]:not([src^="data:"])',
      mount: ({ object }) => {
        // loading
        const loading = object.getAttribute('loading')
        if (!loading) {
          console.warn('Xt.debug: detected an "image" without "loading" attribute', object)
        }
        // alt
        const alt = object.getAttribute('alt')
        if (!alt && alt !== '') {
          console.warn('Xt.debug: detected an "image" without "alt" attribute', object)
        }
      },
    })
    // input
    Xt.mount.push({
      ignore: false,
      matches: 'input:not([type="hidden"]), select, textarea',
      mount: ({ object }) => {
        // label
        const labels = object.labels
        const label = object.getAttribute('aria-label') || object.getAttribute('aria-labelledby')
        if (!labels.length && (!label || label === '')) {
          console.warn('Xt.debug: detected an "input" without "label" or "aria-label" or "aria-labelledby"', object)
        }
      },
    })
    // links
    Xt.mount.push({
      ignore: false,
      matches: 'a[href]',
      mount: ({ object }) => {
        // title
        const text = object.textContent.trim()
        const title = object.title
        const label = object.getAttribute('aria-label') || object.getAttribute('aria-labelledby')
        if (!text.length && (!title || title === '') && (!label || label === '')) {
          console.warn('Xt.debug: detected a "link" without "textContent" or "title" or "aria-label" or "aria-labelledby"', object)
        }
        // target
        const target = object.getAttribute('target')
        if (target && target.toLowerCase() === '_blank') {
          if (object.hostname.length && location.hostname !== object.hostname) {
            const rel = object.getAttribute('rel')
            if (!rel || rel === '' || (!rel.toLowerCase().indexOf('noopener') && !rel.toLowerCase().indexOf('noreferrer'))) {
              console.warn('Xt.debug: detected a "link" with target="_blank" without rel="noopener" or rel="noreferrer"', object)
            }
          }
        }
      },
    })
  })
}

//
// initialization
//

/**
 * ready
 * @param {Function} fnc Function to execute on dom ready
 */
Xt.ready = fnc => {
  if (document.readyState === 'complete') {
    requestAnimationFrame(() => {
      fnc()
    })
  } else {
    document.addEventListener('readystatechange', () => {
      if (document.readyState === 'complete') {
        requestAnimationFrame(() => {
          fnc()
        })
      }
    })
  }
}

/**
 * init
 */
Xt.ready(() => {
  document.querySelector('body').classList.add('xt-ready')
  if (!Xt.supportScroll) {
    document.querySelector('body').classList.add('xt-noscroll')
  }
  Xt.setScrollbarWidth()
  Xt.innerHeightSet()
  Xt.mountCheck(document.documentElement)
  Xt.observer.disconnect()
  Xt.observer.observe(document.documentElement, {
    characterData: false,
    attributes: false,
    childList: true,
    subtree: true,
  })
})

//
// observer
//

/**
 * observer
 */
Xt.observer = new MutationObserver(mutationsList => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // added
      for (const added of mutation.addedNodes) {
        if (added.nodeType === 1) {
          Xt.mountCheck(added)
        }
      }
      // removed
      for (const removed of mutation.removedNodes) {
        if (removed.nodeType === 1) {
          Xt.unmountCheck(removed)
        }
      }
    }
  }
})

/**
 * mountCheck
 * @param {Node|HTMLElement|EventTarget|Window} added
 */
Xt.mountCheck = (added = document.documentElement) => {
  for (const mount of Xt.mount) {
    const matches = mount.matches
    // ignore
    const ignoreStr = mount.ignore ? mount.ignore : mount.ignore === false ? false : '.xt-ignore'
    if (ignoreStr) {
      const ignore = added.closest(ignoreStr)
      if (ignore) {
        Xt.ignoreOnce(ignore) // @FIX ignore once for mount when moving
        continue
      }
    }
    // check
    const objects = []
    if (added.matches(matches)) {
      objects.push(added)
    }
    for (const object of added.querySelectorAll(matches)) {
      objects.push(object)
    }
    // call
    if (objects.length) {
      for (const [index, object] of objects.entries()) {
        // @FIX multiple initialization
        mount.done = mount.done ? mount.done : []
        if (mount.done.includes(object)) {
          return
        }
        mount.done.push(object)
        // call
        const call = mount.mount({ object, mount, index, matches })
        // destroy
        if (call) {
          Xt.unmount.push({
            object: object,
            unmount: call,
            unmountRemove: () => {
              // @FIX multiple initialization
              mount.done = mount.done.filter(x => x !== object)
              // unmount remove
              Xt.unmount = Xt.unmount.filter(x => {
                return x.object !== object && x.matches !== matches
              })
            },
          })
        }
      }
    }
  }
}

/**
 * unmountCheck
 * @param {Node|HTMLElement|EventTarget|Window} removed
 */
Xt.unmountCheck = (removed = document.documentElement) => {
  for (const unmount of Xt.unmount) {
    // check
    if (removed === unmount.object || removed.contains(unmount.object)) {
      if (unmount.object.closest('.xt-ignore')) {
        return
      }
      // call
      unmount.unmount(unmount)
      unmount.unmountRemove()
    }
  }
}

//
// component
//

/**
 * set component
 * @param {String} name Component name
 * @param {Node|HTMLElement|EventTarget|Window} element Component's element
 * @param {Object} self Component' self
 */
Xt.set = (name, element, self) => {
  Xt.dataStorage.set(element, name, self)
}

/**
 * get component
 * @param {String} name Component name
 * @param {Node|HTMLElement|EventTarget|Window} element Component's element
 * @return {Object}
 */
Xt.get = (name, element) => {
  return Xt.dataStorage.get(element, name)
}

/**
 * remove component
 * @param {String} name Component name
 * @param {Node|HTMLElement|EventTarget|Window} element Component's element
 * @return {Object}
 */
Xt.remove = (name, element) => {
  return Xt.dataStorage.remove(element, name)
}

//
// dataStorage
// map storage for HTML elements
//

Xt.dataStorage = {
  /**
   * properties
   */
  _storage: new Map(),

  /**
   * set key/obj pair on element's map
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {String} key
   * @param {*} obj
   * @return {*}
   */
  set: (el, key, obj) => {
    // new map if not already there
    if (!Xt.dataStorage._storage.has(el)) {
      Xt.dataStorage._storage.set(el, new Map())
    }
    // set
    const getEl = Xt.dataStorage._storage.get(el)
    getEl.set(key, obj)
    // return
    return getEl.get(key)
  },

  /**
   * put key/obj pair on element's map, return old if exist already
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {String} key
   * @param {*} obj
   * @return {*}
   */
  put: (el, key, obj) => {
    // new map if not already there
    if (!Xt.dataStorage._storage.has(el)) {
      Xt.dataStorage._storage.set(el, new Map())
    }
    // return if already set
    const getEl = Xt.dataStorage._storage.get(el)
    const getKey = getEl.get(key)
    if (getKey) {
      return getKey
    }
    // set
    getEl.set(key, obj)
    // return
    return getEl.get(key)
  },

  /**
   * get obj from key on element's map
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {String} key
   * @return {*}
   */
  get: (el, key) => {
    const getEl = Xt.dataStorage._storage.get(el)
    // null if empty
    if (!getEl) {
      return null
    }
    // return
    return getEl.get(key)
  },

  /**
   * get all obj/key on element's map
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @return {*}
   */
  getAll: el => {
    const getEl = Xt.dataStorage._storage.get(el)
    // null if empty
    if (!getEl) {
      return null
    }
    // return
    return getEl
  },

  /**
   * has key on element's map
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {String} key
   * @return {Boolean}
   */
  has: (el, key) => {
    // return
    return Xt.dataStorage._storage.get(el).has(key)
  },

  /**
   * remove element's map key
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {String} key
   * @return {Boolean}
   */
  remove: (el, key) => {
    const getEl = Xt.dataStorage._storage.get(el)
    // null if empty
    if (!getEl) {
      return null
    }
    // remove
    const ret = getEl.delete(key)
    // remove storage if empty
    if (getEl.size === false) {
      Xt.dataStorage._storage.delete(el)
    }
    // return
    return ret
  },
}

//
// scrollbar
// util to remember scrollbar state
//

Xt.scrollbar = {
  /**
   * properties
   */
  currents: [],

  /**
   * get scrollbar currents
   * @return {Array} Currents
   */
  get: () => {
    return Xt.scrollbar.currents
  },

  /**
   * add scrollbar currents
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   */
  add: el => {
    Xt.scrollbar.currents.push(el)
  },

  /**
   * remove scrollbar currents
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   */
  remove: el => {
    Xt.scrollbar.currents = Xt.scrollbar.currents.filter(x => x !== el)
  },
}

//
// focus
// util to remember focus on key or interactions events
//

Xt.focus = {
  /**
   * properties
   */
  block: false,
  current: null,

  /**
   * enable focus change events
   * @param {Boolean} keepAll
   */
  on: (keepAll = false) => {
    // event key
    const focusChangeKeyHandler = Xt.dataStorage.put(document, 'keyup/focus', Xt.focus.changeKey)
    document.addEventListener('keyup', focusChangeKeyHandler)
    // @FIX switch mode
    if (!keepAll) {
      // event mouse
      const focusChangeOtherHandler = Xt.dataStorage.get(document, 'mousedown touchstart pointerdown/focus')
      document.removeEventListener('mousedown', focusChangeOtherHandler, true)
      document.removeEventListener('touchstart', focusChangeOtherHandler, true)
      document.removeEventListener('pointerdown', focusChangeOtherHandler, true)
    }
  },

  /**
   * disable focus change events
   * @param {Boolean} keepAll
   */
  off: (keepAll = false) => {
    // @FIX switch mode
    if (!keepAll) {
      // event
      const focusChangeKeyHandler = Xt.dataStorage.get(document, 'keyup/focus')
      document.removeEventListener('keyup', focusChangeKeyHandler)
    }
    // event mouse
    const focusChangeOtherHandler = Xt.dataStorage.put(document, 'mousedown touchstart pointerdown/focus', Xt.focus.changeOther)
    document.addEventListener('mousedown', focusChangeOtherHandler)
    document.addEventListener('touchstart', focusChangeOtherHandler, { passive: true })
    document.addEventListener('pointerdown', focusChangeOtherHandler, { passive: true })
  },

  /**
   * focus change on key events
   * @param {Event} e Event
   */
  changeKey: e => {
    const code = e.keyCode ? e.keyCode : e.which
    // key tab
    if (code === 9) {
      if (!Xt.focus.block) {
        // remember Xt.focus
        Xt.focus.current = document.activeElement
      }
      if (!document.documentElement.classList.contains('xt-focus-visible')) {
        // html.xt-focus-visible
        document.documentElement.classList.add('xt-focus-visible')
        // @FIX switch mode
        Xt.focus.off()
      }
    }
  },

  /**
   * focus change on other events
   * @param {Event} e Event
   */
  changeOther: e => {
    if (!Xt.focus.block) {
      // remember Xt.focus
      Xt.focus.current = e.target
    }
    if (document.documentElement.classList.contains('xt-focus-visible')) {
      // html.xt-focus-visible
      document.documentElement.classList.remove('xt-focus-visible')
      // @FIX switch mode
      Xt.focus.on()
    }
  },
}

requestAnimationFrame(() => {
  Xt.focus.on()
})

//
// focusLimit
// util to limit focus inside HTML elements
//

Xt.focusLimit = {
  /**
   * properties
   */
  actives: [],

  /**
   * activate focusLimit to an element
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   */
  on: el => {
    // vars
    Xt.focusLimit.focusables = Array.from(el.querySelectorAll(Xt.focusables)).filter(x => x.matches(':not([disabled]), :not([tabindex="-1"])'))
    if (Xt.focusLimit.focusables.length) {
      Xt.focusLimit.first = Xt.focusLimit.focusables[0]
      Xt.focusLimit.last = Xt.focusLimit.focusables[Xt.focusLimit.focusables.length - 1]
      // event
      const focusLimitHandler = Xt.dataStorage.put(document, 'keydown/focusLimit', Xt.focusLimit.limit)
      document.addEventListener('keydown', focusLimitHandler)
    }
    // @FIX Xt.focus when clicking and not used tab before
    Xt.focus.current = Xt.focus.current ? Xt.focus.current : document.activeElement
    // @FIX switch mode
    Xt.focus.off(true)
    // actives
    Xt.focus.block = true
    Xt.focusLimit.actives.push(el)
  },

  /**
   * deactivate focusLimit to an element
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   */
  off: el => {
    // event
    const focusLimitHandler = Xt.dataStorage.get(document, 'keydown/focusLimit')
    document.removeEventListener('keydown', focusLimitHandler)
    // actives
    Xt.focusLimit.actives = Xt.focusLimit.actives.filter(x => x !== el)
    if (Xt.focusLimit.actives.length) {
      const active = Xt.focusLimit.actives[Xt.focusLimit.actives.length - 1]
      Xt.focusLimit.actives = Xt.focusLimit.actives.filter(x => x !== active)
      Xt.focusLimit.on(active)
    } else {
      // @FIX switch mode
      Xt.focus.on()
      // actives
      Xt.focus.block = false
      Xt.focus.current.focus()
    }
  },

  /**
   * limit even on focus when activated
   * @param {Event} e Event
   */
  limit: e => {
    const code = e.keyCode ? e.keyCode : e.which
    // key tab
    if (code === 9) {
      if (!Xt.focusLimit.focusables.includes(document.activeElement)) {
        if (e.shiftKey) {
          Xt.focusLimit.last.focus()
          e.preventDefault()
        } else {
          Xt.focusLimit.first.focus()
          e.preventDefault()
        }
      }
    }
  },
}

//
// util
//

/**
 * friction
 * @param {Node|HTMLElement|EventTarget|Window} el Element
 * @param {Object} obj Object with x and y values
 * @param {Boolean} transform Use transforms instead of position
 */
Xt.friction = (el, obj, transform = true) => {
  cancelAnimationFrame(Xt.dataStorage.get(el, 'xtFrictionFrame'))
  cancelAnimationFrame(Xt.dataStorage.get(el, 'xtFrictionInitFrame'))
  Xt.dataStorage.set(
    el,
    'xtFrictionInitFrame',
    requestAnimationFrame(() => {
      let xCurrent
      let yCurrent
      if (transform) {
        const translate = Xt.getTranslate(el)
        xCurrent = translate[0]
        yCurrent = translate[1]
      } else {
        const rect = el.getBoundingClientRect()
        xCurrent = rect.left
        yCurrent = rect.top
      }
      let xDist = obj.x - xCurrent
      let yDist = obj.y - yCurrent
      // momentum
      const fncFriction = obj.friction
      // set
      if (fncFriction && Xt.dataStorage.get(el, 'xtFrictionX') && Xt.durationTimescale !== 1000) {
        // friction
        xCurrent += fncFriction(Math.abs(xDist)) * Math.sign(xDist)
        yCurrent += fncFriction(Math.abs(yDist)) * Math.sign(yDist)
        if (transform) {
          el.style.transform = `translateX(${xCurrent}px) translateY(${yCurrent}px)`
        } else {
          el.style.left = `${xCurrent}px`
          el.style.top = `${yCurrent}px`
        }
      } else {
        // instant
        xCurrent = obj.x
        yCurrent = obj.y
        // set
        if (transform) {
          el.style.transform = `translateX(${xCurrent}px) translateY(${yCurrent}px)`
        } else {
          el.style.top = `${yCurrent}px`
          el.style.left = `${xCurrent}px`
        }
      }
      // next interaction friction
      Xt.dataStorage.set(el, 'xtFrictionX', xCurrent)
      Xt.dataStorage.set(el, 'xtFrictionY', yCurrent)
      // loop
      if (fncFriction && Xt.durationTimescale !== 1000) {
        const frictionLimit = obj.frictionLimit ? obj.frictionLimit : 1.5
        xDist = obj.x - xCurrent
        yDist = obj.y - yCurrent
        cancelAnimationFrame(Xt.dataStorage.get(el, 'xtFrictionFrame'))
        Xt.dataStorage.set(
          el,
          'xtFrictionFrame',
          requestAnimationFrame(() => {
            if (Math.abs(xDist) >= frictionLimit || Math.abs(yDist) >= frictionLimit) {
              // continue friction
              Xt.friction(el, obj, transform)
            } else {
              // next interaction instant
              Xt.dataStorage.remove(el, 'xtFrictionX')
              Xt.dataStorage.remove(el, 'xtFrictionY')
            }
          })
        )
      }
    })
  )
}

/**
 * Return translate values https://gist.github.com/aderaaij/a6b666bf756b2db1596b366da921755d
 * @param {Node|HTMLElement|EventTarget|Window} element Element to check target
 * @return {Array} Values [x, y]
 */
Xt.getTranslate = element => {
  const transArr = []
  const style = getComputedStyle(element)
  const transform = style.transform
  let mat = transform.match(/^matrix3d\((.+)\)$/)
  if (mat) {
    transArr.push(parseFloat(mat[1].split(', ')[13]))
  } else {
    mat = transform.match(/^matrix\((.+)\)$/)
    mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : transArr.push(0)
    mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : transArr.push(0)
  }
  return transArr
}

/**
 * Contains for multiple elements
 * @param {NodeList|Array} elements Elements to check if contains
 * @param {Node|HTMLElement|EventTarget|Window} target Element to check if contained
 * @return {Boolean}
 */
Xt.contains = (elements, target) => {
  for (const el of elements) {
    if (el.contains(target)) {
      return true
    }
  }
  return false
}

/**
 * Get unique id
 * @return {String} Unique id
 */
Xt.getuniqueId = () => {
  Xt.uid = Xt.uid !== undefined ? Xt.uid : 0
  return `xt-${Xt.uid++}`
}

/**
 * Get decresting number from Xt.stickyIndex
 * @return {Number} Unique number
 */
Xt.getStickyIndex = () => {
  return Xt.stickyIndex--
}

/**
 * Merge deep array of objects
 * @param {Array} arr Array of objects to merge
 * @return {Object} Merged object
 */
Xt.merge = arr => {
  const final = {}
  for (const obj of arr) {
    if (obj) {
      for (const [key, value] of Object.entries(obj)) {
        if (
          value !== null &&
          typeof value === 'object' &&
          !Array.isArray(value) && // not array
          !value.nodeName && // not HTML element
          value !== window // not window
        ) {
          final[key] = Xt.merge([final[key], value])
        } else {
          final[key] = value
        }
      }
    }
  }
  return final
}

/**
 * Merge deep reset object only when equals to check
 * @param {Object} start object Start object
 * @param {Object} reset object Reset object
 * @param {Object} check object Check with start object to reset with reset object
 * @return {Object} Merged object
 */
Xt.mergeReset = (start, reset, check) => {
  const final = start
  for (const [key, value] of Object.entries(check)) {
    if (
      value !== null &&
      typeof value === 'object' &&
      !Array.isArray(value) && // not array
      !value.nodeName && // not HTML element
      value !== window // not window
    ) {
      final[key] = Xt.mergeReset(start[key], reset[key], check[key])
    } else {
      if (start[key] === check[key]) {
        final[key] = reset[key]
      }
    }
  }
  return final
}

/**
 * Make an array when element is only one
 * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} el
 * @return {NodeList|Array}
 */
Xt.arrSingle = el => {
  if (!el) {
    return []
  }
  if (el.length === undefined || el.tagName === 'FORM') {
    const arr = new Array(1)
    arr[0] = el
    return arr
  } else {
    return el
  }
}

/**
 * Create HTML elements from html string
 * @param {String} str Html string (only 1 root html tag)
 * @return {Node} HTML elements
 */
Xt.createElement = str => {
  const template = document.createElement('template')
  template.innerHTML = str.trim()
  return template.content.firstChild
}

/**
 * Set scrollbar width of document
 */
Xt.setScrollbarWidth = () => {
  if (Xt.scrollbarWidth === undefined) {
    const scrollbarWidthHandler = Xt.dataStorage.put(window, 'resize/scrollbar', Xt.setScrollbarWidth)
    removeEventListener('resize', scrollbarWidthHandler)
    addEventListener('resize', scrollbarWidthHandler)
  }
  // add outer
  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.width = '100%'
  outer.style.msOverflowStyle = 'scrollbar' // needed for WinJS apps
  outer.classList.add('xt-ignore', 'overflow-main')
  document.body.append(outer)
  // force scrollbars
  outer.style.overflow = 'scroll'
  // add inner
  const inner = document.createElement('div')
  inner.style.width = '100%'
  inner.classList.add('xt-ignore')
  outer.append(inner)
  // return
  const widthNoScroll = outer.offsetWidth
  const widthWithScroll = inner.offsetWidth
  Xt.scrollbarWidth = widthNoScroll - widthWithScroll
  // remove
  outer.remove()
}

/**
 * if full width return '' else return value in px
 * @param {Number|String} width
 * @return {String} Value in px
 */
Xt.normalizeWidth = width => {
  width = parseFloat(width)
  if (!width || width + Xt.scrollbarWidth >= window.innerWidth) {
    width = ''
  } else {
    width += 'px'
  }
  return width
}

/**
 * fix scrollbar spacing when changing overflow adding padding
 * @param {Array|Node|HTMLElement|EventTarget|Window} container
 */
Xt.scrollbarSpaceOn = container => {
  const width = Xt.scrollbarWidth
  container.style.paddingRight = `${width}px`
  // backdrop
  const backdrops = container.querySelectorAll('.backdrop')
  for (const backdrop of backdrops) {
    backdrop.style.right = `${width}px`
  }
  // xt-fixed
  const elements = container.querySelectorAll('.xt-fixed')
  for (const element of elements) {
    const style = getComputedStyle(element)
    let prop
    if (Xt.normalizeWidth(element.clientWidth) === '') {
      // only if full width
      prop = 'paddingRight'
    } else if (parseFloat(style.right) === 0) {
      // only if right position
      prop = 'right'
    }
    if (prop) {
      const old = element.style[prop]
      let val = parseFloat(style[prop])
      val = old !== '' ? val - parseFloat(old) : val
      const str = `calc(${val}px + ${width}px)`
      element.classList.add('xt-transition-none')
      element.style[prop] = str
      element.classList.remove('xt-transition-none')
    }
  }
}

/**
 * fix scrollbar spacing when changing overflow adding padding
 * @param {Array|Node|HTMLElement|EventTarget|Window} container
 */
Xt.scrollbarSpaceOff = container => {
  container.style.paddingRight = ''
  // backdrop
  const backdrops = container.querySelectorAll('.backdrop')
  for (const backdrop of backdrops) {
    backdrop.style.right = ''
  }
  // xt-fixed
  const elements = container.querySelectorAll('.xt-fixed')
  for (const element of elements) {
    element.classList.add('xt-transition-none')
    element.style.right = ''
    element.style.paddingRight = ''
    element.classList.remove('xt-transition-none')
  }
}

/**
 * addScript
 * @param {String} url
 * @param {Function} callback
 */
Xt.addScript = (url, callback = null) => {
  if (!document.querySelector(`script[src="${url}"]`)) {
    const script = document.createElement('script')
    if (callback) {
      script.onload = callback
    }
    script.type = 'text/javascript'
    script.src = url
    document.body.append(script)
  }
}

/**
 * ignoreOnce
 * @param {Node|HTMLElement|EventTarget|Window} el
 */
Xt.ignoreOnce = el => {
  if (el.classList.contains('xt-ignore-once')) {
    // @FIX react when componentDidMount
    requestAnimationFrame(() => {
      el.classList.remove('xt-ignore', 'xt-ignore-once')
    })
  }
}

/**
 * animation on classes
 * @param {Node|HTMLElement|EventTarget|Window} el Element animating
 * @param {String} suffix Timeout suffix
 */
Xt.animOn = (el, suffix = '') => {
  el.classList.add('in')
  el.classList.remove('active')
  el.classList.remove('out')
  // keep the same level of raf as others
  cancelAnimationFrame(Xt.dataStorage.get(el, `AnimFrame${suffix}`))
  Xt.dataStorage.put(
    el,
    suffix,
    requestAnimationFrame(() => {
      // @FIX raf sometimes el isn't already display: block (overlay and firefox expecially)
      requestAnimationFrame(() => {
        el.classList.add('active')
      })
    })
  )
}

/**
 * animation off classes
 * @param {Node|HTMLElement|EventTarget|Window} el Element animating
 * @param {String} suffix Timeout suffix
 * @param {Number} timing Optional force time
 */
Xt.animOff = (el, suffix = '', timing = null) => {
  el.classList.remove('in')
  el.classList.remove('active')
  el.classList.add('out')
  Xt.animTimeout(
    el,
    () => {
      el.classList.remove('out')
    },
    `AnimFrame${suffix}`,
    timing,
    'Off'
  )
}

/**
 * execute function after transition or animation
 * @param {Node|HTMLElement|EventTarget|Window} el Element animating
 * @param {Function} func Function to execute after transition or animation
 * @param {String} suffix Timeout suffix
 * @param {Number} timing Optional force time
 * @param {String} actionCurrent Current action
 */
Xt.animTimeout = (el, func, suffix = '', timing = null, actionCurrent = null) => {
  clearTimeout(Xt.dataStorage.get(el, `AnimTimeout${suffix}`))
  timing = Xt.animTime(el, timing, actionCurrent)
  Xt.dataStorage.set(el, `AnimTimeout${suffix}`, setTimeout(func, timing))
}

/**
 * clear animTimeout
 * @param {Node|HTMLElement|EventTarget|Window} el Element animating
 * @param {String} suffix Timeout suffix
 */
Xt.animTimeoutClear = (el, suffix = '') => {
  clearTimeout(Xt.dataStorage.get(el, `AnimTimeout${suffix}`))
}

/**
 * get transition or animation time
 * @param {Node|HTMLElement|EventTarget|Window} el Element animating
 * @param {Number} timing Force duration in milliseconds
 * @param {String} actionCurrent Current action
 * @return {Number} Time in milliseconds
 */
Xt.animTime = (el, timing = null, actionCurrent = null) => {
  if (timing || timing === 0) {
    return timing / Xt.durationTimescale
  } else if ((timing = (actionCurrent && el.getAttribute(`data-xt-duration${actionCurrent}`)) || (timing = el.getAttribute('data-xt-duration')))) {
    return parseFloat(timing) / Xt.durationTimescale
  } else {
    const style = getComputedStyle(el)
    const transition = parseFloat(style.transitionDuration) + parseFloat(style.transitionDelay)
    const animation = parseFloat(style.animationDuration) + parseFloat(style.animationDelay)
    if (transition || animation) {
      timing = Math.max(transition, animation)
    }
    return timing * 1000
  }
}

/**
 * return window percent if percent string
 * @param {Number|String} num Number to check
 * @return {Number}
 */
Xt.windowPercent = num => {
  if (typeof num === 'string' || num instanceof String) {
    if (num.indexOf('%') !== -1) {
      num = (Xt.innerHeight * parseFloat(num)) / 100
    }
  }
  return num
}

/**
 * query array of elements or element
 * @param {Node|HTMLElement|NodeList|Array} element Element to search from
 * @param {String} query Query for querySelectorAll
 * @return {Array}
 */
Xt.queryAll = (element, query) => {
  // not when no query or empty array
  if (!query || element.length === 0) {
    return []
  }
  if (!element.length) {
    // search element
    return Xt.arrSingle(element.querySelectorAll(query))
  } else {
    // search array
    const arr = []
    for (const el of element) {
      arr.push(...el.querySelectorAll(query))
    }
    return arr
  }
}

/**
 * check element visibility
 * @param {Node|HTMLElement|EventTarget|Window} el Element animating
 * @return {Boolean}
 */
Xt.visible = el => {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
}

/**
 * Fix resize event multiple calls and adds delay on resize and scroll events
 * @param {Event|Object} e Event
 * @param {Node|HTMLElement|EventTarget|Window} element Element to save timeout
 * @param {Function} func Function to execute
 * @param {String} prefix Timeout prefix
 * @param {Boolean} instant If instant
 */
Xt.eventDelay = ({ event, element, func, prefix = '', instant = false }) => {
  const container = document.documentElement
  cancelAnimationFrame(Xt.dataStorage.get(element, `${prefix}Frame`))
  clearTimeout(Xt.dataStorage.get(element, `${prefix}Timeout`))
  if (event) {
    const delay = event.detail !== undefined && event.detail.delay !== undefined ? event.detail.delay : instant ? 0 : Xt[`${event.type}Delay`]
    if (event.type === 'resize') {
      const w = window.innerWidth
      const h = window.innerHeight
      // multiple calls check
      if (
        (event.detail === undefined || event.detail.force === undefined) && // not when setting delay on event
        Xt.dataStorage.get(container, 'xtEventDelayWidth') === w && // when width changes
        (matchMedia('(hover: none)').matches || Xt.dataStorage.get(container, 'xtEventDelayHeight') === h) // when height changes not touch
      ) {
        // only width no height because it changes on scroll on mobile
        return
      }
      // save after a frame to execute all eventDelay
      cancelAnimationFrame(Xt.dataStorage.get(container, 'xtEventDelayFrame'))
      Xt.dataStorage.set(
        container,
        'xtEventDelayFrame',
        requestAnimationFrame(() => {
          Xt.dataStorage.set(container, 'xtEventDelayWidth', w)
          Xt.dataStorage.set(container, 'xtEventDelayHeight', h)
        })
      )
    }
    // delay
    if (!delay) {
      Xt.dataStorage.set(element, `${prefix}Frame`, requestAnimationFrame(func.bind(event)))
    } else {
      Xt.dataStorage.set(
        element,
        `${prefix}Timeout`,
        setTimeout(() => {
          // func
          func(event)
        }, delay)
      )
    }
  } else {
    Xt.dataStorage.set(element, `${prefix}Frame`, requestAnimationFrame(func.bind(event)))
  }
}

Xt.dataStorage.set(document.documentElement, 'xtEventDelayWidth', window.innerWidth)
Xt.dataStorage.set(document.documentElement, 'xtEventDelayHeight', window.innerHeight)

/**
 * utility vars
 */
Xt.innerHeightSet = () => {
  Xt.innerHeight = window.innerHeight
  document.documentElement.style.setProperty('--vh', `${Xt.innerHeight * 0.01}px`)
}

// init

addEventListener('resize', e => {
  Xt.eventDelay({
    event: e,
    element: document.documentElement,
    func: () => {
      Xt.innerHeightSet()
    },
    prefix: 'xtWindowHeightResize',
    instant: true,
  })
})
Xt.innerHeightSet()

/**
 * scrollRestoration
 */
Xt.ready(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = Xt.scrollRestoration
  }
})

//

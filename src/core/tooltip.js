import { Xt } from '../xt.js'
import './toggle'
import JSON5 from 'json5'
import { createPopper } from '@popperjs/core'

/**
 * Tooltip
 */
class Tooltip extends Xt.Toggle {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    super(object, optionsCustom)
  }

  //
  // init
  //

  /**
   * init aria
   */
  initAriaRole() {
    const self = this
    const options = self.options
    // aria
    if (options.aria) {
      // role
      for (const el of self.elements) {
        const ariaEls = Xt.queryAll(el, options.ariaControls)
        const ariaEl = ariaEls.length ? ariaEls[0] : el
        ariaEl.setAttribute('aria-haspopup', 'listbox')
      }
      for (const tr of self.targets) {
        tr.setAttribute('role', 'tooltip')
      }
    }
  }

  //
  // event util
  //

  /**
   * activate element
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be activated
   * @param {String} type Type of elements
   */
  activate(el, type) {
    const self = this
    const options = self.options
    // super
    super.activate(el, type)
    // popperjs
    if (options.popperjs) {
      if (type === 'targets') {
        // instant
        el.classList.add('xt-transition-none')
        requestAnimationFrame(() => {
          el.classList.remove('xt-transition-none')
        })
        // popperjs
        const element = self.getElements(el)[0]
        const popperInstance = createPopper(element, el, {
          placement: el.getAttribute('data-xt-position') || options.position,
          strategy: options.strategy,
          resize: false,
          modifiers: [
            {
              name: 'computeStyles',
              options: {
                gpuAcceleration: false,
              },
            },
            {
              name: 'preventOverflow',
              options: {
                rootBoundary: 'document',
                padding: self.options.spaceOverflow,
              },
            },
            {
              name: 'flip',
              options: {
                padding: self.options.spaceFlip,
              },
            },
            {
              name: 'arrow',
              options: {
                element: '[data-arrow]',
                padding: self.options.spaceArrow,
              },
            },
          ],
          ...options.popperjs,
        })
        Xt.dataStorage.set(el, 'PopperInstance', popperInstance)
      }
    }
  }

  /**
   * deactivate element done
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   * @param {String} type Type of elements
   */
  deactivateDone(el, type) {
    const self = this
    const options = self.options
    // super
    super.deactivateDone(el, type)
    // popperjs
    if (options.popperjs) {
      if (type === 'targets') {
        const popperInstance = Xt.dataStorage.get(el, 'PopperInstance')
        if (popperInstance) {
          popperInstance.destroy()
          Xt.dataStorage.remove(el, 'PopperInstance')
        }
      }
    }
  }

  //
}

//
// options
//

Tooltip.componentName = 'xt-tooltip'
Tooltip.optionsDefault = {
  // element
  elements: ':scope > a, :scope > button',
  targets: ':scope > .tooltip',
  // class
  class: 'in in-tooltip',
  classSkip: {
    elements: true,
    elementsInner: true,
  },
  // quantity
  min: 0,
  max: 1,
  // event
  on: 'mouseenter',
  off: 'mouseleave',
  eventLimit: '.event-limit, .tooltip > *:first-child',
  // timing
  instant: {
    elements: true,
    targets: false,
    elementsInner: true,
    targetsInner: false,
  },
  // other
  position: 'top',
  strategy: 'absolute',
  spaceOverflow: 15,
  spaceFlip: 15,
  spaceArrow: 0,
  popperjs: true,
  closeAuto: true,
  closeOutside: 'body',
  closeInside: '.tooltip-dismiss, .backdrop, .btn-close',
  zIndex: {
    targets: {
      start: 650, // do not change: same as javascript and decreses with sequential tooltip
      factor: -1,
    },
  },
  ariaControls: ':scope > a, :scope > button',
}

//
// export
//

Xt.Tooltip = Tooltip

//
// observe
//

Xt.mount.push({
  matches: `[data-${Xt.Tooltip.componentName}]`,
  mount: object => {
    // vars

    const optionsMarkup = object.getAttribute(`data-${Xt.Tooltip.componentName}`)
    const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Tooltip(object, options)

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})

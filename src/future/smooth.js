import { Xt } from '../xt'
import '../toggle'
import JSON5 from 'json5'

/**
 * Smooth
 */
class Smooth extends Xt.Toggle {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    super(object, optionsCustom)
  }
}

//
// options
//

Smooth.componentName = 'xt-smooth'
Smooth.optionsDefault = {
  // class
  class: false,
  // event
  on: false,
  // wheel
  wheel: {
    selector: 'scrollingElement',
    block: false,
    limit: true,
    transform: false,
    horizontal: false,
    factor: 1,
    friction: delta => {
      return delta / 9
    },
    frictionLimit: 1.5,
  },
}

//
// export
//

Xt.Smooth = Smooth

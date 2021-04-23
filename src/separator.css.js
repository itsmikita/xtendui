/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  component: {
    '.xt-separator': {
      display: 'inline',
      position: 'relative',
      fontSize: '1em',
      verticalAlign: 'baseline',
    },
    '.xt-separator-dash': {
      '&:after': {
        content: '"-"',
      },
    },
    '.xt-separator-slash': {
      '&:after': {
        content: '"/"',
      },
    },
    '.xt-separator-pipe': {
      '&:after': {
        content: '"|"',
      },
    },
    '.xt-separator-point': {
      '&:after': {
        content: '"•"',
      },
    },
    '.xt-separator-arrow': {
      '&:after': {
        content: '">"',
      },
    },
  },
}

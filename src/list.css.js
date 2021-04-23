/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    space: theme('spacing'),
  }),
  component: {
    '.xt-list': {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'stretch',
      '&:empty': {
        display: 'none',
      },
    },
    '.xt-list-inner': {
      display: 'inline-flex',
    },
  },
}

const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  component: theme => ({
    '.btn': {
      // setup
      cursor: 'pointer',
      'div&': {
        cursor: 'inherit',
      },
      display: 'inline-flex',
      position: 'relative',
      verticalAlign: 'middle',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'left',
      // styles
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.snug'),
      letterSpacing: theme('letterSpacing.wider'),
      textTransform: 'uppercase',
      // animation
      transitionProperty: 'all',
      transitionDuration: theme('transitionDuration.500'),
      transitionTimingFunction: theme('transitionTimingFunction.out'),
    },
    '.btn-close': {
      // setup
      position: 'absolute',
      zIndex: `calc(${theme('zIndex.top')} - 1)`,
      top: '0',
      right: '0',
      lineHeight: '0 !important',
      '& + *': {
        margin: '0 !important',
      },
    },
    '.btn-sm': {
      // styles
      padding: `${rem(7)} ${rem(11)}`,
      fontSize: rem(10),
    },
    '.btn-md': {
      // styles
      padding: `${rem(9)} ${rem(15)}`,
      fontSize: rem(12),
    },
    '.btn-lg': {
      // styles
      padding: `${rem(11)} ${rem(19)}`,
      fontSize: rem(14),
    },
  }),
}

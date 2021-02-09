const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  boxShadow: {
    tooltip: '0 0 10px 0 rgba(0, 0, 0, 0.1), 0 0 5px 0px rgba(0, 0, 0, 0.05)',
  },
  variants: ['responsive'],
  utility: {
    '.tooltip-static': {
      // setup
      width: '100%',
      padding: 0,
      top: '100% !important',
      left: '0 !important',
      right: '0 !important',
    },
  },
  component: theme => ({
    '.tooltip': {
      // setup
      position: 'absolute',
      margin: '0 !important',
      '&:not(.in):not(.out)': {
        display: 'none',
      },
      '&.out': {
        pointerEvents: 'none',
      },
      '> *:first-child': {
        position: 'relative',
        zIndex: theme('zIndex.tooltip'),
      },
      // styles
      '[data-popper-placement^="top"]&:not(.tooltip-nospace)': {
        paddingBottom: theme('spacing.2'),
      },
      '[data-popper-placement^="bottom"]&:not(.tooltip-nospace)': {
        paddingTop: theme('spacing.2'),
      },
      '[data-popper-placement^="left"]&:not(.tooltip-nospace)': {
        paddingRight: theme('spacing.2'),
      },
      '[data-popper-placement^="right"]&:not(.tooltip-nospace)': {
        paddingLeft: theme('spacing.2'),
      },
    },
    '.tooltip-arrow': {
      // setup
      '@apply transform': '',
      '@apply rotate-45 !important': '',
      position: 'absolute',
      // styles
      zIndex: `calc(${theme('zIndex.tooltip')} - 1)`,
      width: '1rem',
      height: '1rem',
      background: theme('colors.black'),
      '[data-popper-placement^="top"] &': {
        bottom: theme('spacing[1.5]'),
      },
      '[data-popper-placement^="bottom"] &': {
        top: theme('spacing[1.5]'),
      },
      '[data-popper-placement^="left"] &': {
        right: theme('spacing[1.5]'),
      },
      '[data-popper-placement^="right"] &': {
        left: theme('spacing[1.5]'),
      },
    },
    '.xt-tooltip-disabled': {
      // setup
      '&.tooltip': {
        display: 'none !important',
      },
    },
  }),
}

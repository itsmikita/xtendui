module.exports = {
  boxShadow: {
    tooltip: '0 0 10px 0 rgba(0, 0, 0, 0.1), 0 0 5px 0px rgba(0, 0, 0, 0.05)',
  },
  variants: ['responsive'],
  utility: {
    '.xt-tooltip-static': {
      width: '100%',
      padding: 0,
      top: '100% !important',
      left: '0 !important',
      right: '0 !important',
    },
  },
  component: theme => ({
    '.xt-tooltip': {
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
      '> .xt-arrow': {
        position: 'absolute',
        pointerEvents: 'none',
        transform: 'rotate(45deg)',
        zIndex: `calc(${theme('zIndex.tooltip')} - 1)`,
      },
    },
    '.xt-tooltip-item': {
      display: 'inline-block',
    },
    '.xt-tooltip-disabled': {
      '&.xt-tooltip': {
        display: 'none !important',
      },
    },
  }),
}

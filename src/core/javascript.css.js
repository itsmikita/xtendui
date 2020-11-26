module.exports = {
  component: theme => ({
    'html:not(.no-js-fouc):not(.xt-ready)': {
      // instant animations on page load
      '*': {
        '@apply duration-none !important': '',
      },
    },
    '@media (prefers-reduced-motion: reduce), (update: slow)': {
      // instant animations accessibility
      'html:not(.no-js-prm)': {
        '*': {
          '@apply duration-none !important': '',
        },
      },
    },
    '.initial': {
      // instant animations on components init and reinit
      'html:not(.no-js-initial)': {
        '&, *': {
          '@apply duration-none !important': '',
        },
      },
    },
    'html.xt-scrollbar': {
      // setup
      body: {
        overflowY: 'hidden !important',
      },
      '.overlay': {
        overflowY: 'scroll !important',
      },
    },
    '[data-xt-pag].xt-ignore': {
      // setup
      display: 'none !important',
    },
    '[data-xt-nav]': {
      // setup
      cursor: 'pointer',
    },
    '.xt-transition-none': {
      // setup
      transition: 'none !important',
    },
    '.xt-container': {
      // setup
      position: 'relative',
      width: '100%',
    },
    '.xt-disable': {
      // setup
      '&:after': {
        display: 'none',
        content: '"xt-disable"',
      },
    },
    '.xt-disable-after-init': {
      // setup
      '&:after': {
        display: 'none',
        content: '"xt-disable-after-init"',
      },
    },
    '.xt-jump': {
      // setup
      '&:not(.in)': {
        cursor: 'pointer',
      },
      '&.xt-jumps-none, .xt-jumps-none &': {
        cursor: 'inherit',
      },
    },
    '.xt-pointer-events-none': {
      // setup
      pointerEvents: 'none',
    },
    '.xt-links-none': {
      // setup
      'a&, a': {
        pointerEvents: 'none',
      },
    },
    '.xt-grab': {
      // setup
      '@apply select-none': '',
      cursor: 'grab',
      'a, img': {
        // prevent browser drag
        userDrag: 'none',
        // prevent browser selection
        userSelect: 'none',
      },
    },
    '.xt-calculating': {
      // setup
      '@apply duration-none !important': '',
      display: 'block !important',
      visibility: 'hidden !important',
      opacity: '0 !important',
    },
    '.xt-collapse-reset': {
      // setup
      overflow: 'visible !important',
    },
    '.xt-indicator': {
      pointerEvents: 'none',
      position: 'fixed',
      right: '0',
      marginTop: '-9px',
      width: '100px',
      height: '18px',
      zIndex: theme('zIndex.top'),
      lineHeight: '0',
      textAlign: 'right',
      '&:before': {
        display: 'inline-block',
        position: 'relative',
        padding: '3px 6px',
        fontSize: '12px',
        lineHeight: '1',
        textTransform: 'uppercase',
      },
    },
    '.xt-indicator-trigger': {
      right: '100px',
      backgroundColor: 'purple',
      '&:before': {
        content: '"trigger"',
        color: 'white',
        backgroundColor: 'purple',
      },
    },
    '.xt-indicator-start': {
      backgroundColor: 'red',
      '&:before': {
        content: '"start"',
        color: 'white',
        backgroundColor: 'red',
      },
    },
    '.xt-indicator-end': {
      backgroundColor: 'blue',
      '&:before': {
        content: '"end"',
        color: 'white',
        backgroundColor: 'blue',
      },
    },
    '.xt-indicator-start-real': {
      backgroundColor: 'red',
      opacity: '.3',
      zIndex: theme('zIndex.top'),
      '&:before': {
        content: '"start real"',
        color: 'white',
        backgroundColor: 'red',
      },
    },
    '.xt-indicator-end-real': {
      backgroundColor: 'blue',
      opacity: '.3',
      zIndex: theme('zIndex.top'),
      '&:before': {
        content: '"end real"',
        color: 'white',
        backgroundColor: 'blue',
      },
    },
  }),
}

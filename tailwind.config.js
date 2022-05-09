const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  presets: [require('tailwindcss/defaultConfig'), require('./tailwind.preset')],
  content: ['./{src,static}/**/*.js', './gatsby-config.esm.js'],
  safelist: process.env.DIST
    ? []
    : [
        'rounded-sm',
        'rounded',
        'rounded-md',
        'rounded-lg',
        'rounded-xl',
        'rounded-2xl',
        'rounded-t-sm',
        'rounded-t',
        'rounded-t-md',
        'rounded-t-lg',
        'rounded-t-xl',
        'rounded-t-2xl',
        'rounded-b-sm',
        'rounded-b',
        'rounded-b-md',
        'rounded-b-lg',
        'rounded-b-xl',
        'rounded-b-2xl',
        'rounded-l-sm',
        'rounded-l',
        'rounded-l-md',
        'rounded-l-lg',
        'rounded-l-xl',
        'rounded-l-2xl',
        'rounded-r-sm',
        'rounded-r',
        'rounded-r-md',
        'rounded-r-lg',
        'rounded-r-xl',
        'rounded-r-2xl',
        'rounded-tl-sm',
        'rounded-tl',
        'rounded-tl-md',
        'rounded-tl-lg',
        'rounded-tl-xl',
        'rounded-tl-2xl',
        'rounded-tr-sm',
        'rounded-tr',
        'rounded-tr-md',
        'rounded-tr-lg',
        'rounded-tr-xl',
        'rounded-tr-2xl',
        'rounded-bl-sm',
        'rounded-bl',
        'rounded-bl-md',
        'rounded-bl-lg',
        'rounded-bl-xl',
        'rounded-bl-2xl',
        'rounded-br-sm',
        'rounded-br',
        'rounded-br-md',
        'rounded-br-lg',
        'rounded-br-xl',
        'rounded-br-2xl',
        'md:rounded-sm',
        'md:rounded',
        'md:rounded-md',
        'md:rounded-lg',
        'md:rounded-xl',
        'md:rounded-2xl',
        'md:rounded-t-sm',
        'md:rounded-t',
        'md:rounded-t-md',
        'md:rounded-t-lg',
        'md:rounded-t-xl',
        'md:rounded-t-2xl',
        'md:rounded-b-sm',
        'md:rounded-b',
        'md:rounded-b-md',
        'md:rounded-b-lg',
        'md:rounded-b-xl',
        'md:rounded-b-2xl',
        'md:rounded-l-sm',
        'md:rounded-l',
        'md:rounded-l-md',
        'md:rounded-l-lg',
        'md:rounded-l-xl',
        'md:rounded-l-2xl',
        'md:rounded-r-sm',
        'md:rounded-r',
        'md:rounded-r-md',
        'md:rounded-r-lg',
        'md:rounded-r-xl',
        'md:rounded-r-2xl',
        'md:rounded-tl-sm',
        'md:rounded-tl',
        'md:rounded-tl-md',
        'md:rounded-tl-lg',
        'md:rounded-tl-xl',
        'md:rounded-tl-2xl',
        'md:rounded-tr-sm',
        'md:rounded-tr',
        'md:rounded-tr-md',
        'md:rounded-tr-lg',
        'md:rounded-tr-xl',
        'md:rounded-tr-2xl',
        'md:rounded-bl-sm',
        'md:rounded-bl',
        'md:rounded-bl-md',
        'md:rounded-bl-lg',
        'md:rounded-bl-xl',
        'md:rounded-bl-2xl',
        'md:rounded-br-sm',
        'md:rounded-br',
        'md:rounded-br-md',
        'md:rounded-br-lg',
        'md:rounded-br-xl',
        'md:rounded-br-2xl',
      ],
  theme: {
    extend: {
      container: {
        center: true,
        fluid: '1536px',
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
      colors: {
        code: '#2b2b2b',
        gray: {
          50: '#f6f9fd',
          100: '#eef4fb',
          200: '#dde7f4',
          300: '#c4d4e8',
          400: '#88a0c3',
          500: '#577197',
          600: '#3c5374',
          700: '#283f60',
          800: '#142644',
          900: '#061333',
        },
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        3: '3px',
      },
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
      }),
      xtendui: {
        link: {
          utility: theme => ({
            '.xt-links-inverse': {
              // fix specificity when nested .xt-links-default and .xt-links-inverse
              '&, .xt-links-default &': {
                'code:not([class])': {
                  color: `${theme('colors.white')}!important`,
                },
              },
            },
            '.xt-links-default': {
              // fix specificity when nested .xt-links-default and .xt-links-inverse
              '&, .xt-links-inverse &': {
                'code:not([class])': {
                  color: `${theme('colors.primary.500')}!important`,
                },
              },
            },
          }),
        },
        typography: {
          component: {
            'code:not([class])': {
              fontSize: '0.9em',
              fontWeight: 600,
              wordBreak: 'break-word',
              'td &': {
                wordBreak: 'initial',
              },
            },
          },
        },
      },
    },
  },
}

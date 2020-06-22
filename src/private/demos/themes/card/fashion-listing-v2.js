import { Xt } from 'xtend-library/src/xt.js'

Xt.mount.push({
  matches: '#iframe--fashion-listing-v2 body .block-listing_item', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const actionBtn = object.querySelector('.block-listing_action')
    const closeBtn = object.querySelector('.btn-close')

    // eventClick

    const eventClick = e => {
      e.stopPropagation()
      object.classList.add('active')
    }

    actionBtn.addEventListener('click', eventClick)

    // eventClose

    const eventClose = e => {
      e.stopPropagation()
      object.classList.remove('active')
    }

    closeBtn.addEventListener('click', eventClose)
  },
})

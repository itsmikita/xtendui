const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center justify-center">
      <div class="xt-card rounded-md ${classes.cardDefault()}">
        <div class="${classes.cardSm()}">
          <div class="xt-h5">Small</div>
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </p>
        </div>
        <span class="${classes.loader()}">
          <span class="${classes.filler()} text-primary-500 w-1 left-auto">
            <span class="block absolute bg-current opacity-25 w-full h-full right-0"></span>
            <span class="block absolute bg-current w-full right-0 animate-xt-filler-y"></span>
          </span>
        </span>
      </div>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Lorem ipsum
        <span class="${classes.loader()}">
          <span class="${classes.filler()} text-primary-500 w-1 left-auto">
            <span class="block absolute bg-current opacity-25 w-full h-full right-0"></span>
            <span class="block absolute bg-current w-full right-0 animate-xt-filler-y"></span>
          </span>
        </span>
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}

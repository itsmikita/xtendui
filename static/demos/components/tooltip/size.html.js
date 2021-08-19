const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element
        >
          Small
        </button>

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div
            class="relative *** ${classes.tooltipSm()} rounded${classes.tooltipRadius()} *** shadow-tooltip ${classes.textWhite()} ${classes.cardBlack()}"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div data-xt-tooltip>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element
        >
          Medium
        </button>

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div
            class="relative *** ${classes.tooltipMd()} rounded${classes.tooltipRadius()} *** shadow-tooltip ${classes.textWhite()} ${classes.cardBlack()}"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div data-xt-tooltip>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element
        >
          Large
        </button>

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div
            class="relative *** ${classes.tooltipLg()} rounded${classes.tooltipRadius()} *** shadow-tooltip ${classes.textWhite()} ${classes.cardBlack()}"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <div data-xt-tooltip>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element
        >
          max-width
        </button>

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div
            class="relative *** ${classes.tooltipMd()} max-w-lg rounded${classes.tooltipRadius()} *** shadow-tooltip ${classes.textWhite()} ${classes.cardBlack()}"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
            fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
            egestas congue.
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}

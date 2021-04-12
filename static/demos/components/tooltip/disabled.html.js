const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-disable">
    <div data-xt-tooltip="{ matches: { '(min-width: 768px)': { disabled: true } } }">
      Lorem ipsum

      <div class="xt-tooltip-item">
        <a href="#">dolor</a>

        <div class="xt-tooltip p-2">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum

            <div class="inline-block" data-xt-tooltip>
              <div class="xt-tooltip-item">
                <a href="#">dolor</a>

                <div class="xt-tooltip p-2">
                  <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
                    Consectetur adipiscing elit
                  </div>
                </div>
              </div>
            </div>

            sit amet
          </div>
        </div>
      </div>

      sit amet
    </div>
  </div>
`

export const object = {
  html: html,
}

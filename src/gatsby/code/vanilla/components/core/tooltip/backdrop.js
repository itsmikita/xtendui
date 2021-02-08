import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button', backdrop: true }">

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      backdrop
    </button>

    <div class="tooltip">
      <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  <div class="inline-block" data-xt-tooltip="{ on: 'click', off: 'click', backdrop: true }">

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      backdrop click
    </button>

    <div class="tooltip">
      <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

</div>
`

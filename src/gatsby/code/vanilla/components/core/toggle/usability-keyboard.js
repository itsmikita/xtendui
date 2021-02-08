import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const cardToggle = require('components/snippets/classes/card-toggle').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center" data-xt-toggle="{ keyboard: { selector: 'object' } }">

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 0
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 1
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 2
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 3
  </button>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 0
  </div>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 1
  </div>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 2
  </div>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 3
  </div>

</div>
`

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
<div class="list list-3 items-center" data-xt-toggle>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 0
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 1
  </button>

  <div class="card toggle rounded-md ${cardToggle()} transform transition opacity-0 translate-y-2 active:opacity-100 active:translate-y-0">
    Target 0
  </div>

  <div class="card toggle rounded-md ${cardToggle()} transform transition opacity-0 translate-y-2 active:opacity-100 active:translate-y-0">
    Target 1
  </div>

</div>
`

import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const inputDefault = require('components/snippets/classes/input-default').default
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>

  <div class="list flex-nowrap">

    <div class="list-inner flex-auto">
      <button type="button" class="btn text-xs py-2 px-3.5 rounded-l-md border border-gray-500 ${btnDefault()}">
        ${iconSearch({ classes: 'text-xl -my-1' })}
      </button>
      <input type="text" class="form-item border border-l-0 border-gray-500 ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
    </div>

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-r-md border border-l-0 border-gray-500 ${btnPrimary()}">
      Lorem ipsum
    </button>

  </div>

</form>
`

import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<nav class="list list-2 flex-col items-start">

  <div>
    <div class="list list-2 items-start">

      <div>
        <div class="list list-2 flex-col items-start">

          <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
            Lorem Ipsum
          </button>

          <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
            Dolor sit
          </button>

          <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
            Amet
          </button>

        </div>
      </div>

      <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        Dolor sit
      </button>

      <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        Amet
      </button>

    </div>
  </div>

  <div>
    <div class="list list-2 items-start">

      <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        Lorem Ipsum
      </button>

      <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        Dolor sit
      </button>

        <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        Amet
      </button>

    </div>
  </div>

</nav>
`

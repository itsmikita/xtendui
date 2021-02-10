import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-3 items-center">

  <a href="#">
    link
  </a>

  <a href="#" class="text-accent-500 text-opacity-75 underline">
    link custom
  </a>

  <button type="button" class="btn link">
    link btn
  </button>

  <div class="link">
    link class
  </div>

</div>
`

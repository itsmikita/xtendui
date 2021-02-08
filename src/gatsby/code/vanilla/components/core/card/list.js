import path from 'path'
const cardDefault = require('components/snippets/classes/card-default').default
const iconPackage = require('components/snippets/icons').iconPackage

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="card rounded-md ${cardDefault()}">
  <div class="card-md">
    <div class="list list-3 flex-nowrap items-baseline">
      <div>
        ${iconPackage({ classes: 'text-xl -my-1' })}
      </div>
      <div>
        <div class="h4">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>
</div>
`

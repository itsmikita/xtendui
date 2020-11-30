import path from 'path'
const cardDefaultFull = require('components/snippets/classes/card-default-full').default
const cardPrimaryFull = require('components/snippets/classes/card-primary-full').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-3">

  <div class="w-full">
    <div class="card card-sm p-0 rounded-md ${cardDefaultFull()} my-5 mt-fc mb-lc ">
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
  </div>

  <div class="w-full">
    <div class="card card-sm p-0 rounded-md ${cardPrimaryFull()} my-5 mt-fc mb-lc ">
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
  </div>

</div>
`

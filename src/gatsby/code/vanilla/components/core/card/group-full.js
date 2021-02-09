import path from 'path'
const cardDefaultFull = require('components/snippets/classes/card-default-full').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-6">

  <div class="w-full">
    <div class="card rounded-md ${cardDefaultFull()}">
      <div class="md:card-group">
        <div class="text-base p-8 px-0 pt-0 md:pb-0 md:pr-6 md:w-7/12">
          <div class="h4">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
        <div class="text-sm p-6 md:w-5/12 rounded-md bg-gray-500">
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full">
    <div class="card rounded-md ${cardDefaultFull()}">
      <div class="md:card-group">
        <div class="text-base p-8 md:w-7/12 px-0 pt-0 md:pb-0 md:pr-6">
          <div class="h4">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
        <div class="md:w-5/12">
          <div class="text-sm p-6 rounded-md bg-gray-500">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
          </div>
          <div class="text-base p-8 px-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
          </div>
        </div>
      </div>
      <div class="media-container bg-gray-700 rounded-md ratio-25">
        <div class="media-inner">
          <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
        </div>
      </div>
    </div>
  </div>

</div>
`

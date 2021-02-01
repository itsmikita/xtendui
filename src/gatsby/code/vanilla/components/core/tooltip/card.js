import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardWhite = require('components/snippets/classes/card-white').default
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      asset
    </button>

    <div class="tooltip">
      <div class="card w-80 rounded-md shadow-drop ${cardWhite()}">
        <div class="btn btn-close p-5 text-xl" aria-label="Close">
          ${iconX({ classes: 'icon-md' })}
        </div>
        <div class="media-container rounded-md ratio-37.5">
          <div class="media-inner">
            <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      asset and text
    </button>

    <div class="tooltip">
      <div class="card w-80 rounded-md shadow-drop ${cardWhite()}">
        <div class="btn btn-close p-5 text-xl" aria-label="Close">
          ${iconX({ classes: 'icon-md' })}
        </div>
        <div class="media-container rounded-t-md ratio-37.5">
          <div class="media-inner">
            <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
          </div>
        </div>
        <div class="card-md">
          <div class="h4">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </div>
    </div>

  </div>

</div>
`

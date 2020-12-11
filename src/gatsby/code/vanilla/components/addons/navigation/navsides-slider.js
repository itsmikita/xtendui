import path from 'path'
const markupSlider = require('components/snippets/components/markup-slider').default
const indentString = require('indent-string')
const iconArrowLeft = require('components/snippets/icons').iconArrowLeft
const iconArrowRight = require('components/snippets/icons').iconArrowRight

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="slider" data-xt-slider>
${indentString(markupSlider(), 2)}
  <button type="button" class="navsides left-0" data-xt-nav="-1" aria-label="Previous slide" data-xt-mousefollow="{ targets: '.navsides-btn' }">
    <div class="navsides-btn mousefollow text-black text-2xl">
      ${iconArrowLeft({ classes: 'icon-md' })}
    </div>
  </button>

  <button type="button" class="navsides right-0" data-xt-nav="1" aria-label="Next slide" data-xt-mousefollow="{ targets: '.navsides-btn' }">
    <div class="navsides-btn mousefollow text-black text-2xl">
      ${iconArrowRight({ classes: 'icon-md' })}
    </div>
  </button>

</div>
`

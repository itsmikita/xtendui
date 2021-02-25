import React from 'react'
import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="hero relative block overflow-hidden w-full">
  <div class="xt-media-container bg-gray-200 h-screen">
    <div class="xt-media-inner">
      <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
    </div>
  </div>
  <div class="container absolute inset-0 flex items-end justify-center text-center">
    <a href="#" class="group block w-full py-8 md:py-12 text-white xt-links-inverse">
      <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl max-w-2xl mx-auto">
        Lorem ipsum
      </h2>
      <h3 class="xt-p max-w-lg mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
      </h3>
      <div class="xt-list xt-list-3 justify-center max-w-2xl mx-auto">
        <div class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
            Lorem ipsum
        </div>
      </div>
    </a>
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page

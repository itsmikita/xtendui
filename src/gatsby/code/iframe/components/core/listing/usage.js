import React from 'react'
import path from 'path'

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="py-10">
  <div class="container">
    <div class="row row-3">

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="text-black">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Lorem ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="text-black">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="text-black">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Lorem ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="text-black">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="text-black">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Lorem Ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="text-black">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12">
        <a href="#" class="text-black">
          <div class="media-container bg-gray-700 ratio-75 md:ratio-50">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Lorem Ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12">
        <a href="#" class="text-black">
          <div class="media-container bg-gray-700 ratio-75 md:ratio-50">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

    </div>
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page

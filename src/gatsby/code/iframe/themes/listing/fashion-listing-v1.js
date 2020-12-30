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

      <div class="w-6/12 sm:w-4/12">
        <a href="#" class="listing-item block group">
          <div class="media-container ratio-150">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
            <div class="media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
            <div class="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
              <div class="list list-1.5 items-center flex-nowrap">
                <div class="text-lg font-semibold">
                  -35%
                </div>
              </div>
            </div>
          </div>
          <div class="py-4">
            <div class="h5 group-hover:text-accent-500">
              Lorem ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 sm:w-4/12">
        <a href="#" class="listing-item block group">
          <div class="media-container ratio-150">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
            <div class="media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
            <div class="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
              <div class="list list-1.5 items-center flex-nowrap">
                <div class="text-lg font-semibold">
                  -40%
                </div>
              </div>
            </div>
          </div>
          <div class="py-4">
            <div class="h5 group-hover:text-accent-500">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 sm:w-4/12">
        <a href="#" class="listing-item block group">
          <div class="media-container ratio-150">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
            <div class="media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
          </div>
          <div class="py-4">
            <div class="h5 group-hover:text-accent-500">
              Lorem ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 sm:w-4/12">
        <a href="#" class="listing-item block group">
          <div class="media-container ratio-150">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
            <div class="media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
          </div>
          <div class="py-4">
            <div class="h5 group-hover:text-accent-500">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 sm:w-4/12">
        <a href="#" class="listing-item block group">
          <div class="media-container ratio-150">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
            <div class="media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
          </div>
          <div class="py-4">
            <div class="h5 group-hover:text-accent-500">
              Lorem Ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 sm:w-4/12">
        <a href="#" class="listing-item block group">
          <div class="media-container ratio-150">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
            <div class="media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
          </div>
          <div class="py-4">
            <div class="h5 group-hover:text-accent-500">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12">
        <a href="#" class="listing-item block group">
          <div class="media-container ratio-150 sm:ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
            <div class="media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
          </div>
          <div class="py-4">
            <div class="h5 group-hover:text-accent-500">
              Lorem Ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12">
        <a href="#" class="listing-item block group">
          <div class="media-container ratio-150 sm:ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
            <div class="media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
          </div>
          <div class="py-4">
            <div class="h5 group-hover:text-accent-500">
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

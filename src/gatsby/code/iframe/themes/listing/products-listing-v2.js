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

  <div class="xt-slider slider--listing" data-xt-slider="{ contain: true, jumpOverflow: true }">
    <div class="xt-slides">
      <div class="container">

        <div class="xt-h2  mb-8">Latest Products</div>

        <div class="xt-slides-inner xt-row xt-row-4">

          <div class="xt-slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block group">
              <div class="xt-media-container bg-gray-200 xt-ratio-125">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
                <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                <div class="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                  <div class="xt-list xt-list-3 items-center flex-nowrap">
                    <div class="text-lg font-semibold">
                      -35%
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-4">
                <div class="xt-h5  group-hover:text-primary-500">
                  Lorem ipsum
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="xt-slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block group">
              <div class="xt-media-container bg-gray-200 xt-ratio-125">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
                </div>
                <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                <div class="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                  <div class="xt-list xt-list-3 items-center flex-nowrap">
                    <div class="text-lg font-semibold">
                      -40%
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-4">
                <div class="xt-h5  group-hover:text-primary-500">
                  Dolor sit amet
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="xt-slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block group">
              <div class="xt-media-container bg-gray-200 xt-ratio-125">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
                <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
              </div>
              <div class="py-4">
                <div class="xt-h5  group-hover:text-primary-500">
                  Lorem ipsum
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="xt-slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block group">
              <div class="xt-media-container bg-gray-200 xt-ratio-125">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
                </div>
                <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
              </div>
              <div class="py-4">
                <div class="xt-h5  group-hover:text-primary-500">
                  Dolor sit amet
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="xt-slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block group">
              <div class="xt-media-container bg-gray-200 xt-ratio-125">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
                <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
              </div>
              <div class="py-4">
                <div class="xt-h5  group-hover:text-primary-500">
                  Lorem ipsum
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="xt-slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block group">
              <div class="xt-media-container bg-gray-200 xt-ratio-125">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
                </div>
                <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
              </div>
              <div class="py-4">
                <div class="xt-h5  group-hover:text-primary-500">
                  Dolor sit amet
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="xt-slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block group">
              <div class="xt-media-container bg-gray-200 xt-ratio-125">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
                <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
              </div>
              <div class="py-4">
                <div class="xt-h5  group-hover:text-primary-500">
                  Lorem ipsum
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="xt-slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block group">
              <div class="xt-media-container bg-gray-200 xt-ratio-125">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
                </div>
                <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
              </div>
              <div class="py-4">
                <div class="xt-h5  group-hover:text-primary-500">
                  Dolor sit amet
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

        </div>

        <nav class="xt-slider-pagination xt-slider-ui">
          <button type="button" class="xt-button button-default xt-ignore" data-xt-pag title="Slide xt-num">
          </button>
        </nav>

      </div>
    </div>
  </div>

  <div class="listing">
    <div class="container">

      <div class="xt-h2  mb-8">Category</div>

      <div class="xt-row xt-row-6">

        <div class="w-6/12 md:w-4/12">
          <a href="#" class="listing-item block group">
            <div class="xt-media-container bg-gray-200 xt-ratio-125">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
              <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
              <div class="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                <div class="xt-list xt-list-3 items-center flex-nowrap">
                  <div class="text-lg font-semibold">
                    -35%
                  </div>
                </div>
              </div>
            </div>
            <div class="py-4">
              <div class="xt-h5  group-hover:text-primary-500">
                Lorem ipsum
              </div>
              <div class="-mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="w-6/12 md:w-4/12">
          <a href="#" class="listing-item block group">
            <div class="xt-media-container bg-gray-200 xt-ratio-125">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
              </div>
              <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
              <div class="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                <div class="xt-list xt-list-3 items-center flex-nowrap">
                  <div class="text-lg font-semibold">
                    -40%
                  </div>
                </div>
              </div>
            </div>
            <div class="py-4">
              <div class="xt-h5  group-hover:text-primary-500">
                Dolor sit amet
              </div>
              <div class="-mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="w-6/12 md:w-4/12">
          <a href="#" class="listing-item block group">
            <div class="xt-media-container bg-gray-200 xt-ratio-125">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
              <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
            </div>
            <div class="py-4">
              <div class="xt-h5  group-hover:text-primary-500">
                Lorem ipsum
              </div>
              <div class="-mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="w-6/12 md:w-4/12">
          <a href="#" class="listing-item block group">
            <div class="xt-media-container bg-gray-200 xt-ratio-125">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
              </div>
              <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
            </div>
            <div class="py-4">
              <div class="xt-h5  group-hover:text-primary-500">
                Dolor sit amet
              </div>
              <div class="-mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="w-6/12 md:w-4/12">
          <a href="#" class="listing-item block group">
            <div class="xt-media-container bg-gray-200 xt-ratio-125">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
              <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
            </div>
            <div class="py-4">
              <div class="xt-h5  group-hover:text-primary-500">
                Lorem ipsum
              </div>
              <div class="-mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="w-6/12 md:w-4/12">
          <a href="#" class="listing-item block group">
            <div class="xt-media-container bg-gray-200 xt-ratio-125">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
              </div>
              <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
            </div>
            <div class="py-4">
              <div class="xt-h5  group-hover:text-primary-500">
                Dolor sit amet
              </div>
              <div class="-mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="w-6/12 md:w-4/12">
          <a href="#" class="listing-item block group">
            <div class="xt-media-container bg-gray-200 xt-ratio-125">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
              <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
            </div>
            <div class="py-4">
              <div class="xt-h5  group-hover:text-primary-500">
                Lorem ipsum
              </div>
              <div class="-mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="w-6/12 md:w-4/12">
          <a href="#" class="listing-item block group">
            <div class="xt-media-container bg-gray-200 xt-ratio-125">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
              </div>
              <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
            </div>
            <div class="py-4">
              <div class="xt-h5  group-hover:text-primary-500">
                Dolor sit amet
              </div>
              <div class="-mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="w-6/12 md:w-4/12">
          <a href="#" class="listing-item block group">
            <div class="xt-media-container bg-gray-200 xt-ratio-125">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
              <div class="xt-media-mask absolute top-0 lelft-0 w-full h-0 bg-white"></div>
            </div>
            <div class="py-4">
              <div class="xt-h5  group-hover:text-primary-500">
                Lorem ipsum
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

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page

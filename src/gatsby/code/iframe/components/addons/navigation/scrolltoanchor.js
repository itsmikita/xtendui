import React from 'react'
import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefault = require('components/snippets/classes/card-default').default
const cardPrimary = require('components/snippets/classes/card-primary').default
const iconX = require('components/snippets/icons').iconX

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-sticky="{ sticky: 'fixed' }">
  <div class="card card-sm ${cardPrimary()}">
    <div class="list list-2">
      <a href="#anchor-0" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
        anchor 0
      </a>
      <a href="#anchor-1" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
        anchor 1
      </a>
      <a href="#anchor-2" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
        anchor 2
      </a>
      <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}" data-xt-overlay="{ targets: '#demo--overlay-scrolltoanchor' }">
        anchors within overlay
      </button>
    </div>
  </div>
</div>

<div class="overlay" id="demo--overlay-scrolltoanchor">
  <div class="overlay-container p-0">
    <div class="overlay-inner">

      <div class="btn btn-close p-5 text-2xl" aria-label="Close">
        ${iconX()}
      </div>

      <div class="card card-sm ${cardDefault()}" id="anchor-overlay-0">
        <div class="h4">Lorem ipsum dolor sit amet</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        <div class="list list-2">
          <a href="#anchor-overlay-0" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
            anchor overlay 0
          </a>
          <a href="#anchor-overlay-1" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
            anchor overlay 1
          </a>
          <a href="#anchor-overlay-2" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
            anchor overlay 2
          </a>
        </div>
      </div>

      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>

      <div class="card card-sm ${cardDefault()}" id="anchor-overlay-1">
        <div class="h4">Lorem ipsum dolor sit amet</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        <div class="list list-2">
          <a href="#anchor-overlay-0" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
            anchor overlay 0
          </a>
          <a href="#anchor-overlay-1" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
            anchor overlay 1
          </a>
          <a href="#anchor-overlay-2" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
            anchor overlay 2
          </a>
        </div>
      </div>

      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>

      <div class="card card-sm ${cardDefault()}" id="anchor-overlay-2">
        <div class="h4">Lorem ipsum dolor sit amet</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        <div class="list list-2">
          <a href="#anchor-overlay-0" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
            anchor overlay 0
          </a>
          <a href="#anchor-overlay-1" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
            anchor overlay 1
          </a>
          <a href="#anchor-overlay-2" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
            anchor overlay 2
          </a>
        </div>
      </div>

    </div>
  </div>
</div>

<div class="container">

  <div class="card card-sm ${cardDefault()}" id="anchor-0">
    <div class="h4">Lorem ipsum dolor sit amet</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
    <div class="list list-2">
      <a href="#anchor-0" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        anchor 0
      </a>
      <a href="#anchor-1" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        anchor 1
      </a>
      <a href="#anchor-2" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        anchor 2
      </a>
    </div>
  </div>

  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>

  <div class="card card-sm ${cardDefault()}" id="anchor-1">
    <div class="h4">Lorem ipsum dolor sit amet</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
    <div class="list list-2">
      <a href="#anchor-0" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        anchor 0
      </a>
      <a href="#anchor-1" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        anchor 1
      </a>
      <a href="#anchor-2" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        anchor 2
      </a>
    </div>
  </div>

  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>

  <div class="card card-sm ${cardDefault()}" id="anchor-2">
    <div class="h4">Lorem ipsum dolor sit amet</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
    <div class="list list-2">
      <a href="#anchor-0" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        anchor 0
      </a>
      <a href="#anchor-1" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        anchor 1
      </a>
      <a href="#anchor-2" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        anchor 2
      </a>
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

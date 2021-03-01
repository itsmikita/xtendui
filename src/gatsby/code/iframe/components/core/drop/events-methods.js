import React from 'react'
import path from 'path'

const buttonSm = require('components/snippets/classes').buttonSm
const buttonMd = require('components/snippets/classes').buttonMd
const cardSm = require('components/snippets/classes').cardSm
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardDefault = require('components/snippets/classes').cardDefault
const buttonDefaultDrop = require('components/snippets/classes').buttonDefaultDrop
const cardWhite = require('components/snippets/classes').cardWhite

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center mb-4">
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--drop-events-first-element">
    1st element
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--drop-events-first-target">
    1st target
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--drop-events-add">
    Add
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--drop-events-remove">
    Remove
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--drop-events-reinit">
    Reinit
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--drop-events-restart">
    Restart
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--drop-events-destroy">
    Destroy
  </button>
  <button type="button" class="xt-button ${buttonSm()} rounded-md ${buttonPrimary()}" id="demo--drop-events-unmount">
    Unmount
  </button>
</div>

<div class="xt-list xt-list-3 items-center" id="demo--drop-events" title="Object">

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
    Drop 0
  </button>

  <div class="xt-drop p-4" title="Target 0">
    <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${cardWhite()}">
      <nav class="xt-list flex-col">
        <a href="#" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </a>
        <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Dolor sit
        </button>
        <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Amet
        </button>
      </nav>
    </div>
  </div>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
    Drop 1
  </button>

  <div class="xt-drop p-4" title="Target 1">
    <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${cardWhite()}">
      <nav class="xt-list flex-col">
        <a href="#" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </a>
        <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Dolor sit
        </button>
        <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Amet
        </button>
      </nav>
    </div>
  </div>

</div>

<div class="xt-card rounded-md ${cardDefault()} mt-6">
  <div class="${cardSm()} overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56" id="demo--drop-events-log">
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page

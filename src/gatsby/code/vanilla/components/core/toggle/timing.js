import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const cardToggle = require('components/snippets/classes/card-toggle').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center demo--toggle-timing">

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 0
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}" data-xt-group="0">
    Group 0
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}" data-xt-group="1">
    Group 1
  </button>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 0
  </div>

  <div class="card toggle rounded-md ${cardToggle()}" data-xt-group="0">
    Group 0a
  </div>

  <div class="card toggle rounded-md ${cardToggle()}" data-xt-group="1">
    Group 1a
  </div>

  <div class="card toggle rounded-md ${cardToggle()}" data-xt-group="0">
    Group 0b
  </div>

  <div class="card toggle rounded-md ${cardToggle()}" data-xt-group="1">
    Group 1b
  </div>

  <div class="card toggle rounded-md ${cardToggle()}" data-xt-group="0">
    Group 0c
  </div>

  <div class="card toggle rounded-md ${cardToggle()}" data-xt-group="1">
    Group 1c
  </div>

</div>

<div class="list list-2 items-center mt-4 demo--toggle-timing--event">

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 0 hover
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}" data-xt-group="0">
    Group 0 hover
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}" data-xt-group="1">
    Group 1 hover
  </button>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 0 hover
  </div>

  <div class="card toggle rounded-md ${cardToggle()}" data-xt-group="0">
    Group 0a hover
  </div>

  <div class="card toggle rounded-md ${cardToggle()}" data-xt-group="1">
    Group 1a hover
  </div>

  <div class="card toggle rounded-md ${cardToggle()}" data-xt-group="0">
    Group 0b hover
  </div>

  <div class="card toggle rounded-md ${cardToggle()}" data-xt-group="1">
    Group 1b hover
  </div>

  <div class="card toggle rounded-md ${cardToggle()}" data-xt-group="0">
    Group 0c hover
  </div>

  <div class="card toggle rounded-md ${cardToggle()}" data-xt-group="1">
    Group 1c hover
  </div>

</div>
`

import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefault = require('components/snippets/classes').buttonDefault
const labelPrimary = require('components/snippets/classes').labelPrimary
const inputPrimary = require('components/snippets/classes').inputPrimary
const checkPrimary = require('components/snippets/classes').checkPrimary
const radioPrimary = require('components/snippets/classes').radioPrimary
const switchPrimary = require('components/snippets/classes').switchPrimary

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-sm demo--form-variant-primary py-4 px-6 bg-primary-500">
  <div class="xt-row xt-row-x-6 xt-row-y-4">

    <div class="w-full">
      <label class="xt-label mb-3 ${labelPrimary()}">
        Input
      </label>
      <input type="text" class="xt-input rounded-md ${inputPrimary()}" aria-label="Input" placeholder="Input">
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelPrimary()}">
        Disabled
      </label>
      <input type="text" class="xt-input rounded-md ${inputPrimary()}" aria-label="Input" placeholder="Input" disabled>
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelPrimary()}">
        File
      </label>
      <input type="file" class="xt-input rounded-md ${inputPrimary()}" aria-label="File"/>
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelPrimary()}">
        Textarea
      </label>
      <textarea class="xt-input xt-textarea rounded-md ${inputPrimary()} h-24 resize-vertical" aria-label="Textarea" placeholder="Textarea"></textarea>
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelPrimary()}">
        Select
      </label>
      <select class="xt-input xt-select xt-select-primary rounded-md ${inputPrimary()}" aria-label="Select">
        <option selected value="">Select an option</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelPrimary()}">
        Select multiple
      </label>
      <select class="xt-input xt-select xt-select-primary rounded-md ${inputPrimary()}" aria-label="Select multiple" multiple>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">

      <label class="xt-label mb-3 ${labelPrimary()}">
        Checkbox
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full">
          <label class="xt-label-check">
            <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkPrimary()}" checked disabled>
            <span class="ml-3 text-white xt-links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="xt-label-check">
            <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkPrimary()}">
            <span class="ml-3 text-white xt-links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="xt-label mb-3 ${labelPrimary()}">
        Radio
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-radio rounded-full ${radioPrimary()}" name="radio-primary" checked>
            <span class="ml-3 text-white xt-links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-radio rounded-full ${radioPrimary()}" name="radio-primary">
            <span class="ml-3 text-white xt-links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="xt-label mb-3 ${labelPrimary()}">
        Switch
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full">
          <label class="xt-label-check">
            <input type="checkbox" class="xt-check xt-switch rounded-full ${radioPrimary()}">
            <span class="ml-3 text-white xt-links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-switch rounded-full ${switchPrimary()}" name="switch-primary" checked>
            <span class="ml-3 text-white xt-links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-switch rounded-full ${switchPrimary()}" name="switch-primary">
            <span class="ml-3 text-white xt-links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">
      <button type="submit" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
        submit
      </button>
    </div>

  </div>
</form>
`

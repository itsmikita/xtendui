import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const labelPrimary = require('components/snippets/classes/label-primary').default
const inputPrimary = require('components/snippets/classes/input-primary').default
const checkPrimary = require('components/snippets/classes/form-check-primary').default
const radioPrimary = require('components/snippets/classes/form-radio-primary').default
const switchPrimary = require('components/snippets/classes/form-switch-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="demo--form-variant-primary py-4 px-6 bg-primary-500">
  <div class="row row-x-6 row-y-4">

    <div class="w-full">
      <label class="form-label mb-3 ${labelPrimary()}">
        Input
      </label>
      <input type="text" class="form-item rounded-md ${inputPrimary()}" aria-label="Input" placeholder="Input">
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelPrimary()}">
        Disabled
      </label>
      <input type="text" class="form-item rounded-md ${inputPrimary()}" aria-label="Input" placeholder="Input" disabled>
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelPrimary()}">
        File
      </label>
      <input type="file" class="form-item rounded-md ${inputPrimary()}" aria-label="File"/>
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelPrimary()}">
        Textarea
      </label>
      <textarea class="form-item rounded-md ${inputPrimary()} h-24 resize-vertical" aria-label="Textarea" placeholder="Textarea"></textarea>
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelPrimary()}">
        Select
      </label>
      <select class="form-item form-select form-select-primary rounded-md ${inputPrimary()}" aria-label="Select">
        <option selected value="">Select an option</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelPrimary()}">
        Select multiple
      </label>
      <select class="form-item form-select form-select-primary rounded-md ${inputPrimary()}" aria-label="Select multiple" multiple>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">

      <label class="form-label mb-3 ${labelPrimary()}">
        Checkbox
      </label>

      <div class="row row-x-8 row-y-2">

        <div class="w-full">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-checkbox rounded-md ${checkPrimary()}" checked disabled>
            <span class="ml-3 text-white links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-checkbox rounded-md ${checkPrimary()}">
            <span class="ml-3 text-white links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="form-label mb-3 ${labelPrimary()}">
        Radio
      </label>

      <div class="row row-x-8 row-y-2">

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-radio rounded-full ${radioPrimary()}" name="radio-primary" checked>
            <span class="ml-3 text-white links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-radio rounded-full ${radioPrimary()}" name="radio-primary">
            <span class="ml-3 text-white links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="form-label mb-3 ${labelPrimary()}">
        Switch
      </label>

      <div class="row row-x-8 row-y-2">

        <div class="w-full">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-switch rounded-full ${radioPrimary()}">
            <span class="ml-3 text-white links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-switch rounded-full ${switchPrimary()}" name="switch-primary" checked>
            <span class="ml-3 text-white links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-switch rounded-full ${switchPrimary()}" name="switch-primary">
            <span class="ml-3 text-white links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">
      <button type="submit" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
        submit
      </button>
    </div>

  </div>
</form>
`

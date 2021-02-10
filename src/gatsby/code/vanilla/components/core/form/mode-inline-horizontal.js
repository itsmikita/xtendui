import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const checkDefault = require('components/snippets/classes/form-check-default').default
const radioDefault = require('components/snippets/classes/form-radio-default').default
const switchDefault = require('components/snippets/classes/form-switch-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-sm">
  <div class="row row-x-6 row-y-4">

    <div class="w-full md:w-auto">
      <div class="row row-x-6 row-y-4">

        <div class="w-full md:w-auto md:self-center">
          <label class="form-label whitespace-nowrap ${labelDefault()}">
            Lorem ipsum
          </label>
        </div>

        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Lorem ipsum"/>
        </div>

      </div>
    </div>

    <div class="w-full md:w-auto">
      <div class="row row-x-6 row-y-4">

        <div class="w-full md:w-auto md:self-center">
          <label class="form-label whitespace-nowrap ${labelDefault()}">
            Dolor sit amet
          </label>
        </div>

        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Dolor sit amet"/>
        </div>

      </div>
    </div>

    <div class="w-full md:w-auto">
      <div class="row row-x-6 row-y-4">

        <div class="w-full md:w-auto md:self-center">
          <label class="form-label whitespace-nowrap ${labelDefault()}">
            Lorem ipsum
          </label>
        </div>

        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Lorem ipsum"/>
        </div>

      </div>
    </div>

    <div class="w-full md:w-auto">
      <div class="row row-x-6 row-y-4">

        <div class="w-full md:w-auto md:self-center">
          <label class="form-label whitespace-nowrap ${labelDefault()}">
            Dolor sit amet
          </label>
        </div>

        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Dolor sit amet"/>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="row row-x-6 row-y-4">

        <div class="w-full md:w-auto md:self-baseline">
          <label class="form-label whitespace-nowrap ${labelDefault()}">
            Checkbox
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <div class="row row-x-8 row-y-2">

            <div class="w-full md:w-auto">
              <label class="form-label-check">
                <input type="checkbox" class="form-check form-checkbox rounded-md ${checkDefault()}" checked disabled>
                <span class="form-check-content">Lorem ipsum</span>
              </label>
            </div>

            <div class="w-full md:w-auto">
              <label class="form-label-check">
                <input type="checkbox" class="form-check form-checkbox rounded-md ${checkDefault()}">
                <span class="form-check-content">Lorem ipsum</span>
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="row row-x-6 row-y-4">

        <div class="w-full md:w-auto md:self-baseline">
          <label class="form-label whitespace-nowrap ${labelDefault()}">
            Radio
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <div class="row row-x-8 row-y-2">

            <div class="w-full md:w-auto">
              <label class="form-label-check">
                <input type="radio" class="form-check form-radio rounded-full ${radioDefault()}" name="radio-horizontal" checked>
                <span class="form-check-content">Lorem ipsum</span>
              </label>
            </div>

            <div class="w-full md:w-auto">
              <label class="form-label-check">
                <input type="radio" class="form-check form-radio rounded-full ${radioDefault()}" name="radio-horizontal">
                <span class="form-check-content">Lorem ipsum</span>
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="row row-x-6 row-y-4">

        <div class="w-full md:w-auto md:self-baseline">
          <label class="form-label whitespace-nowrap ${labelDefault()}">
            Switch
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <div class="row row-x-8 row-y-2">

            <div class="w-full md:w-auto">
              <label class="form-label-check">
                <input type="checkbox" class="form-check form-switch rounded-full ${switchDefault()}">
                <span class="form-check-content">Lorem ipsum</span>
              </label>
            </div>

            <div class="w-full md:w-auto">
              <label class="form-label-check">
                <input type="radio" class="form-check form-switch rounded-full ${switchDefault()}" name="switch-horizontal">
                <span class="form-check-content">Lorem ipsum</span>
              </label>
            </div>

            <div class="w-full md:w-auto">
              <label class="form-label-check">
                <input type="radio" class="form-check form-switch rounded-full ${switchDefault()}" name="switch-horizontal">
                <span class="form-check-content">Lorem ipsum</span>
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="w-full">
      <button type="submit" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
        submit
      </button>
    </div>

  </div>
</form>
`

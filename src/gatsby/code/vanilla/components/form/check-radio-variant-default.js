import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<form class="form-default">

  <div
    data-xt-toggle="{ elements: '.radio', min: 1 }">

    <div class="form-group" style="padding: 1rem 1.5rem; background: #0078ff;">
      <input type="checkbox" id="checkbox-inverse">
      <label class="form-label form-label-inverse" for="checkbox-inverse">
        Lorem ipsum dolor
      </label>
    </div>

    <div class="form-group-inline">
      <div class="form-group">
        <input type="checkbox" id="checkbox-validation-default" disabled>
        <label class="form-label" for="checkbox-validation-default">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="checkbox" id="checkbox-validation-default">
        <label class="form-label" for="checkbox-validation-default">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="radio" id="radio-validation-0-default" name="radio-validation-default" disabled>
        <label class="form-label" for="radio-validation-0-default">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="radio" id="radio-validation-0-default" name="radio-validation-default">
        <label class="form-label" for="radio-validation-0-default">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="radio" id="radio-validation-1-default" name="radio-validation-default">
        <label class="form-label" for="radio-validation-1-default">
          Lorem ipsum dolor
        </label>
      </div>
    </div>

    <div class="form-group-inline">
      <div class="form-group">
        <button type="button" class="checkbox" data-xt-toggle="{ elements: false }">
          Lorem ipsum dolor
        </button>
      </div>

      <div class="form-group">
        <button type="button" class="radio">
          Lorem ipsum dolor
        </button>
      </div>

      <div class="form-group">
        <button type="button" class="radio">
          Lorem ipsum dolor
        </button>
      </div>
    </div>

  </div>

  <button type="submit" class="btn btn-primary">
    submit
  </button>

</form>
`

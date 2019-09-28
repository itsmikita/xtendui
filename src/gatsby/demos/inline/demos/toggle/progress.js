import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list-space--small align-items--center demo--toggle--progress">
  <button type="button" class="btn">
    <span>
      Toggle 0
    </span>
    <span class="loader loader--y loader--js">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
  </button>
  <button type="button" class="btn">
    <span>
      Toggle 1
    </span>
    <span class="loader loader--y loader--js">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
  </button>
  <button type="button" class="btn">
    <span>
      Toggle 2
    </span>
    <span class="loader loader--y loader--js">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
  </button>
  <button type="button" class="btn">
    <span>
      Toggle 3
    </span>
    <span class="loader loader--y loader--js">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
  </button>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 0
      <div class="loader loader--x loader--size-bottom loader--js">
        <div class="filler">
          <span></span><span></span>
        </div>
      </div>
    </div>
  </div>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 1
      <div class="loader loader--x loader--size-bottom loader--js">
        <div class="filler">
          <span></span><span></span>
        </div>
      </div>
    </div>
  </div>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 2
      <div class="loader loader--x loader--size-bottom loader--js">
        <div class="filler">
          <span></span><span></span>
        </div>
      </div>
    </div>
  </div>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 3
      <span class="loader loader--x loader--size-bottom loader--js">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
    </div>
  </div>
</div>
`

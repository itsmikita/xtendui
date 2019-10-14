import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="slider"
     data-xt-slider>

  <div class="slides">
    <ul class="slides_inner">

      <li class="slide col-6 col-4-sm">
        <div class="slide_inner">

          <div class="card card--default text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1 class="slide_pagination_content">1</h1>
              <nav class="slider_pagination">
                <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
                </button>
              </nav>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide_inner">

          <div class="card card--default text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1 class="slide_pagination_content">2</h1>
              <nav class="slider_pagination">
                <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
                </button>
              </nav>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide_inner">

          <div class="card card--default text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1 class="slide_pagination_content">3</h1>
              <nav class="slider_pagination">
                <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
                </button>
              </nav>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide_inner">

          <div class="card card--default text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1 class="slide_pagination_content">4</h1>
              <nav class="slider_pagination">
                <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
                </button>
              </nav>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide_inner">

          <div class="card card--default text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1 class="slide_pagination_content">5</h1>
              <nav class="slider_pagination">
                <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
                </button>
              </nav>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-12">
        <div class="slide_inner">

          <div class="card card--default text-align--center" style="height: 15rem;">
            <div class="card_design"></div>
            <div class="card_content">
              <h1 class="slide_pagination_content">6</h1>
              <nav class="slider_pagination">
                <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
                </button>
              </nav>
            </div>
          </div>

        </div>
      </li>

    </ul>
  </div>

  <nav class="slider_pagination">
    <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
      xt-num of xt-tot : xt-content
    </button>
  </nav>

</div>
`

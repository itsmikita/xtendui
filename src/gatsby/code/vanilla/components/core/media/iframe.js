import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-media-container bg-gray-700 xt-ratio-56.2">
  <div class="xt-media-inner">
    <iframe class="xt-media" type="text/html" src="https://www.youtube.com/embed/hNQFjqDvPhA?autoplay=0&showinfo=0&enablejsapi=1&rel=0" frameborder="0"></iframe>
  </div>
</div>
`

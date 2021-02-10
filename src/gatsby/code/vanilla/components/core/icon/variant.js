import path from 'path'
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="h6 my-6 mt-fc mb-lc py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Default
</div>

${iconSearch()}

<div class="h6 my-6 mt-fc mb-lc py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Accent
</div>

${iconSearch({ classes: 'text-accent-50' })}

${iconSearch({ classes: 'text-accent-100' })}

${iconSearch({ classes: 'text-accent-200' })}

${iconSearch({ classes: 'text-accent-300' })}

${iconSearch({ classes: 'text-accent-400' })}

${iconSearch({ classes: 'text-accent-500' })}

${iconSearch({ classes: 'text-accent-600' })}

${iconSearch({ classes: 'text-accent-700' })}

${iconSearch({ classes: 'text-accent-800' })}

${iconSearch({ classes: 'text-accent-900' })}

<div class="h6 my-6 mt-fc mb-lc py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Black opacity
</div>

${iconSearch({ classes: 'text-black text-opacity-0' })}

${iconSearch({ classes: 'text-black text-opacity-25' })}

${iconSearch({ classes: 'text-black text-opacity-50' })}

${iconSearch({ classes: 'text-black text-opacity-75' })}

${iconSearch({ classes: 'text-black text-opacity-100' })}
`

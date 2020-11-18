const glob = require('glob')
const writeFile = require('write')

let cssDemos = ''
const cssDemosGlob = new glob.Glob('static/demos/**/*.css', { ignore: ['**/_*.css'] }, (er, files) => {
  for (const file of files) {
    cssDemos += `@import 'xtendui/${file}';\n`
  }
})
cssDemosGlob.on('end', () => {
  writeFile('./build/xtend-demos.css', cssDemos)
})

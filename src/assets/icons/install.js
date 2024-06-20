// yes i made a script
const fs = require('fs')
const names = process.argv.slice(2)
if(names.length == 0) return console.log(`No names..`)
    names.forEach((n) => {
let s = Date.now()
console.log(`Downloading ${n}`)
fetch(`https://github.com/catppuccin/vscode-icons/blob/main/icons/mocha/${n}.svg?raw=true`).then(r=>r.arrayBuffer()).then(e => {
    fs.writeFileSync(`${n}.svg`, Buffer.from(e))
    console.log(`Written ${n} in ${Date.now() - s}ms`)
})
}) 
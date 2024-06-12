import fs from 'fs'
import path from 'path'
const reactOutput = Bun.spawnSync({
    cmd: ['bun', 'build:react']
})
console.log(reactOutput.stdout.toString())
console.log(`Built react app`)
// fs.cpSync(path.join(__dirname, '../build'), path.join(__dirname, '../dist/php'), {recursive: true})
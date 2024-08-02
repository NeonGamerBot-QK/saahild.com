import fs from 'fs'
import path from 'path'
const reactOutput = Bun.spawnSync({
    cmd: ['bun', 'build:react']
})
console.log(reactOutput.stdout.toString())
console.log(`Built react app`)
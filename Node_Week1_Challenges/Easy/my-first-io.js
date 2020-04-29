const fs = require(`fs`)

const entry = fs.readFileSync(process.argv[2])


const entryLines = entry.toString().split(`\n`).length - 1


console.log(entryLines)
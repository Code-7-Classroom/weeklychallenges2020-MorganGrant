// console.log(process.argv)

let sum = 0

for (n = 2 ; n < process.argv.length ; n++ ) {
    sum += parseInt(process.argv[n])
}

console.log(sum)
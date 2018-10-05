//Zadanie 1
const hello = 'Hello'
const world = 'World'
console.log(`${hello} ${world}`)
//Zadanie 2
const multiply = ( a, b = 1 ) => sum = a * b
console.log(multiply(5));
// Zadanie 3
let average = (...sum) => Math.floor(sum.reduce((previous, current) => previous + current / sum.length))
console.log(average(1)) // 1
console.log(average(1, 3)) // 2
console.log(average(1, 3, 6, 6)) // 4
//Zdanie 4
average = (...sum) => sum.reduce((previous, current) => previous + current)
const grades = [ 1, 5, 5, 5, 4, 3, 3, 2, 1 ]
console.log(average(...grades))
// // Zadanie 5
const oddArray = [1, 4, 'Iwona', false, 'Nowak']
const [, , firstname, , lastname] = oddArray
//Zadanie 1
const hello = 'Hello'
const world = 'World'
console.log(`${hello} ${world}`)
//Zadanie 2
const b = 1
const multiply = ( a, b) => sum = a * b
multiply(5);
// Zadanie 3
// const average = () => averageSum = 
function mean(array) {
    const sum = array.reduce((a, b, c, d) => a + b + c + d, 0);
    return sum / array.length;
  }
average(1) 
average(1, 3) 
average(1, 3, 6, 6)
//Zdanie 4
const grades = [...1, ...5, ...5, ...5, ...4, ...3, ...3, ...2, ...1]
const average = (sum) => sum
// // Zadanie 5
const oddArray = [1, 4, 'Iwona', false, 'Nowak']
const [, , firstname, , lastname] = oddArray

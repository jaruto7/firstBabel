'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//Zadanie 1
var hello = 'Hello';
var world = 'World';
console.log(hello + ' ' + world);
//Zadanie 2
var b = 1;
var multiply = function multiply(a, b) {
    return sum = a * b;
};
multiply(5);
// Zadanie 3
// const average = () => averageSum = 
function mean(array) {
    var sum = array.reduce(function (a, b, c, d) {
        return a + b;
    }, 0);
    return sum / array.length;
}
average(1);
average(1, 3);
average(1, 3, 6, 6);
//Zdanie 4
var grades = [].concat(_toConsumableArray(1), _toConsumableArray(5), _toConsumableArray(5), _toConsumableArray(5), _toConsumableArray(4), _toConsumableArray(3), _toConsumableArray(3), _toConsumableArray(2), _toConsumableArray(1));
var average = function average(sum) {
    return sum;
};
// // Zadanie 5
var oddArray = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = oddArray[2],
    lastname = oddArray[4];

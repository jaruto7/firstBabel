'use strict';

//Zadanie 1
var hello = 'Hello';
var world = 'World';
console.log(hello + ' ' + world);
//Zadanie 2
var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return sum = a * b;
};
console.log(multiply(5));
// Zadanie 3
var average = function average() {
  for (var _len = arguments.length, sum = Array(_len), _key = 0; _key < _len; _key++) {
    sum[_key] = arguments[_key];
  }

  return Math.floor(sum.reduce(function (previous, current) {
    return previous + current / sum.length;
  }));
};
console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4
//Zdanie 4
average = function average() {
  for (var _len2 = arguments.length, sum = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    sum[_key2] = arguments[_key2];
  }

  return Math.floor(sum.reduce(function (previous, current) {
    return previous + current / sum.length;
  }));
};
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));
// // Zadanie 5
var oddArray = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = oddArray[2],
    lastname = oddArray[4];

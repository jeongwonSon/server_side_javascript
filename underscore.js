/*
 * require 함수는 module을 가져온 뒤, return 함
 * : underscore은 알아두면 굉장히 유용함
 * 
 */

var _ = require('underscore');	// underscore은 _를 변수로 이용하는 관습있음
var arr = [3,6,9,1,12];

console.log(arr[0]);
console.log(_.first(arr));	// 배열의 첫번째 원소를 가져옴
console.log(arr[arr.length-1]);	// 배열의 마지막 원소를 가져옴
console.log(_.last(arr));
//Given an array of numbers find the sum of cubes if the number is divisible by 3
var arr = [1, 2, 3, 4, 5, 6];
//finding the no. divisible by 3
var div3 = function (el) {
    return (el % 3 == 0);
}
//making cube function 
var cube = function (el) {
    return (el ** 3);
}
//finding sum function.
var sum = function (ac, el) {
    return ac + el;
}
// here filtering the divisible by three and mapping the cube and then reducing in sum.
var op = arr.filter(div3).map(cube).reduce(sum);
console.log(op);
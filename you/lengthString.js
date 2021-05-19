//Given an array of strings print the length of each string
var arr = ["apple", "windows", "ubuntu"];
//creating a function to know the length 
var len = function (el) {
    return el.length;
}
//call the len function and map on all elements of input.
var op = arr.map(len);
//printing the output.
console.log(op);  // [ 5, 6, 7 ]
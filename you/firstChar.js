//Given an array of string generate an array with their first characters
var arr = ["apple", "windows", "ubuntu"];
//creating the function using charAt(0), function.
var char = function (el) {
    return el.charAt(0);
}
//mapping the char function to all element of arr.
var op = arr.map(char);
console.log(op);
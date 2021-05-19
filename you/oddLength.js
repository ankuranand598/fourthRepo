//Given an array of strings print the sum of lengths if the characters in the string are odd.
var arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];
// creating a function to count the length of strings in array,
var length = function (el) {
    return el.length;
}
//finding the odd using a function,
var odd = function (el) {
   
    return (el%2==1);
}
//function to do sum of all numbers,
var sum = function(el, ac) {
    return el + ac;
}
// putting answe in variable op by mapping the length and filtering the odd value and
//reducing the value in single form using sum function.
var op = arr.map(length).filter(odd).reduce(sum);
console.log(op);
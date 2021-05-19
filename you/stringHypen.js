//Given an array of strings convert them to hypen case,
var arr = ["Apple", "Windows", "UBUNTU"];
// creating a new function which take all the element of array and convert it using toLowerCase.
var hyphen = function (el) {
    return el.toLowerCase();
}
//putting the output in variable by map and join function including '-'.
var op = arr.map(hyphen).join("-");
console.log(op);//op-apple-windows-ubuntu.
var arr = [1, 2, 3, 4, 5];
var odd = function (ele) {
    return (ele % 2 == 1);
}
//above code will give boolean value, it can give original value by filter function.
var op = arr.filter(odd);
console.log(op);
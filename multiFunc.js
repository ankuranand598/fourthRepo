var arr = [1, 2, 3, 4, 5];
//here reduce function will work as an accumulator ie, take previous value and mutiply with 
//current value.
var res = arr.reduce(function (pr, cu) {
    return pr * cu;
})
console.log(res);
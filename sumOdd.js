var arr = [3, 5, 4, 6, 8, 7];
//first we filter odd using function;
var oddSum = function (ele) {
    return (ele % 2 == 1);
}
//then we find a sum function.
var sum = function (ac, cu) {
    return ac + cu;
}
//later we will filter the odd and reduce it to the sum.
var op = arr.filter(oddSum).reduce(sum);
console.log(op);
/*var element = [2, 3, 4, 5, 6, 7, 8, 9];
var squarePrint = function (ele) {
    console.log(ele ** 2);
}
//element.forEach(squarePrint);
//console.log(element.map(squarePrint));
//one line printing.
var name = "apple";
console.log(name.charAt(2));*/
for (var i = 1; i <= 4; i++){
    var res = " ";
    for (var j = 1; j <= 4; j++){
        res += i * j+" ";
    }
    console.log(res);
}
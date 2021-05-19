var arr = ["apple", "windows", "ubuntu", "cola", "system"];
var withA = function (el) {
    var n = el.length;
    for (var i = 0; i < n; i++){
        if (el[0] == 'a' || el[n - 1] == 'a') {
            return el;
        } 
    }
}
var op = arr.filter(withA);
console.log(op);
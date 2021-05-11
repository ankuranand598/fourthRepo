var N = 5;
var a = (N * 2) + 1;
for (var i = 1; i <= a; i++){
    var res = "";
    if (i == Math.ceil(a / 2)) {
        res += "* ";
    } else if (i < Math.ceil(a / 2)) {
        res = " ";
    }
    for (var j = 1; j <= i; j++){
        res = + "";
        if (j == Math.ceil(a / 2)) {
            res += "* ";
        }
    }
}
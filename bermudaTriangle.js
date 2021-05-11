var N = 6;
for (var i = 1; i <= 6; i++) {
    var res = "";
    for (var j = 1; j <= N - i; j++) {
        res = res + " ";
    }
        for (var k = 1; k <= i; k++) {
            res = res + "* ";
    }
    console.log(res);
}
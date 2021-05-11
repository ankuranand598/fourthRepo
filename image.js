var N = 6;
for (var i = 1; i <= N; i++){
    var res = " ";
    for (var j = 1; j <= N-j ; j++){
        if (i == N) {
            res = res + "* ";
        } else {
            res =res + "  ";
        }
    }
    res = res + "*";
    console.log(res);
}
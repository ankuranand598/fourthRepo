var res = "";
    for (var j = 1; j <= 6; j++) {
    
        for (var i = 1; i <= j; i++) {
            res = res + "*";
           
        }
       // res += "\n";
}
for (var k = 6; k >= 1; k--){
    for (var l = 6; l >= 1; k--){
        res = res + "+";
    }
res = res + "\n";
}

console.log(res);

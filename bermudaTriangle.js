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
var a = 10;
  var b =10 ;
  var p = a.length;
  var q = b.length;
  for(var i = 0; i<p-q+1;i++){
    console.log(i);
  for(var j = 0; j<q;j++){
  console.log("*");
  }
  }
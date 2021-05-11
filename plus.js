/*var N = 5;
var a = (N * 2) + 1;
for (var i = 1; i <= a; i++){
    var res = "";
    if (i == Math.ceil(a / 2)) {
        res += "* ";
        
    
    }
    for (var j = 1; j <= Math.ceil(a / 2) -1; j++){
        res = + " ";
        if (j == Math.ceil(a / 2)) {
            res += "* ";
        }
        for (k = 1; k <= a; k++){
            res = res + "*";
        }
        console.log(res); 
    }*/
var N = 4;
     var res = "";
  for(var i=1; i<= N;i++){
    
  for(var j=1; j<=N;j+j){
  res =res + j;
      }
      for (k = 1; k <= N; k++){
          res += "";
      }
    console.log(res);
  }
   

/*var n = 5;
var res = "";
for (i = 1; i <= n; i++) {       
    for (j = 1; j <= n; j++) {       
            if (j == Math.ceil(n / 2)) {
                res += "* ";
            }
            else if(i== Math.ceil(n / 2)){
                res += "* ";
            } else {
                 res += "  "
        }        
    }
       res += "\n";
    }   
    console.log(res);*/
     
/*var N = 4;
      var n = N * 2 + 1;
for (i = 1; i <= n; i++) {

    var  res= " ";
    res = "*";
    for (j = Math.ceil(n/2); j >=1; j--) {
            
        if (i==j || i + j == n + 1) {
            res += "*";
        }
        //if (i + j == n + 1) {
          //  res += "t";
        //}
        else
       {
           res += " ";
        }
        
    }
   
     
        
     console.log(res);
    }  */ 
    
var n = 4;
var res = "";
for (var i = n; i >= 1; i--){
    res = " ";
    for (var k = 1; k <= n - i; k++){
        res += " ";
    }
    for (var j = 1; j <= 2 * i - 1; j++){
        res += "*";
    }
    console.log(res);
}

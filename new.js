var n = 3;
var x = n * 2 + 1;
var y = Math.ceil(x / 2);
for (var i = 1; i <= x; i++){
    console.log("*");
    for (j = 1; j <= i; j++){
        console.log("*");
    }
    for (k = 1; k <= j; k++) {
        console.log("*");
     }
    
    console.log("*");
    /*for (var j = 1; j <= x; j++){
    console.log("*");  
        for (k = 1; k <= x; k++) {
            console.log("*");
         }
    
    }*/
    
}
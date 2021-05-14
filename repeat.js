var a = "aaabbcdddde";
var res = "";
var count = 1;
var temp = a[0];
    for (var i = 0; i <=a.length; i++) {
        res += "";

        if (temp == a[i]) {
           // res += a[i];
           // res += a[i] + count;
                count++;
       
        } else {
            res += temp + " "+count+ " ";
            temp = a[i];
            count = 1;
        }
    
}
res += temp + count;
console.log(res);
var arr = res;
var n = arr.split(" ");
for (var k = 0; k < n.length; k++){
    if (n[k] == 1) {
        console.log(n[k - 1]);
        break;
    }

}


 
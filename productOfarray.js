var arr = '1,2,3,4,5,6';
if (typeof arr == "string") {
    var data = arr.split("").map(Number);
}
var res = "";
var arr_left;
var n = data.length;
var arr_right = data[n];
var output = "";
for (var i = 1; i <= n; i+=2) {
   //data[i] = data[i] * data[i + 1];
    
    console.log(data[i]);
}

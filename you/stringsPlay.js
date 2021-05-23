var data = "A quick BROWN fox Jumps oveR a LazY DOg";
var arr = [];
arr.push(data.split(" "));
var convert = function (el){
    if (typeof el == 'string') {
        var str = el.split("");
    }
    var smal = "abcdefghijklmnopqrstuvwxyz";
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (var j = 0; j < el.length; j++){
        for (var k = 0; k < caps.length; k++) {
            if (str[j] == caps[k]) {
            
            } else {
                str[j]=caps[k]
            }
        }
        console.log(str);
    }

}
for (var i = 0; i < arr.length; i++) {
    convert(arr[i]);
}
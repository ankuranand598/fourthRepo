
var data = "abaANVK";
  var n = data.length;
  var res = "";
  var smal = "abcdefghijklmnopqrstuvwxyz";
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(typeof data == "string"){
    var t = data.split("");
    }
  for(var i =0;i< n;i++){
    res += "";
  for(var j =0;j< smal.length;j++){
  if(t[i]==smal[j]){
      res += caps[j];
  } else if (t[i] == caps[j]) {
      res += smal[j];
  }
  }
  }
console.log(res);
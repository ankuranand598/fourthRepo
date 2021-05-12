
 
  var data = "aaabcddd";
  var n = data.length;
 var temp = data[0];
  var res = "";
  for(var i=0; i<n-2; i++){
  if(data[i]==data[i+1]){
  i=i+2;
  }
  res += data[i];
  }
 console.log(res);
function sidesCalcu(item){
  var res = "";
for(var i = 0;i< item.length;i++){
    //console.log(item[i]);
  if(item[i]<item[i+1] && item[i+2]<item[i+1]){
      res = item[i+1];
   }
  if(item[i]<item[i+2] && item[i+1]<item[i+2]){
      res = item[i+2];
   }else{
     res = item[i];
  }
}
  return res;
}

function twoSides(item, x){
  var side = 0;
   for(var i = 0;i<item.length;i++){
   side += item[i]
   }
  side = side - x;
  return side;
}
function answer(v,z){
      if( v < z){
      console.log("Yes");
         }else if(v == z){
      console.log("No");
       }else {
      console.log("No");
     }
}

  var newInput = input.split(/[\r\n]+/);
  var length = Number(newInput[0]);
  var data = newInput[1].split(" ").map(Number);
   for(var i = 1;i <= length;i++){
  var data = newInput[i].split(" ").map(Number);
    console.log(data);
   var p = sidesCalcu(data);
    var t= twoSides(data, p);
      answer(p,t);
     
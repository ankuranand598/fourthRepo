var arr = [1, 2, 3, 4, 5];
//running the function for each of element in array like a loop.
arr.forEach(function (item) {
    console.log(item ** 2);
})


function checkAhead(item,value){
item.push(value);
  //item.sort();
 // console.log(item);
  for(var i = 0;i<item.length;i++){
  if(item[i]==value){
  if(item[i+1]==""){
  console.log("-1");
  }else{
  console.log(item[i+1]);
  }
  
  }
  } 
}

function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var length = Number(newInput[0]);
  var data = newInput[1].split(" ").map(Number);
  var len = newInput[2].split(" ").map(Number);
   //console.log(data, len); 
  for(var i=3;i<newInput.length;i++){
  var chek = newInput[i];
    //console.log(data,chek);
     checkAhead(data,chek);
  }
 
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
    read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
var arr = [2, 4, 5, 3, 6, 8];

var even = function (el) {
   
        return (el%2==0);
    
}


var evenIndex = function (el) {
    var op = arr.indexOf(el);
    if (op % 2 == 0) {
        return el;
  }  
}
var output = arr.map(evenIndex).filter(even);
console.log(output);
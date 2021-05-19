var arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];
var length = function (el) {
    return el.length;
}
var odd = function (el) {
   
    return (el%2==1);
}
var sum = function(el, ac) {
    return el + ac;
}
var op = arr.map(length).filter(odd).reduce(sum);
console.log(op);
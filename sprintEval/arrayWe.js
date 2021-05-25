//Given a 2D array print the column-wise sum of all the columns
var data = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
];
var sum = 0;
var arr = [];
for (var i = 0; i < data.length; i++){
    for (var j = 0; j < data[i].length; j++) {
        for (k = 0; k < data[i].length; k++)
            sum += data[k][j];
        arr.push(sum);
        sum = 0;       
    }
    break;
    }
console.log(arr.join("\n"));
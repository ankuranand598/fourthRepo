var matrix1 = [
    [1,2,3],
    [5,6,7],
    [7,8,9]
];
var matrix2 = [
    [2,1,2],
    [1,2,1],
    [2,1,2]  
]
sum = '';
var result = 0;
    for (var i = 0; i < matrix1.length; i++) {
        for (var j = 0; j < matrix1[i].length; j++) {
            result = matrix1[i][j] + matrix2[i][j];
            sum += result + ' ';
        }        
}
    console.log(sum);
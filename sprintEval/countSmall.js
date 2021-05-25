var input = ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"];
var smal = "abcdefghijklmnopqrstuvwxyz";
var count = 0;

for (var i = 0; i < input.length; i++){
    count = 0;
    for (var j = 0; j < smal.length; j++){
        if (input[i] == smal[j]) {
            count++;
        }
    }
    console.log(count);
}

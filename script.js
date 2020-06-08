//var arr = [10, 20, 30, 40];
var arr = [];

for(var j = 0; j >= 10; j++) {
    arr.push(j)
}

var sum = 0;

for(var i = 0; i <= arr.length-1 ;i++) {
    sum += arr[i];
}

console.log(sum);
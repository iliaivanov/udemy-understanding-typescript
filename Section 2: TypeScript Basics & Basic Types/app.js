function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// function printResult(num: number): undefined {
//   console.log('Result: ' + num)
//   return;
// }
printResult(add(5, 12));
// Function type which takes two number parameters and returns number
var combinedValues;
combinedValues = add;
console.log(combinedValues(1, 2));
addAndHandle(10, 20, function (num) { return console.log(num); });

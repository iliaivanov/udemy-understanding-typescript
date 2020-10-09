function add(n1: number, n2: number) {
  return n1 + n2
}

function printResult(num: number): void {
  console.log('Result: ' + num)
}
// Example of cvallback function type
function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2
  cb(result)
}

// function printResult(num: number): undefined {
//   console.log('Result: ' + num)
//   return;
// }

printResult(add(5, 12))

// Function type which takes two number parameters and returns number
let combinedValues: (a: number, b: number) => number

combinedValues = add

console.log(combinedValues(1, 2))

addAndHandle(10, 20, (result) => console.log(result))
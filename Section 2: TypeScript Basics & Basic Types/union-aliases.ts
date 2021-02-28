type Combinable = number | string // Type alliases
type ConversionDescriptor = 'to-string' | 'to-number' // Literal: allows only those defined values

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result

  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }

  return result
}

const combinedAges = combine(30, 26, 'to-number')
console.log(combinedAges)

const combinednames = combine('Ilia', 'Masha', 'to-string')
console.log(combinednames)
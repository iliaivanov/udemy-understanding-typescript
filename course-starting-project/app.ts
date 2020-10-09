let userInput: unknown
let userName: string

userInput = 5
userInput = 'tere'
// Compiler will only allow to assign string values because userName is string type
// userName = userInput
// unknown type is better then any, it is more strict
if (typeof userInput === 'string') {
  userName = userInput
}
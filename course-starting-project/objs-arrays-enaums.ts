// const person: {
//   name: string,
//   age: number
// } = {
// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string] // tuple
// } = {
//   name: 'Ilia',
//   age: 30,
//   hobbies: [
//     'sports',
//     'cooking'
//   ],
//   role: [2, 'author']
// }

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: 'Ilia',
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN,
}

let favoriteActivities: string[]
favoriteActivities = ['sports']

console.log(person)

for (const hobbie of person.hobbies) {
  console.log(hobbie.toUpperCase)
}

ES6 features
* arrow functions
  * short arrow function
* let, const
* default parameters
  * `const add = (a: number, b: number = 1) => a + b`
  * default parametrs should be last in the list
    * `const add = (a: number = 1, b: number) => a + b` -> will pass 1 to a parameter
* spread operator
** can be used with objects as well { ...anotherObject }
* rest parameters
** can specify unlimited amount for function params: `const add = (...numbers) => numbers.push(10)`
* it is possible to distruct array elemets `const [firtElement, secondElement, ...restElements] = ['elem1', 'elem2', 'elem3']`


https://www.typescriptlang.org/docs/handbook/generics.html

# Constrains might be used when defining a generic function
```
function <T extends object, U extends object> (a: T, b: U) {}
```
# Keyof constraint
Can define that U generic should be a value from keys of generic T   
```
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}
```
# Generics also works with classes
# Utility types
https://www.typescriptlang.org/docs/handbook/utility-types.html
## Partial build-in type
It can be used to wrap some other type. It makes all second types properties optional.
## Readonly
Can be used to make things (variables, properties etc) readonly.
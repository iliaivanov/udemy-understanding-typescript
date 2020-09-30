# Type Script cource notes

## Commands
`tsc app.ts` - compile signle ts file to js   

## Tools
### Lite server
Lightweight development only node server https://www.npmjs.com/package/lite-server 

## Code

`let numberVar: numer;` - initialising variables with types   
`let numberVar = 5;` - here no need to set type because TS inherits it from assigned value   
Enums example
```
enum Role {
  ADMIN, 
  AUTHOR,
  READ_ONLY_USER
}
```
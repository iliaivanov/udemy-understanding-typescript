# Type Script cource notes

## Commands
`tsc app.ts` - compile signle ts file to js   
`tsc app.ts --watch` - watch changes in the file and recompile   
`tsc --init` - create init file for ts. means that project in this folder  contains ts. after that just running `tsc` will watch ts files in current folder   
`tsc --watch` - with existing config file will watch over all files in the current dir   

TS cli options: https://www.typescriptlang.org/docs/handbook/compiler-options.html   

## Tools
### Lite server
Lightweight development only node server https://www.npmjs.com/package/lite-server 

## Code

`let numberVar: number;` - initialising variables with types   
`let numberVar = 5;` - here no need to set type because TS inherits it from assigned value   
Enums example
```
enum Role {   
  ADMIN,   
  AUTHOR,   
  READ_ONLY_USER   
}
```
`_` function argument makes it optional and TS ignores not passing it in   

## Debugging (with browser)
* Prosess should already run when debugging is started
* When initially run `F5` -> prompt with browser selection will be displayed
	* Debug chrome extensiopn should be installed
* Set break point
* After that run debugging againg
* New tab will be opened (old debugging tabs should be closed)
* Working!

Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html
VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging

## Compiler config
tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

### Exclude
In tsconfig possible to add `exclude` on the root level to exclude files should be compiled. `node_modules` is exlcuded by defaults if no excliusions are defined. Otherwise it should be explicitly defined. 
```   
"exclude": [
   "qwe.ts",
   "*.dev.ts",
   "node_modules"
]
```   
### Include
Opposite for exclude :P
### Files
Almose same as `include` but can be used for directories.
### Target
Target version of JS to complite ts code. After compiler possible to use some transpiler on top of js file.
### Lib
Using `document` or `console` might create troubles for compiler since it doesn't know what it is if `lib` is commented out. This set of libraries is default for `es6` if used as `target` but should be explicitly set if `lib` is commented out.
```   
"lib": [
   "dom",
   "es6",
   "dom.itarable",
   "scripthost"
]
```
### AllowJs
Allows to compile js files - syntax will be checked as for ts files.   
### CheckJs
Will only check js files for syntax.
### Source map
`sourceMap` - enables source maps for TS files (browser).   
### Directories
`outFile` and `outDir` - can set default dist and source directories.   
### Remove comments 
`removeComments` - remove comments made in TS when compiled to JS

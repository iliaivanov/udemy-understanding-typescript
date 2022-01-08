# Enabling
Need to enable experemental decorators in TS config (ES7 )

* Decorator is a function applied to an object in a spesific way
* Decorator functions are named with a capial letter in the beginning
* Decorator factories gives more control over internals
** Factory returns an anonymous function with will be the decorator 
* Decorators are executed from top to down
** In case of factories: real decorators are executed from buttom to top 
** Executed when class is defined
* Good use-case for decorator: object property validator
** Property decorator is executed when class is defined
* Decorator can be applied for mentod / function argument
* Decorator can return new constructor and override existing one
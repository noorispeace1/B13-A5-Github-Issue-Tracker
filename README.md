
    
    1. What is the difference between var, let, and const?
     answer :
Variables declared with var can be re-declared in the same scope.
let and const cannot be re-declared in the same scope.
Use const when the value should not change.
Use let when the value may change.
Avoid var due to scope and redeclaration issues.


    - 2.What is the spread operator (...)?
      Makes code shorter and cleaner
Improves readability
Reduces the need for loops and complex methods
example: 
const arr1 = [1, 2, 3];
const arr2 = [...arr1];


    - 3 What is the difference between map(), filter(), and forEach()?

1 map

Used to transform each element of an array.

It applies a function to every element.

Returns a new array with modified elements.

The original array remains unchanged.

2 filter

Used to select elements based on a condition.

It checks each element using a test function.

Returns a new array containing only elements that satisfy the condition.

The original array remains unchanged.

3 forEach

Used to execute a function for each array element.

It is mainly used for side effects like printing or updating values.

Does not return a new array (returns undefined).

The original array can be modified if needed.

    - 4 What is an arrow function?


Arrow functions provide a cleaner and shorter way to write functions and are widely used in modern JavaScript, especially in callbacks and functional programming.

=>


    - 5 What are template literals?

Template literals make string creation more powerful and readable by allowing embedded expressions and multi-line formatting.



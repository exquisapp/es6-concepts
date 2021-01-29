/**
 * First-Class Citizen Functions
 * What’s good about Functional Programming is its functions are first-class citizens: you can always insert functions inside a function without any restrictions present.
 */

function executeFunctions(x, y) {
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    console.log(`sum: ${add(x,y)}`);
    console.log(`difference: ${subtract(x,y)}`);
 }

 /**
  * Higher-Order Functions
  * A higher-order function is a function that gets a function as an argument. It may or may not return a function as its resulting output.
  */

 function greaterThan(n) {
    return x => x > n;
 }
 let greaterThanTwo = greaterThan(2);
 console.log(greaterThanTwo(5));


/**
 * Function Composition
 * Functional Programming won’t be completely functional without this feature. Function Composition is an act of composing/creating functions that allow you to further simplify and compress your functions by taking functions as an argument and return an output. It may also return another function as its output other than numerical/string values.
 * 
 * There is also a variation in the way we compose functions by the name of Monads. Monads are just another variation of Function Composition wherein it requires a context in addition to its output. Monads can type lift, flatten, and map so that it can make functions composable.
 */

let compose = (f, g) => (x) => f(g(x));
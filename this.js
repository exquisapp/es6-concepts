// Understanding 'this' keyword in js

/**
 * Global context:
 * In the global execution context, this refers to the global object.
 */
console.log(this === window); // true

/**
 * Function context:
 * When not in strict mode, a function's this refers to the global object.
 */

function f() {
    return this;
}

console.log(f() === window); // true

/**
 * Function context:
 * When in strict mode, a function's this will be undefined if not set when entering the execution context.
 */

'use strict';

function f() {
  return this;
}

console.log(f()); // undefined

/**
 * Object context:
 * When a function is called as a method of an object, this refers to the object the method is called on. This applies to methods defined anywhere in the object's prototype chain (i.e. own and inherited methods).
 */

const obj = {
    f: function() {
        return this;
    }
};

const myObj = Object.create(obj);
myObj.foo = 1;

console.log(myObj.f()); // { foo: 1 }

/**
 * Object context:
 * When used inside a constructor, this refers to the object being constructed.
 */

class C {
    constructor() {
        this.x = 10;
    }
}
  
const obj = new C();
console.log(obj.x); // 10

/**
 * Arrow function context:
 * In arrow functions, this retains the value of the enclosing lexical context's this.
 * 
 * Notice how in the second example, an arrow function's this refers to the global object unless wrapped inside a regular function call, whose this refers to the object it's called from and its lexical context is retained by the arrow function.
 */

const f = () => this;

console.log(f() === window); // true

const obj = {
  foo: function() {
    const baz = () => this;
    return baz();
  },
  bar: () => this
};

console.log(obj.foo()); // { foo, bar }
console.log(obj.bar() === window); // true

/**
 * Event handler context:
 * When used in an event handler, this refers to the element on which the listener is placed.
 */

const el = document.getElementById('my-el');

el.addEventListener('click', function() {
  console.log(this === el); // true
});

/**
 * Binding this:
 * Using Function.prototype.bind() returns a new function from an existing one, where this is permanently bound to the first argument of bind().
 */

function f() {
    return this.foo;
}

var x = f.bind({foo: 'hello'});
console.log(x()); // 'hello'

/**
 * Binding this:
 * using Function.prototype.call() or Function.prototype.apply() will bind the called function's this to the first argument of either of these functions only for this call.
 */

function f() {
    return this.foo;
}

console.log(f.call({foo: 'hi'})); // 'hi'
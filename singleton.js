/**
 * 
 * @param {*} className 
 * The most flexible, albeit somewhat advanced, approach involves using the Proxy object(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). The Proxy object is used to define so-called traps, methods that allow the definition of custom behavior for certain operations such as property lookup, assignment etc. The singleton pattern dictates that the given class can only have one instance, which means that the most useful trap is handler.construct(), the trap for the new operator.
 */

const singletonify = (className) => {
    return new Proxy(className.prototype.constructor, {
        instance: null,
        construct: (target, argumentsList) => {
        if (!this.instance)
            this.instance = new target(...argumentsList);
        return this.instance;
        }
    });
}

// And here is a simple practical example to better understand what it does:

class MyClass {
    constructor(msg) {
        this.msg = msg;
    }

    printMsg() {
        console.log(this.msg);
    }
}

MySingletonClass = singletonify(MyClass);

const myObj = new MySingletonClass('first');
myObj.printMsg(); // 'first'
const myObj2 = new MySingletonClass('second');
myObj2.printMsg(); // 'first'

/**
 * In the above example, you can see that the second time MySingletonClass is instantiated, nothing happens, due to the fact that an instance already exists, so it is returned instead of a new object being created. While this is the minimum implementation of a singletonify function, it can easily be extended to modify the behavior even further or even use some of the data passed to the constructor in subsequent calls to update the instance it holds.
 */
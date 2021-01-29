/**
 * 
 * @param {*} name 
 * You can see how Employee will implement the standard interface but depending on where we use the instance of Employee we can change the behavior slightly to fit our needs. We could either get the name as is or get the name in all uppercase.
 */

function Employee(name) {
    this.name = name;
    this.getName = () => {
        return this.name;
    }
}

const employee = new Employee("Parwinder");

console.log(employee.getName()); // Parwinder

Employee.prototype.getDetails = function () {
    return this.name.toUpperCase();
}

console.log(employee.getDetails()); // PARWINDER

/**
 * We can do the same with classes.
 */

class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor (radius) {
        super(); // needed to use this
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor (width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const circle = new Circle(2);
const rectangle = new Rectangle(5, 6);

console.log(circle.area());
console.log(rectangle.area());

/**
 * Shape is the base class that we use to create Circle and Rectangle by extending it. They all have the area method but change the implementation based on the type of shape.
 */
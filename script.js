/*
Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. 
Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. 
Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
*/

class Shape {
        calculateArea() {
            throw new Error('Something went wrong. Should be overridden with other methods!');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Triangle extends Shape {
    constructor(side1, side2, side3) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    calculateArea() {
        const calculatePerimeter = (this.side1 + this.side2 + this.side3) / 2;
        const calculateArea = Math.sqrt(
            calculatePerimeter * 
            ((calculatePerimeter - this.side1) * 
            (calculatePerimeter - this.side2) * 
            (calculatePerimeter - this.side3))
        );

        return calculateArea;
    }
}

const circle = new Circle(6);
const circleArea = Math.round(circle.calculateArea());
console.log(`The area of the circle is`, circleArea);

const triangle = new Triangle(9, 8, 5);
const triangleArea = Math.round(triangle.calculateArea());
console.log(`The area of the triangle is`, triangleArea);
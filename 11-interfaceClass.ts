interface Shape {
    area(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.area()); // 78.53981633974483

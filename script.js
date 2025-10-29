//complete this code
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.width;
  }
}

let sq = new Square(2);
sq.getArea();



// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

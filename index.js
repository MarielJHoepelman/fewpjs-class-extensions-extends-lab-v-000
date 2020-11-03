// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
  return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((total, element) => element + total, 0)
  }
}

class Triangle extends Polygon {
  isValid(){
    // The sum of the lengths of any two sides of a triangle is greater than the length of the third side.
    return (this.sides[0] + this.sides[1] > this.sides[2]) ||  
    (this.sides[1] + this.sides[2] > this.sides[0]) ||  
    (this.sides[0] + this.sides[2] > this.sides[1])
  }
}

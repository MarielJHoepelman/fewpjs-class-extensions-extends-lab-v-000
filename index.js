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
    return ((this.sides[0] + this.sides[1]) > this.sides[2]) &&
    ((this.sides[1] + this.sides[2]) > this.sides[0]) &7
    ((this.sides[0] + this.sides[2]) > this.sides[1])
  }
}

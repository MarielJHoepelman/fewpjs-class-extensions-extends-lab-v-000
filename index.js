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
  get isValid(){
    // console.log(this.sides)
    return true;
    //return ((this.sides[0] + this.sides[1]) > this.sides[2])
  }
}

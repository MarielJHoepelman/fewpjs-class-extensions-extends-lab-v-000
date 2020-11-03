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

  isGreater(sides) {
    return this.sides[i] + this.sides[i]) > this.sides[i]
  }
  get isValid(){
    return ((this.sides[0] + this.sides[1]) > this.sides[2]) &&
    ((this.sides[1] + this.sides[2]) > this.sides[0]) &&
    ((this.sides[0] + this.sides[2]) > this.sides[1])
  }
}

class Square extends Polygon {
    get area(){
      return Math.pow(this.sides[0], 2);
    }

    get isValid(){
      let side = this.sides[0];
      return this.sides.every((index) => index === side)
    }
}

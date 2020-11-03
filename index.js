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
  isValid() {
    if this.sides === 3 {
      return true
    } else {
      return false 
    }
  }
}

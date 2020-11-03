// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
  return this.sides.length
  }

  get perimeter(sides) {
    return sides.reduce((total, element) => element + total, 0)
  // let totalBatteries = batteryBatches.reduce((total, element) => element + total, 0);
  }
}

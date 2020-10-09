class Polygon {
    constructor(sides){
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;

    }

    get perimeter() {
        return this.sides.reduce((acc, val) => acc + val)
    }
}

class Triangle extends Polygon {

    get isValid() {
        let answer = (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0]) ? true : false
        return answer;
    }
}

class Square extends Polygon {
    get isValid() {
        let answer = (this.sides[0] === this.sides[1] && this.sides[2] === this.sides[3] && this.sides[0] === this.sides[2]  ) ? true : false
        return answer;
    }

    get area() {
        return this.sides[1] * this.sides[2]
    }
}



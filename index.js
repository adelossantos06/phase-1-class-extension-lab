class Polygon {
    constructor(intgArray) {
        this.intgArray = intgArray
    }

    get countSides() {
        return this.intgArray.length
    }

    get perimeter() {
        let sum = 0;
        this.intgArray.forEach(item => {
            sum += item
        })
        return sum
    }
}

class Triangle extends Polygon {

    get isValid() {

        let a = this.intgArray[0]
        let b = this.intgArray[1]
        let c = this.intgArray[2]

        if ((a + b > c) && (a + c > b) && (c + b > a)) {
            return true
        }
        return false
    }
}


class Square extends Polygon {

    get isValid() {
        const isSquare = this.intgArray.every(i => i === this.intgArray[0])

        if (isSquare === true) {
            return true
        } else {
            return false
        }
    }

    get area() {
        if (this.isValid === true) {
            return (this.intgArray[0] * this.intgArray[1])
        }
    }

}

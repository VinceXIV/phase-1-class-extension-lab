// Your code here

class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((acc, sideLength)=>{
            return acc + sideLength
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        const perimeter = this.perimeter
        return !Boolean(this.sides.find(side => {
            return side > perimeter - side
        }))
    }
}

class Square extends Polygon {
    get isValid(){
        const expectedSideLength = this.perimeter/4

        const unexpectedSide = this.sides.find(sideLength => {
            return sideLength != expectedSideLength
        })

        return !Boolean(unexpectedSide)
    }

    get area(){
        if(this.isValid){
            return this.sides[0]**2
        }
    }
}
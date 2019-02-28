class Fraction{
    constructor(numerator, denominator){
        this.numerator = numerator
        this.denominator = denominator
    }

    simplify(){
        for(let i = this.numerator; i > 0; i--){
            if(this.numerator % i == 0 && this.denominator % i == 0){
                this.numerator /= i
                this.denominator /= i
            }
        }
        return this
    }
}

let x = new Fraction(22,11)
x.simplify()
console.log(`${x.numerator}/${x.denominator}`)
x = x.numerator
console.log(x)
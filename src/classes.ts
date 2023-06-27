import {Login, Students} from './interface'

class Student implements Login{
    rollNumber
    #std
    phnNumber

    constructor(rollNumber : string, std : number, phnNumber : number){
        this.rollNumber = rollNumber
        this.#std = std
        this.phnNumber = phnNumber
    }
    login(): Students {
        return {
            name: "Melton",
            phn: 9999,
            mail: "h@gmail.com"
        }
    }
    static getStudCount() : number{
        return 12
    }

    getNameWithAddress() : string{
        return `${this.rollNumber} is staying in Vijay Elanza`
    }
}

class Princi extends Student {
    constructor(rollNumber : string, std: number,phnNumber:number){
        super(rollNumber, std, phnNumber)
    }

    // getNameWithAddress(): string {
    //     return `${this.rollNumber} is living in london for the past 10 yrs`
    // }
}

let melton = new Student("123qwe", 12, 9999999999)
let address = melton.getNameWithAddress()
let raj = new Princi("12345", 12, 999999)
// melton.rollNumber = "123qwe"
// melton.class = 12
// melton.phnNumber = 9999999999
console.log(Student.getStudCount())
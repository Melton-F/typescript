function mnb(name:string, age: number = 7){
    console.log(name +' '+ age)
}
mnb("Melton", 6)

type Employee = {
    readonly id : number,
    name : string,
    retire : (date:Date)=> void
}
console.log("from another")

let employee : Employee = {
    id : 1,
    name : "Melton",
    retire: (date:Date)=> {
        console.log(date)
    }
}

// function melton (age:number | string):number{
//     if(typeof age === 'number')
//         return age *2
//     else{
//         return parseInt(age) * 2
//     }
// }
// console.log(melton('10'))

//Intersection typesx
type User = {
    name: String,
    age: number,
    address: string
}

type Office = {
    location: string,
    vacancies: number,
    role: string
}

type Company = User & Office

let work : Company = {
    name : "Melton",
    address : "xxx",
    age : 24,
    location : "Athhipalayam",
    role : "HR",
    vacancies : 59
}
console.log(work)

function greet(name:string|null|undefined) {
    if(typeof name === "number"){
        console.log(name)
    }
    if(typeof name === "string"){
        console.log(name)
    }
}
greet("haiiiii")
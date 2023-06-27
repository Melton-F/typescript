"use strict";
function mnb(name, age = 7) {
    console.log(name + ' ' + age);
}
mnb("Melton", 6);
console.log("from another");
let employee = {
    id: 1,
    name: "Melton",
    retire: (date) => {
        console.log(date);
    }
};
let work = {
    name: "Melton",
    address: "xxx",
    age: 24,
    location: "Athhipalayam",
    role: "HR",
    vacancies: 59
};
console.log(work);
function greet(name) {
    if (typeof name === "number") {
        console.log(name);
    }
    if (typeof name === "string") {
        console.log(name);
    }
}
greet("haiiiii");

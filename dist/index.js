"use strict";
function mnb(name, age = 7) {
    console.log(name + ' ' + age);
}
mnb("Melton", 6);
let employee = {
    id: 1,
    name: "Melton",
    retire: (date) => {
        console.log(date);
    }
};
function melton(age) {
    if (typeof age === 'number')
        return age * 2;
    else {
        return parseInt(age) * 2;
    }
}
console.log(melton('10'));
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
    console.log(name);
}
greet("haiiiii");

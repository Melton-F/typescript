"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let student = {
    name: "Melton",
    phn: 9999,
    mail: "h@gmail.com"
};
let whole = {
    watchType: "Analog",
    phn: 9999,
    mail: "h$gamail"
};
let [stud1, ...restStudets] = [
    {
        name: "Melton",
        phn: 9999,
        mail: "h@gmail.com"
    },
    {
        name: "Nijanthu",
        phn: 8888,
        mail: "2@gmail.com"
    },
    {
        name: "Britto",
        phn: 7777,
        mail: "3@gmail.com"
    },
    {
        name: "Francis",
        phn: 9999,
        mail: "h@gmail.com"
    }
];
let answer = restStudets.filter(details => details.phn > 8888);
console.log(answer);

export interface Students {
    name?: string,
    phn: number,
    mail: string
}

let student: Students = {
    name: "Melton",
    phn: 9999,
    mail: "h@gmail.com"
}

interface watch extends Students {
    watchType: string
}

let whole : watch = {
    watchType: "Analog",
    // name: "Mnb",
    phn: 9999,
    mail: "h$gamail"
}

export interface Login {
    login(): Students
}
// console.log(whole)

let [stud1, ...restStudets]:Students[]=[
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
]

let answer = restStudets.filter(details => details.phn>8888)

console.log(answer)
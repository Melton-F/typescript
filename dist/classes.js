"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Student_std;
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(rollNumber, std, phnNumber) {
        _Student_std.set(this, void 0);
        this.rollNumber = rollNumber;
        __classPrivateFieldSet(this, _Student_std, std, "f");
        this.phnNumber = phnNumber;
    }
    login() {
        return {
            name: "Melton",
            phn: 9999,
            mail: "h@gmail.com"
        };
    }
    static getStudCount() {
        return 12;
    }
    getNameWithAddress() {
        return `${this.rollNumber} is staying in Vijay Elanza`;
    }
}
_Student_std = new WeakMap();
class Princi extends Student {
    constructor(rollNumber, std, phnNumber) {
        super(rollNumber, std, phnNumber);
    }
}
let melton = new Student("123qwe", 12, 9999999999);
let address = melton.getNameWithAddress();
let raj = new Princi("12345", 12, 999999);
console.log(Student.getStudCount());

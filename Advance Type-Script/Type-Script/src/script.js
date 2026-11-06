"use strict";
// let mystring : string = "Dipto Howlader Prethul"
// let myNumber : number = 34334
// let myBool : Boolean = true
// let mySymbol : symbol = Symbol()
// let myBigInt : bigint = 100n
const addTwo = (a, b) => {
    return a + b;
};
console.log(addTwo(100, 20));
// Array and Tuple 
const arr = ['Javascript', "react"]; // String
const numArr = [18, 8]; //number 
const dhakaLatLong = [23.8103, 90.4125];
// default 
const concatName = (firstName, lastName) => {
    if (!lastName) {
        return firstName;
    }
    return firstName + " " + lastName;
};
// console.log(concatName("Dipto"));
// console.log(concatName("Dipto","Prethul"))
// default parameters 
const greetings = (firstName, greeting = "Hello") => {
    console.log(greeting + " " + firstName);
};
greetings("Dipto", undefined);
// rest parameters 

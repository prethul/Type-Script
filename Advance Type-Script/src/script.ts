<<<<<<< HEAD


// let mystring : string = "Dipto Howlader Prethul"
// let myNumber : number = 34334
// let myBool : Boolean = true
// let mySymbol : symbol = Symbol()
// let myBigInt : bigint = 100n


const addTwo = (a : number, b : number) : number => {
    return a + b 
}

console.log(addTwo(100,20))

// Array and Tuple 

const arr : string [] = ['Javascript', "react"]        // String

const numArr : number []  = [18,8]     //number 

const dhakaLatLong : readonly[number,number] = [23.8103, 90.4125]

// default 

const concatName =(firstName : string , lastName?: string) => {               // eikane ? mark haoar reason hocce kono jinish function a thkleo pare na thakteo pare
    if(!lastName) {
        return firstName;
    }

    return firstName + " " + lastName;
};

// console.log(concatName("Dipto"));
// console.log(concatName("Dipto","Prethul"))

// default parameters 

const greetings = (firstName : string,greeting : string = "Hello") =>{
    console.log(greeting + " " + firstName);
};
greetings("Dipto",undefined);

// rest parameters 

=======
// import { greetings } from "./script_config.js";

// greetings()

import "./script_config.js"
import "./union.js"
>>>>>>> 3afa56a (Add new typescript files)

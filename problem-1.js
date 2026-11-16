"use strict";
// Problem 1: 
Object.defineProperty(exports, "__esModule", { value: true });
function multiplyvalue(value, multiplier) {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
}
console.log(multiplyvalue(10));
console.log(multiplyvalue(10, 5));
console.log(multiplyvalue(7, 0));

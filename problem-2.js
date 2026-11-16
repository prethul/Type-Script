"use strict";
// Problem 2: 
Object.defineProperty(exports, "__esModule", { value: true });
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    if (typeof value === "boolean") {
        return value ? "Active" : "Inactive";
    }
    return value;
}
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));

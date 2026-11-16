"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function concatenateArrays(...arrays) {
    return arrays.flat();
}
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

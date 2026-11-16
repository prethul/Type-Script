// Problem 1: 

function multiplyvalue(value: number, multiplier?: number): number {
    if (multiplier === undefined){
        return value * 2;
    }

    return value * multiplier
}

console.log(multiplyvalue(10));
console.log(multiplyvalue(10,5));
console.log(multiplyvalue(7,0));
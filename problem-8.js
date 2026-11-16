"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
        else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
    });
}
validateAgeAsync(20)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
validateAgeAsync(15)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));

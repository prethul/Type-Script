
type ID = number ;

type Role = "admin" | "member" ; 

// interface 

interface User {
    name : string;
    id : ID ;
    role : Role
}

const user : User = {
    id : 123,
    name : "Prethul",
    role : "admin"
}


interface Animal {
    species : string;
}

interface Cat extends Animal{
    breed : string;
}

const cat : Cat = {
    species : 'brown cat',
    breed : 'persian',
};

type Vehical {
    brand : string;
};

type Car = Vehical & {
    model : string;
};

const car : Car = {
    brand : "Toyota",
    model : "Corolla",
};


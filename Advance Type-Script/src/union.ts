// const greetings = () => {
//     console.log("Hello world!")
// }

// greetings ()

//* literal Type 

type Status = "pending"
const status : Status = "pending"
console.log(status)

//* Basic union 

type Identity = string | number 
const id : Identity = "343533"
console.log(id)

//* literal union 

type Role = "user" | "admin" | "manager"
const userRole : Role = "manager"
console.log(userRole)

//* Object Union 

type Admin = {id : number, role : 'admin' , privileges: string[]}
type Member = {id : number , role : 'member', plans : string[]}


type User = Admin | Member 

const user : User = {id : 123 , role :"member",plans : ['abc','def']}
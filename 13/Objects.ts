//1. using object type - Directly define the values for the variables.(js/ts)

// let employee : object= {
//     id: 1,
//     name: "John",
//     salary: 10000,
//     isPermanent: true
// }

// let employee= {
//     id: 1,
//     name: "John",
//     salary: 10000,
//     isPermanent: true,
//     getDetails: function() {
//         console.log(`Id is ${this.id}`);
//         console.log(`Name is ${this.name}`);
//         console.log(`Salary is ${this.salary}`);
//         console.log(`isPermanent is ${this.isPermanent}`);
//     }
// }

// console.log(typeof employee);
// //accessing the methods and properties using (.)
// employee.getDetails();
// console.log(employee.id);

// //accessing the methods and properties using []
// employee["getDetails"]();
// console.log(employee["id"]);

// //modifying the values of the object
// employee.id = 2;
// employee.name = "Jane";
// console.log(employee);


// 2. Inline object - we also define the datatype of the keys.(ts)

// let student1: {
//     id: number ,
//     name: string,
//     salary: number,
//     isPermanent: boolean
//     getDetails: () => string
// } = {
//     id: 1,
//     name: "John",
//     salary: 10000,
//     isPermanent: true,
//     getDetails: function() {
//         return `Id is ${this.id}`;
//     }
// }

// console.log(typeof student1);
// console.log(student1.getDetails());

// let student2: {

//     id: number ,
//     name: string,
//     salary: number,
//     isPermanent: boolean,
//     getDetails: () => string
// } = {
//     id: 2,
//     name: "Jane",
//     salary: 20000,
//     isPermanent: false,
//     getDetails: function() {
//         return `Id is ${this.id}`;
//     } 
    
// }

//3. Using aliases

// type Product ={
//     name:string,
//     price:number,
//     getInfo: () => string
// }

// let book1 : Product = {
//     name: "Book1",
//     price: 100,
//     getInfo: function() {
//         return `Name is ${this.name}`;
//     }
// }

// let book2 : Product = {
//     name: "Book2",
//     price: 200,
//     getInfo: function() {
//         return `Name is ${this.name}`;
//     }
// }

// console.log(book1.getInfo());
// console.log(book2.getInfo());

// Intersection Types

// type Personal = {
//     name: string,
//     age: number
// }

// type Contact = {
//     email: string,
//     phone: number
// }

// type Customer = Personal & Contact & 
// {
//     getInfo: () => string
// }

// let customer1 : Customer = {
//     name: "John",
//     age: 30,
//     email: "j@j.com",
//     phone: 1234567890,
//     getInfo: function() {
//         return `Name is ${this.name}`;
//     }
// }

// console.log(customer1.getInfo());




// Example 1: Basic interface

// interface Person {
//     name: string;
//     age: number;
//     isMarried: boolean;
// }

// let student1: Person = {
//     name: "John",
//     age: 20,
//     isMarried: false
// }
// console.log(student1);


// Example 2: Optional properties

// interface Person {
//     name: string;
//     age: number;
//     isMarried?: boolean;
// }

// let student1: Person = {
//     name: "John",
//     age: 20
// }
// console.log(student1);


// Example 3: Readonly properties and function types

// interface Person {
//     name: string;
//     age: number;
//     isMarried?: boolean;
//     getDetails: () => string;
// }

// let student1: Person = {
//     name: "John",
//     age: 20,
//     getDetails: function() {
//         return "Hello";
//     }
// }
// console.log(student1);
// console.log(student1.getDetails());

// Example 4: Extending interfaces

// interface Person {
//     name: string;
//     age: number;
//     isMarried?: boolean;
//     getDetails: () => string;
// }

// interface Employee extends Person {
//     employeeId: number;
// }

// let employee1: Employee = {
//     name: "John",
//     age: 20,
//     employeeId: 1,
//     getDetails: function() {
//         return "Hello";
//     }
// }
// console.log(employee1);



// Example 5: class implements interface

// interface Person {
//     name: string;
//     age: number;
//     isMarried?: boolean;
//     getDetails: () => string;
// }

// class Employee implements Person {
//     name: string;
//     age: number;
//     employeeId: number;
//     constructor(name: string, age: number, employeeId: number) {
//         this.name = name;
//         this.age = age;
//         this.employeeId = employeeId;
//     }
//     getDetails(): string {
//         return "Hello";
//     }




// Example 6: Index signatures

// interface Person {
//     name: string;
//     age: number;
//     isMarried?: boolean;
//     getDetails: () => string;
// }

// interface Employee extends Person {
//     employeeId: number;
// }

// let employee1: Employee = {
//     name: "John",
//     age: 20,
//     employeeId: 1,
//     getDetails: function() {
//         return "Hello";
//     }
// }
// console.log(employee1);

// let employee2: Employee = {
//     name: "Jane",
//     age: 25,
//     employeeId: 2,
//     getDetails: function() {
//         return "Hello";
//     }
// }
// console.log(employee2);

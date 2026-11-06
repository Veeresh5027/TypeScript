/* 
 step 1 : write a signature of functions.
    ex: function add(a: number, b: number): number;
    step 2 : Implement a function.
    ex: function add(a: number, b: number): number {
        return a + b;
    }
    step 3 : Call the function
    ex: let result = add(10, 20);
        console.log(result);
*/

//Ex 1: Different parameter types
// function getInfo(id:number): string;
// function getInfo(name: string): string;

// function getInfo(param: number | string): string {
//     if(typeof param === "number"){
//         return `ID is ${param}`;
//     }else{
//         return `Name is ${param}`;
//     }
// }

// console.log(getInfo(101));
// console.log(getInfo("John"));

//Ex 2: function overloading with optional parameters

// function add(a: number, b: number): number;
// function add(a: number, b: number, c: number): number;
// function add(a: number, b: number, c?: number): number {
//     if(c){
//         return a + b + c;
//     }else{
//         return a + b;
//     }
// }
// let result = add(10, 20);
// let result1 = add(10, 20, 30);
// console.log(result);
// console.log(result1);   

//Ex 3: function overloading with different parameters

// function add(a: number, b: number): number;
// function add(a: number, b: number, c: number): number;

// function add(a: number, b: number, c?: number): number {
//     if(c != undefined){
//         return a + b + c;
//     }else{
//         return a + b;
//     }
// }   
// let result = add(10, 20);
// let result1 = add(10, 20, 30);
// console.log(result);
// console.log(result1);

//Ex 4: function overloading with different return types

// function processInput(str: string): string;
// function processInput(num: number): number;
// function processInput(param: string | number): string | number {
//     if(typeof param === "string"){
//         return param.toUpperCase();
//     }else{
//         return param * 2;
//     }
// }
// let result = processInput("Hello");
// let result1 = processInput(100);
// console.log(result);
// console.log(result1);

//Ex 5: function overloading with different parameters same return type

function greet(name: string): string;
function greet(age: number): string;
function greet(isMarried: boolean): string;

function greet(param: string | number | boolean): string {
    if(typeof param === "string"){
        return `Hello ${param}`;
    }else if(typeof param === "number"){
        return `Your age is ${param}`;
    }else {
        let message: string = param ? "You are married" : "You are single";
        return message;
    }
    }

let result = greet("John");
let result1 = greet(30);
let result2 = greet(true);  
console.log(result);
console.log(result1);
console.log(result2);
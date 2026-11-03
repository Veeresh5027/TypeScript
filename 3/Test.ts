//Typescript is statically typed language

// let data = 10;
// console.log(typeof data);

// data = "Ten"; //compiler error
// console.log(typeof data);
// console.log(data);

// let data: number = 10;
// data = "Ten"; //compiler error
// console.log(data);

//Typescript is type safety
//this will throw an error when we execute with node command
//this will not throw an error when we execute with tsx command
let num1: string = "5";
let num2: number = 10;
let result = num1 + num2;
console.log(result);
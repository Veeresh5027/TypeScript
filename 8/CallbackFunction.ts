

//1. Show message

//normal function
// function greet(name: string, callback:(message:string) => void)
// {
//     console.log("Hello", name);
//     callback("Welcome to Typescript");
// }

// //callback function
// function showMessage(message: string)
// {
//     console.log(message);
// }

// //calling function with callback
// greet("John", showMessage);

//2. Sum of two numbers

//normal function
// function sum(a: number, b: number, callback:(result:number) => void)
// {
//     let result: number = a + b;
//     callback(result);
// }

// //callback function
// function displayResult(result: number)
// {
//     console.log(result);
// }

// sum(10, 20, displayResult);
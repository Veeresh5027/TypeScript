//Arrow Function/Lamda Function
//It is a shorter syntax of Anonymous Function
//syntax:
// let variable_name = (parameters) => return_type => statements

//There are 3 parts of Arrow Function
//1. parameters -> A function may optionally have parameters
//2. The fat arrow notation/Lamda notation(=>) -> It is also called as goes to operator
//3. statements -> represents the function instructions set


//1. Arrow function with no parameters and no return_type
// let greet =():void =>
// {
//     console.log("Hello Typescript");
// }
// greet();

//2. Arrow function with parameters and return_type

// let add = (a: number, b: number): number => {
//     return a + b;
// }
// let result2 = add(10, 20);
// console.log(result2);

//3. Arrow Function with implicit return
// let multiply1 = (a: number, b: number): number => a*b;
// console.log(multiply1(10, 20));

//4. Arrow Function with optional parameters
// let add1 = (a: number, b: number, c?: number): number => {
//     if(c){
//         return a + b + c;
//     }else{
//         return a + b;
//     }
// }
// let result3 = add1(10, 20);
// let result4 = add1(10, 20, 30);
// console.log(result3);
// console.log(result4);

//5. Arrow Function with default parameters
// let calculateDiscount1 = (price: number, discount: number = 0.1): void => {
//     let discountAmount : number = price*discount
//     console.log("Discount Amount:", discountAmount);
    
// }
// calculateDiscount1(100);

//5. Arrow Function with rest parameters - multiple types

// let findElements = (...elements: (number|string)[]) => {
//     return elements.length
// }
// console.log(findElements(1, 2, 3));
// console.log(findElements(1, "veeresh"));
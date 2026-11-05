//Named Function : function with name
// syntax
// function functionName(parameters): return_type{
//     statements
// }

// function add(a: number, b: number): number {
//     return a + b;
// }

// let result = add(10, 20);
// console.log(result);

//1. Named Function with no parameters and no return type.

// function add() : void{
//     let a: number = 10;
//     let b: number = 20;
//     let result: number = a + b;
//     console.log(result);
// }

// add();

//2. Named Function with parameters and no return type.
// function add(a: number, b: number): void {
//     let result: number = a + b;
//     console.log(result);
// }
// add(10, 60);

//3. Named Function with parameters and return type.
// function add(a: number, b: number): number {
//     return a + b;
// }
// let result = add(10, 60);
// console.log(result);

//4. Named Function with Rest parameters

// function add(...nums: number[]) : number{
//     let result: number = 0;
//     for(let num of nums){
//         result += num;
//     }
//     return result;
// }
// let result = add(10, 20, 30, 40, 50);
// console.log("Sum of numbers:", result);

//5. Named Function with different types of parameters
// function findElements(...nums: (number | string)[]) : number{
//     return nums.length;
// }
// let result = findElements(10, 20, 30, 40, 50);
// let result1 = findElements("A", "B", "C", "D", "E");
// console.log("Number of elements:", result);
// console.log("Number of elements:", result1);

//6. Named Function with optional parameters
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

//7. Named Function with default parameters
// function calculateDiscount(price: number, discount: number = 0.1): void {
//     let discountAmount : number = price*discount
//     console.log("Discount Amount:", discountAmount);
    
// }
// calculateDiscount(1000);
// calculateDiscount(1000, 0.2);
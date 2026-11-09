// 1. foreach()

// //Ex 1: Get index of all the fruits along with the values.

// let fruits:string[] = ["Apple", "Banana", "Mango", "Grape", "Orange"];

// console.log("All fruits present in fruits array using for loop")

// //using traditional for loop
// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }

// console.log("All fruits present in fruits array using forEach loop")
// fruits.forEach(function(element, index){
//     console.log(`${index} ${element}`);
// });

// console.log("All fruits present in fruits array using arrow function")

// //using arrow function
// fruits.forEach((element, index) => {
//     console.log(`${index} ${element}`);
// });

// //Ex 2: Get fruits in uppercase

// let fruits:string[] = ["apple", "banana", "mango", "grape", "orange"];

// //using arrow function
// fruits.forEach((element) => {
//     console.log(` ${element.toUpperCase()}`);
// });


//2. map()

// //Example 1: Get squares of numbers in an array

// let nums: number[] = [1, 2, 3, 4, 5];

// let squares: number[] = nums.map(function(element){
//     return element * element;
// });

// console.log("Original array: ", nums);
// console.log("Squares of array: ", squares);

// //Example 2: Double the numbers in an array

// let nums: number[] = [1, 2, 3, 4, 5];

// // when using arrow function returning single statement, return and curly braces are optional
// let doubles: number[] = nums.map(function(element) => element * 2);

// console.log("Original array: ", nums);
// console.log("Doubles of array: ", doubles);  



//3. filter()

// //Example 1: Get even and odd numbers from an array
// let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evens: number[] = nums.filter(function(element){
//     return element % 2 == 0;
// });

// let odds: number[] = nums.filter(function(element){
//     return element % 2 != 0;
// });

// console.log("Original array: ", nums);
// console.log("Evens of array: ", evens);
// console.log("Odds of array: ", odds);

// //Example 2 : Get numbers greater than 5
// let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let greaterThan5: number[] = nums.filter(function(element){
//     return element > 5;
// });

// console.log("Original array: ", nums);
// console.log("Numbers greater than 5: ", greaterThan5);


//4. reduce()

// //Example 1: Get sum of all numbers in an array
// let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum: number = nums.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;
// });

// console.log("Original array: ", nums);
// console.log("Sum of array: ", sum);

// //Example 2: Get product of all numbers in an array
// let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let product: number = nums.reduce(function(accumulator, currentValue){
//     return accumulator * currentValue;
// });

// console.log("Original array: ", nums);
// console.log("Product of array: ", product);

//5. some()

// //Example 1: Check if any number is greater than 10
// let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let greaterThan5: boolean = nums.some(function(element){
//     return element > 10;
// });

// console.log("Original array: ", nums);
// console.log("Is any number greater than 5: ", greaterThan5);

// //Example 2: Check if any number is even
// let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even: boolean = nums.some(function(element){
//     return element % 2 == 0;
// });

// console.log("Original array: ", nums);
// console.log("Is any number even: ", even);

//6. every()

// //Example 1: Check if all numbers are greater than 5
// let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let greaterThan5: boolean = nums.every(function(element){
//     return element > 5;
// });

// console.log("Original array: ", nums);
// console.log("Is all numbers greater than 5: ", greaterThan5);

// //Example 2: Check if all numbers are even
// let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even: boolean = nums.every(function(element){
//     return element % 2 == 0;
// });

// console.log("Original array: ", nums);
// console.log("Is all numbers even: ", even);

//7. find()

// //Example 1: Get the first number greater than 5
// let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let greaterThan5: number = nums.find(function(element){
//     return element > 5;
// });

// console.log("Original array: ", nums);
// console.log("First number greater than 5: ", greaterThan5);

// //Example 2: Get the first even number
// let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even: number = nums.find(function(element){
//     return element % 2 == 0;
// });

// console.log("Original array: ", nums);
// console.log("First even number: ", even);
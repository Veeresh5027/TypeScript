//Approach 1: Using Array literal

// let numbers: number[] = []; //declaration

// //initialization
// numbers[0] = 10;
// numbers[1] = 20;
// numbers[2] = 30;
// numbers[3] = 40;
// console.log(numbers);

// let names: string[] = ["John", "Jane", "John", "Jane"]; //declaration and initialization
// console.log(names);

//Approach 2: Using Array generic type

// let empNames: Array<string> = ["John", "Jane", "John", "Jane"]; //declaration and initialization
// console.log(empNames);
// let empIds: Array<number> = [1, 2, 3, 4]; //declaration and initialization
// console.log(empIds);

// let data:Array<string | number> = ["John", 1, "Jane", 2]; //declaration and initialization
// console.log(data);

// let mixedData: Array<any> = ["John", 1, "Jane", 2, true, null]; //declaration and initialization
// console.log(mixedData);


//Example 1 - Iterating array Using traditional for loop

// let numbers: number[] = [10, 20, 30, 40];
// console.log("Size of numbers array: ", numbers.length);
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }


//Example 2 - Iterating array Using for-in loop

// let numbers: number[] = [10, 20, 30, 40];
// console.log("Size of numbers array: ", numbers.length);
// for(let i in numbers){
//     console.log(numbers[i]);
// }

//Example 3 - Iterating array Using for-of loop

// let mixed: any[] = ["John", 1, "Jane", 2, true, null];

// console.log("Size of mixed array: ", mixed.length);
// for(let i of mixed){
//     console.log(i);
// }



//Example 4 - Iterating array Using forEach loop

// let numbers: number[] = [10, 20, 30, 40];
// console.log("Size of numbers array: ", numbers.length);
// numbers.forEach((number) => {
//     console.log(number);
// });


//Example 5 - Passing array to function

// let numbers: number[] = [10, 20, 30, 40];
// function printNumbers(numbers: number[]): void {
//     for(let i in numbers){
//         console.log(numbers[i]);
//     }
// }
// printNumbers(numbers);


//Search an element in array
// let numbers: number[] = [10, 20, 30, 40];
// function search(ele: number, array: number[]): boolean {
//     for(let i in array){
//         if(array[i] == ele){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(search(30, numbers));
// console.log(search(50, numbers));

//Example 6 - A function takes an array and return and array

// function capitalizeWords(array: string[]): string[] {
//     let result: string[] = [];
//     for (let i=0; i < array.length; i++) {
//         result[i] = array[i].toUpperCase();
//     }
//     return result;
// }
// let words: string[] = ["hello", "world"];
// console.log(capitalizeWords(words));


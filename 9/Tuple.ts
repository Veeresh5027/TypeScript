//Example 1 - tuple with 2 values

// let employee: [number, string] = [1, "John"];
// console.log(employee);
// console.log(employee[0]);
// console.log(employee[1]);

//Example 2 - tuple with multiple values

// let employee: [number, string, boolean, string, number, string, string, boolean, number] =
//     [1, "John", true, "Manager", 10000, "Mumbai", "India", true, 1234567890];
// console.log(employee);
// console.log(employee[0]);
// console.log(employee[1]);
// console.log(employee[2]);
// console.log(employee[3]);
// console.log(employee[4]);
// console.log(employee[5]);
// console.log(employee[6]);
// console.log(employee[7]);
// console.log(employee[8]);

//Example 3 - Iterating tuple using traditional for in loop

// let employee: [number, string, boolean, string, number, string, string, boolean, number] =
//     [1, "John", true, "Manager", 10000, "Mumbai", "India", true, 1234567890];
// console.log(employee);
// for(let i=0; i<employee.length; i++){
//     console.log(employee[i]);
// }   

//Example 4 - Iterating tuple using forEach loop

// let employee: [number, string, boolean, string, number, string, string, boolean, number] =
//     [1, "John", true, "Manager", 10000, "Mumbai", "India", true, 1234567890];
// console.log(employee);
// employee.forEach((element) => {
//     console.log(element);
// });

//Example 5 - Passing tuple to function

// let employee: [number, string, boolean, string, number, string, string, boolean, number] =
//     [1, "John", true, "Manager", 10000, "Mumbai", "India", true, 1234567890];
// function printEmployee(employee: [number, string, boolean, string, number, string, string, boolean, number]): void {
//     for(let i in employee){
//         console.log(employee[i]);
//     }
// }
// printEmployee(employee);

//Example 6 - Iterating tuple using for of loop

// let employee: [number, string, boolean, string, number, string, string, boolean, number] =
//     [1, "John", true, "Manager", 10000, "Mumbai", "India", true, 1234567890];
// console.log(employee);
// for(let i of employee){
//     console.log(i);
// }

//Example 7 - Iterating tuple using for in loop

// let employee: [number, string, boolean, string, number, string, string, boolean, number] =
//     [1, "John", true, "Manager", 10000, "Mumbai", "India", true, 1234567890];
// console.log(employee);
// for(let i in employee){
//     console.log(employee[i]);
// }

//Example 8 - Tuple Array(Array of Tuples)

let students: [number, string][] = [[1, "John"], [2, "Jane"], [3, "John"], [4, "Jane"]];
console.log(students);
for(let i in students){
    console.log(students[i]);
}

let tp = students[0];
console.log(tp);

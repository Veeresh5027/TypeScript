//Ternary or conditional operator

//?:
//expression ? result1 : result2
//condition ? true : false

let a:number = 10, b:number = 20;
let result : number = (a > b) ? a : b; // condition is false then false value is assigned
console.log(result);

result = (a < b) ? a : b; //condition is true then true value is assigned
console.log(result);
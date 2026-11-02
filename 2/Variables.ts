// Variable: is a container for storing data value.
// Types of variable: 
// 1. var
// 2. let
// 3. constant

//syntax:
// keyword variable_name: data_type = value;
//ex: let age: number = 20;
//ex: let isStudent: boolean = true;


//var vs let vs const:
/* 
1. scope

var: function scope. not recommended to use in modern JS/TS
let: block scope. Use when you need a variable that can be changed
const: block scope. Use when you need a variable that cannot be changed

2. Declaration/value assignment

var: can be declared without initialization
let: can be declared without initialization
const: cannot be declared without initialization

3. re-Declaration

var: can be re-declared
let: cannot be re-declared
const: cannot be re-declared

4. re-initialization/re-assignment

var: can be re-assigned
let: can be re-assigned
const: cannot be re-assigned

5. hoisting

var: can be hoisted
let: cannot be hoisted
const: cannot be hoisted

*/

/* 1. scope */

// function varScope() {
//     var x = 10;
//     if (true) {
//         var x = 20;
//         console.log(x); //20
//     }
//     console.log(x); //20
// }

// varScope();

// function letScope() {

//     if (true) {
//         let x = 20;
//         console.log(x); //20
//     }
//     console.log(x); //cannot access x because let has block scope
// }

// letScope();

// function constScope() {
//     if (true) {
//         const x = 20;
//         console.log(x); //20
//     }
//     console.log(x); //cannot access x because const has block scope
// }

// constScope();

// function scopeDifference() {
//     if(true){
//         var x = 10;
//         let y = 20;
//         const z = 30;
//         console.log(x); //10 
//         console.log(y); //20
//         console.log(z); //30
//     }

//     console.log(x); //10 can access x because var has function scope
//     console.log(y); //cannot access y because let has block scope
//     console.log(z); //cannot access z because const has block scope
// }

// scopeDifference();

/* 2. Declaration/value assignment */

// var x; // var can be declared without initialization
// console.log(x); //undefined
// x = 10; //initialization
// console.log(x); //10

// let x; //let can be declared without initialization
// console.log(x); //undefined
// x = 10; //initialization
// console.log(x); //10

// const x; //const can be declared without initialization
// console.log(x); //error

// const z = 10; //initialization
// console.log(x); //10

/* 3. re-Declaration */

// var x = 10;
// console.log(x); //10
// var x = 20;
// console.log(x); //20

// let x = 10;
// console.log(x); //10
// let x = 20;
// console.log(x); // cannot re-declare let

// const x = 10;
// console.log(x); //10
// const x = 20;
// console.log(x); //cannot re-declare const

/* 4. re-initialization/re-assignment */

// var x = 10;
// console.log(x); //10
// x = 20;
// console.log(x); //20

// let x = 10;
// console.log(x); //10
// x = 20;
// console.log(x); //20 can re-assign let

// const x = 10;
// console.log(x); //10
// x = 20;
// console.log(x); //cannot re-assign const

/* 5. hoisting */

// console.log(x); //undefined
// var x = 10;
// console.log(x); //10 can be hoisted

// console.log(y);
// let y = 20;
// console.log(y); //20 cannot be hoisted - error

// console.log(z);
// const z = 30;
// console.log(z); //30 cannot be hoisted - error

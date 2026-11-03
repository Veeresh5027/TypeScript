let a: number = 10, b: number = 20;

//1. Arithematic Operators
// console.log(a + b); //30 //addition
// console.log(a - b); //-10 //substraction
// console.log(a * b); //200 //multiplication
// console.log(a / b); //0.5 //division
// console.log(a % b); //10   //modulus
// console.log(a ** 2); //100 //exponential

//2. Assignment Operators
// a = 5;
// b = 7;
// a = a+b;
// console.log(a); //12
// a += b;
// console.log(a); //19
// a -= b;
// console.log(a); //6
// a *= b;
// console.log(a); //42
// a /= b;
// console.log(a); //6
// a %= b;
// console.log(a); //6
// a **= b;
// console.log(a); //46656

//3. Comparison/Relational Operators
// console.log(a == b); //false
// console.log(a != b); //true
// console.log(a > b); //false
// console.log(a < b); //true
// console.log(a >= b); //false
// console.log(a <= b); //true

//Difference between == and ===
// let x: any = "10";
// let y: any = 10;

// console.log(x == y); //true -> this will compare the values
// console.log(x === y); //false -> this will compare the values and datatypes
// console.log(x != y); //false -> this will compare the values
// console.log(x !== y); //true -> this will compare the values and datatypes

//4. Logical Operators -> works only on boolean values
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(true || false); //true
// console.log(!true); //false

// let b1: boolean = true, b2: boolean = false;
// console.log(b1 && b2); //false
// console.log(b1 || b2); //true
// console.log(!b1); //false

//combination of logical and relational operators
// console.log(10>15 && 10<20); //false
// console.log(10>15 || 10<20); //true 
// console.log(!(10>15 || 10<20)); //false


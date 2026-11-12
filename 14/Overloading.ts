class Calculator{

    //constructor overloading
    constructor(); //default constructor
    constructor(a: number, b: number);//parameterized constructor

    constructor(a?: number, b?: number){
       if(a!==undefined && b!==undefined){
           console.log("Sum of "+a+" and "+b+" is "+(a+b));
       } else{
           console.log("Default Constructor called");
       }
    }

    //method overloading
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;
    add(a: number, b: number, c?: number): number{
        if(c){
            return a + b + c;
        }else{
            return a + b;
        }
    }

}

let c1 = new Calculator();
let c2 = new Calculator(10, 20);

console.log("********".repeat(10))

console.log("Adding 10 and 20 is "+c1.add(10, 20));
console.log("Adding 10 and 20 and 30 is "+c2.add(10, 20, 30));



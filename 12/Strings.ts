// let strings1: string = 'Using single quote';
// let strings2: string = "Using double quote";

// let number1: number = 10;
// console.log(strings1);
// console.log(strings2);

// let strings3: string = `Printing number variable ${number1} Using backtick`;

// console.log(strings3);

// String methods

// 1. length - finds how many characters are in a string

// let str1: string = "Hello, I am learning Typescript";
// console.log(str1.length);

// 2. toUpperCase() - converts string to uppercase

// let str2: string = "Hello, I am learning Typescript";
// console.log(str2.toUpperCase());

// 3. toLowerCase() - converts string to lowercase

// let str3: string = "Hello, I am learning Typescript";
// console.log(str3.toLowerCase());

//4. charAt() - returns character at specified index

// let str4: string = "Hello, I am learning Typescript";
// console.log(str4.charAt(9));

//5. indexOf() - returns index of specified character

// let str5: string = "Hello, I am learning Typescript";
// console.log(str5.indexOf("I"));

//6. substring() - returns substring of string

// let str6: string = "Hello, I am learning Typescript";
// console.log(str6.substring(0, 10));

//7. includes()

// let str7: string = "Hello, I am learning Typescript";
// console.log(str7.includes("I"));

//8. startsWith()

// let str8: string = "Hello, I am learning Typescript";
// console.log(str8.startsWith("l"));

//9. endsWith() 

// let str9: string = "Hello, I am learning Typescript";
// console.log(str9.endsWith("t"));

//10. replace()

// let str10: string = "Hello, I am learning Typescript";
// console.log(str10.replace("I", "We"));

//11. split()

// let str11: string = "Hello, I am learning Typescript";
// console.log(str11.length);

// let splitString1: string[] = str11.split(",");
// console.log(splitString1);
// console.log(splitString1.length);

// let splitString2: string[] = str11.split(" ");
// console.log(splitString2);
// console.log(splitString2.length);

//12. trim()

// let str12: string = "   Hello, I am learning Typescript   ";
// console.log(str12.length);
// console.log(str12.trim());
// console.log(str12.trim().length);

//13. trimStart()

// let str13: string = "   Hello, I am learning Typescript   ";
// console.log(str13.length);
// console.log(str13.trimStart());
// console.log(str13.trimStart().length);

//14. trimEnd()

// let str14: string = "   Hello, I am learning Typescript   ";
// console.log(str14.length);
// console.log(str14.trimEnd());
// console.log(str14.trimEnd().length);

//15. concat()

// let str15: string = "Hello";
// let str16: string = " I am learning Typescript";
// let str17: string = " for playwright testing";
// console.log(str15.concat(str16, str17));
// string - Sequence of characters - string, text, word

// 1. Single quote ('') - String Literal
// 2. Double quote (" ") - String Literal
// 3. Backtick () - Template Literal

let singleQuote1 = 'This is a single quote string'
let doubleQuote1 = "This is a double quote string"

// There are 2 main purpose of defining the string by using backtick

// 1. multi-line string

let multiline = `This is
a multi line
string`

// 2. For string parameterisation - ${varaibleName} - Calling a variable inside a
// string. - Data driven testing in PW

let age1 = 20

let message = `Your age is ${age1}`
console.log(message);

let Char1 =   `c`

console.log("*************************");

let str ="Welcome to Typescript"

//1. length - Returns the number of charecters in a string.
    //if  pranthasys is availble the its a method or else its a property
    //syntax - stringName.length

 console.log(str.length);
 
 //2. charAt(index)- It return the charecter at the specified index
    //Syntax
    // stringName.charAT(index)
    console.log(str.charAt(11));
    
// "abcdabcd" print in the format - a2b2c2d2 Assignment

//3.concat(str1,str2....) - it merges all the strings and return us a new string
    //Syntax - stringName.concat(str1,str2)
    console.log(str.concat(" and", " Java script"));
    

//4.includes(searchString, startindex?)
//5.indexOf(searchString, startindex?)
//6.lastindexOf(searchString, startindex?)

//what is difference between slice and substring in string concept

//7.slice(startindex?, endindex?)  - it returns a portion of the string
// Syntax - str.slice(startindex?, endindex?)
console.log(str.slice());
console.log(str.slice(3,11));
// we can't able to provide only the end index console.log(str.slice(,11));
console.log(str.slice(9));  // it will return 9 to end of the string

console.log(str.slice(9,2)) //  it will not move from back as 9 to 9 it will return blank

//8. substring(startindex, endindex?) - Return a portion of the string
// startindex is mandatory in substring and its optional in slice method
// endindex is optional in both the methods
// start index>end index 
console.log(str.substring(0)); // Welcome to Typescript
console.log(str.substring(9,2))  //lcome t
// it will swap the index if end index is >  start index

//9.  startWith(string) - It check if the string is starting with specified string or 
// charecter and returns the boolean value
console.log(str.startsWith("W")) // true
console.log(str.startsWith("w")) // false

//10. endsWith(string) -  It check if the string is ending with specified string or 
// charecter and returns the boolean value
console.log(str.endsWith("t")) // true
console.log(str.startsWith("T")) // false


//11.toUpperCase() -  it converst the string to upper case letter and returnmmm a new string
console.log(str);
console.log(str.toLocaleUpperCase()); //WELCOME TO TYPESCRIPT

//12.toLowerCase() - it converst the string to lower case letter and returnmmm a new string
console.log(str.toLocaleLowerCase()); //welcome to typescript

let str1= "   This is an element   " 

//13. trim() - It removes the leading(starting) and trailing(end) white space from a 
// string and return the new string not from the between of the string
console.log(str1.trim()); //This is an element
console.log(str1.length); //24
console.log(str1.trim().length);//18

//14. trimStart() - it removes the leading white space from the string
console.log(str1.trimStart());//
console.log(str1.trimStart().length)//21

//15.  trimEnd() -  It removes the trailing whitespace from the string
console.log(str1.trimEnd());

//16. split(seperater)  - it will splits the string into array of substring based on the 
// specified seperator

let str2 = "Apple Banana Mango Goa Orange"
console.log(str2.split(" "));//[ 'Apple', 'Banana', 'Mango', 'Goa', 'Orange' ]

//Find out the domine name in the string
let email = "praveen@qamitra.com"
let domine = email.split("@")
console.log(domine);
let dominename = domine[1].split(".")
console.log("Domine Name of the give String " + dominename[0]);



//  17.replace(old , new)
let str4 = "This is string"
console.log(str4.replace("i", "@"));//Th@s is string

//18.replaceAll (old, new)
console.log(str4.replaceAll("i", "@"));//Th@s @s str@ng

//  Frameworks
//  Objects
//  Class

 
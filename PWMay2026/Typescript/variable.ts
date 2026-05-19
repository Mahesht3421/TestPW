//variable - storage/container - which stores either a single vlaue or multiple values

//  There are 3 ways in which we can declare the variabl (JS & TS)

//  syntax to declare a variable  -  (keyword(var/let/const) variablename = vale - JS
//  syntax to declare a variable  -  (keyword(var/let/const) variablename :datatype(optional) = vale - TS

//let i = 10
//let j:number = 36

//var = in modern JS & TS we do  not use var keyword >version 5 - ES 6 (ECMA SCRIPT 6 - 2015)
//let = if the value of any variable can change at any point of time
//const = To declare a constant variable (if the value of any variable cannot change at any point of time)

// scope of variable: 2 type of scope
// 1.Local  scoped  variables - when we declare a variable inside of curlybrasis {...} below is the example
/*
{
    let lang= "js"//local scoped variable
    console.log(lang);
    
}
console.log(lang);
*/
// 2.Global scoped  variables -  when we declare a variable outside of curlybrasis {...} below is example

let lang1="TS" //  Global scoped variable
{
let lang ="JS" //   Local scoped variable
console.log(lang1)
console.log(lang)
}
console.log(lang1)


// var - 
//  1.scope  - functional or global in nature
//  2. whenever you declare a varaible using var keyboard it can be redeclared and can also re-initialised
//  3. Hoisting: we can access the variable before its declaration as well.
//  4.  It is not mandatory to assign the variable at the time of declaration

//Example for point4
var num10
num10 = 11111111

//Example for point3
console.log(num1);

//Example for point2
var num1=10
num1 = 89 //  reinitialisation
var num1 = 90
var num1 = 100 //  redeclared
console.log(num1);

//Example for point1


var name1 =  "java"
{
    var name1="python"
}
console.log(name1) 

 


// let
//1.Scope - Block level code scope  or global scope
//2. whenever you declare a varaible using let keyword it 
// cannot be redeclared but can be re-initialised
//3. Hoisting: we cannot access the variable before its declaration as well.
//4.  It is not mandatory to assign the variable at the time of declaration

console.log(abc);

let abc = "java" //  Global

abc = "Python" // re-initiated
{
    let i =  10 //  Local
}
console.log(abc);

let a=100
let a=200
// Point 4
let y
y=100

//const  
// 1.Scope - Block level {....} or global 
//2. whenever you declare a varaible using "const" keyword it 
// cannot be redeclared and cannot be re-initialised
//3. Hoisting: we cannot access the variable before its declaration as well.
//4.  It is  mandatory to assign the variable at the time of declaration

//point2
const xyz = 100
xyz =  100

const xyz =  200
//Point 3
console.log(b);

const b = 100
//point 4
const z
z=100
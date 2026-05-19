// Conditional statements - It allows us to execute different block of code (something we write in 
// curly brasis{....} based on different condition)


//  There are different type of conditional statements
    //1. if statement    - This will handle only the positive scenario
    //2. if else statement -  This will handle both positive and negative
    //3. if else if statement - This will validate more than 1 conditions
    //4. switch statement - This will also validate multiple conditions
    //5.  Ternary operator (? :)  - Short form of if else statement


//1. if statement - It will execute the if block of code only if condition is true
//Syntax:

/*
The Condition will be validated, if the condition is true if block of 
code will be executed else if the condition is false nothing will happen
if(Condition){
//code
}
*/

let text =  "Login"
if (text == "Login"){
    console.log("The text value of the element is matching");
    
}


//2. If else statement  - if the condition is true if block of 
//code will be executed otherwise the else block of code will be executed
/*
if(Condition){
    if block of code
}
else {
    else block of code
    }
*/
let text1 =  "Login1"
if (text1 == "Login"){
    console.log("The text value of the element is matching");
}
else{
    console.log("The text value of the element is not matching");
    
}

//3.  If else if statement  - Will validate multiple conditions. Depending on the results of the 
//condiftion the specific block of code will be executed.

// Syntax:
/*
if(Condition1){
    code -  if the condition1 is true this block will be executed
    }
else if(condition2) {
    code - if the condition2 is true this block will be executed
    }
else if(condition3) {
    code - if the condition3 is true this block will be executed
    }
else {
    else block of code will be executed
    }

*/

// cross browser (Chrome, Firefox,safari,edge) - multiple Env(QA, Stating,  Production)

let browser = "safari"

if (browser == "chrome"){
    console.log("Launch the Chrome Browser");
    }
else if (browser == "edge"){
    console.log("Launch the edge Browser");
    }
else if (browser == "safari"){
    console.log("Launch the Safari Browser");
    }
else {
    console.log("Invalid Browser");
    }

//4. Switch statement - Switch will compare the case value.  It Check if any case value is available as 
//  similar to the expression or not. If is avialble it will directly to the particular block of code
// Break keyword is mandatory in switch statement - it terminates the execution
//Syntax
/*

switch(expression){
    case "value":
        // Block of code
        break;
    case "value1":
        // Block of code
        break;
        default
}
*/

let browsername =  "chrome"

switch(browsername)
{
    case "chrome":
        console.log("Launch the chrome Browser");
        break;
    case "firefox":
        console.log("Launch the chrome firefox");
        break;
    case "safari":
        console.log("Launch the chrome safari");
        break;
    default:
        console.log("Invalid Browser");
        
}

//  when to use if else if statement 
    //1. Range avaiable in the condition to validate - we have to use if else if statement
        // example - marks >90
    //2. Multiple dataype to be validated  - we have to use if else if statement
        // example - name ="Rahul" and age = "25"
    //3. Logical operator for the validation - we have to use if else if statement
        // example - && and ||

// when to use switch statements
    //1.Simple validation with single datatype and single value to compare
    //2. Should not be any range
    //3. No Logical operators

//5.  Ternary operator (? :)  - This is similar to if else but it use inline

// Synatx for if else
/*
if(Condition){
    if block of code
}
else {
    else block of code
    }
*/
// Syntax for Ternery operator
/*
condition? execute this if true : execute this if else
*/

let age1 = 20

if (age1 >= 25){
    console.log("You are Eligible for Voting");
    }
else{
     console.log("You are Not Eligible for Voting");
}

let result = (age1>18)? "You are Eligible for Voting" : "You are not eligible for voting"
console.log(result);

//  Assignement
// Write a program to display the grade of the student:
//  >90 - A
// >80 and <90 - B
// <70 and <80 - C
//  >50 and <70 - D
//  <50 - Failed

let marks = 39.0000005
if (marks>=90){
    console.log("Your are passed with Grade A");
    }
else if (marks>=80 && marks<=90){
    console.log("Your are passed with Grade B");
    }
else if (marks>=70 && marks<=80){
    console.log("Your are passed with Grade C");
    }
else if (marks>=50 && marks<=70){
    console.log("Your are passed with Grade D");
    }
else {
    console.log("Yoy are Failed");
    
}
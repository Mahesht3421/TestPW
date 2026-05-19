// Functions - It is a set of instructions that performs a specific task.

function login (){
// Fill the username
// Fill the password
// click on the login button
}

// If we have 100 test cases for this we needs to login everytime
// then the above 3 lines needs to write

// Why does Functions comes into picture.
    //  Duplication - Solve the problem of duplication
    //  Maintenance - 
    //  Reusability - we can reuse the code when ever we want

// There are 4 important functions are availble in TS and JS
    
// 1.Named fucntion - function declaration
// 2.Anonymous fucntion - funcation expression 
// 3.Arrow function - ES6(2015)  - Lambda fucntion in other laungague
// 4.Constructor function - Class


//1.Named fucntion - function declaration  - A function which will be declared along with the name
// is known as Named fucntion.

//Syntax:
/*
funcation funcationName(parameters) // defining the function
{
    //set of instructions/block of code to be executed
    return
}

funcationName(arguments) // calling the function
difference between parameters and arguments

TS:
funcation funcationName(parameters:datatypr) :returnType(Optional) // defining the function
{
    //set of instructions/block of code to be executed
    return
    // voild - no return type
}

*/

// 1.Non-parametrised and non returning function
    function greet(){
        console.log("Welcome to Playright Session");  
    }
    //How to call the function
        greet()
// 2.Non-parametrised and returning function
    function greetings(){
        return "Thanks for attending Playright" // return keyword  should be last statement of the fucntion
    }
        let resulst = greetings()
        console.log(resulst);
        console.log(greetings()); // we can write in this way as well
        // recomendable is to store the value somewhere and use it
    

    function print(){
        console.log(greet()+ "TS");
             }
        print()   // Output = undefined TS 

    function print1(){
        console.log(resulst+ " & TS");
             }
        print1() //  Output = Thanks for attending Playright & TS
        // if we want to use the value of the fuction then we can use the return and store 
        // that return in any of the value as above example
 
// 3.Parametrised and non- returning function       
    
    function add(a:number, b:number){
        console.log(a+b);
        }
        add(5,10)
        add(2,8)

//4.Parametrised and returning function       
    
    function sum1(x:number, y:number){
        return x+y
    }       
       console.log(sum1(10, 30));         
       let results= sum1(90, 100)
       console.log(results);

       let addition = sum1(results,200)
       console.log(addition);

// What is parameter and argument?
// Parameter - It is a variable in the declaration of function.
// It is used to receive the value when the function is called.

// Argument - It is a value that is passed to the function when it is called.

//let i =10 (This entire line is function)
// let i = function (function expression)

// 2.Anonymous fucntion - funcation Expression - When we assign a function directly to a variable 
    // is known as function Expression
    //A function which will not have any name
// A function which is declared without any name that function will be stored inside a variable
// The variable where we stored the fucntion becomes the name of the function

//callback function - A function which will be utilised as a parameter of another function
// is known as call back function

/*
function adds(fun:Function){
    fun()
}
adds(function(){
    console.log("This is the callback function");
})
    */

//Syntax:
/*
let functionName = function(parameter:datatype):returntype{
// code to be executed
return
}

fucntionName(argument) 
*/
console.log("*****Anonymous fucntion******");

let message= function(name:string, age:number){
    console.log(`Your name is ${name} and age is ${age}`);
}
message("Mahes" , 20)
message("Teja", 30)
message("Pavani", 25)

// 3. Arrow Function - Function Expression (=>) - in other programming language its also known 
// as  Lambda function
    
    //1.This is also aprt of Anonymous fucntion and will not have any anme
    //2.This function will be declared by using arrow symbol (=>) after the paranthesis
    //3.Arrow fucntion use to shorten the numebr of lines of code
    //4.If there is only one line of the code inside the fucntion then we can skip the 
        // curly brasis inside the arrow fucntion

//Syntax
/*
let variable = (parameter:datatye)=>{
// code to be executed
}
*/

            let message1= (name:string, age:number)=>
                    console.log(`Your name is ${name} and age is ${age}`);
            message1("Mahesh", 30)
            message1("Joe" , 50)
 // Single line of code example
    let message2= (name:string, age:number)=>console.log(`Your name is ${name} and age is ${age}`);
        message2("Just", 36)
        message2("Joe" , 44)


// Default Parameter and Optional Parameter


// Default Parameter - A Parameter which has a default value 
    function sum3(a:number, b:number=200){
        console.log(a+b);
            }
        sum3(100)
        sum3(100, 600)
    // The main puprpose of defining/providing default parameter the method overloading
    //Method overloading - is a process where you can declare the same method with different parametes

// Optional Parameter(p?) - A Parameter which may or may not be provided with the value during the fucntion call
// Way to acheive the 

function display(name:string, age?:number){
    console.log(name, age);
}
display("Priya")
display("John", 20)

// Assignment - Complete the display fucntion by writing the logic to print only 
// name if age paramenter ahs not given any value and print both name and age 
// if age value also been given at the time calling the fucntion

function display1(name:string, age?:number){
    if(age != undefined){
        console.log(name, age);        
    }
    else{
        console.log(name); 
    }
}
display1("mahesh")
display1("mahesh", 30)



// 4.Constructor function - Class


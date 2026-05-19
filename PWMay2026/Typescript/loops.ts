// Loops - Will execute the block {...} of code multiple times until the condition is false.

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("***************************")

// for(let i=1; i<=50; i++){
//     console.log(i)
// }

// 1. for loop
    // a. for loop - Traditional for loop - 
    // When we know that how many time we have to run the iteration

    // b. for of loop - Loop through the iterable objects like array, string...
    // c. for in loop - Loops through the properties of an object 
    // - {key:value} - {name: "Rahul"}

// 2. while loop - When we do not know how many time we have to run the iteration
// 3. do while loop - When we want to execute the block of code at least once before we check the condition




// Drop down - countries - for loop - 250 
// Calendar date - while loop
// Search a product - Pagination - Lazy loading - while loop
// Login page - enter username/password - this will check a condition - do while
// 


// let array = [10,20,30,40,50,60]

// for (let a of array){
//     console.log(a)  
// }

let obj = {
    name: 'Rahul',
    age: 30
}

for (let a in obj){
    console.log(obj[a])  
}

// 1. for loop 
// Syntax:

// let n - declaration
// let m = 90 - Initialization

/*

for(initialization; condition; increment/decrement)
{
   // block of code to be executed
}

Initialization - Initialize the value of the variable to start the iteration: 
Ex:- let i=0
Condition - Condition to check whether the loop should continue or not:
Ex:- i<=5

Increment/Decrement - Increase or decrease the value of the variable to move towards condition
Ex:- i++/i--
*/
for(let i=1; i<=5; i++){ // i=6, 6<=5
    console.log(i) // 1 2 3 4 5
}
console.log("**************************");
// 10 to 1
for(let i=10; i>=1; i--) // 10>=1               // i<=10, i<=1, i>=1 
{
  console.log(i) // 10 9........1.........infite
}

//break - to exit the loop when a certain condition is met
console.log("*********break********")
for(let i=10; i>=1; i--) 
{
  if(i==5){
    break
  }
  console.log(i)
}
//continue - to skip the current iteration and move to the next iteration 
console.log("*********continue********")
for(let i=10; i>=1; i--) 
{
  if(i==5){
    continue
  }
  console.log(i)
}
// While, do while and break, continue

//2.While loop
//syntax:
/*
initialization - let j=1
while(condition){
//   code to be executed
increment/deccrement
}
*/
console.log("**************************")
let j=10
while(j>=1){
  console.log(j);
  j--
  }
console.log("*******while loop************")
// write something when the attempt =3 then its through the error
let attempt = 0
while (attempt<3){
  console.log(`Attempt = ${attempt+1}`);
  attempt++
  }
  console.log("Your Account has been  Blocked");
  

//3. do while loop - 
//Syntax:
/*
initialization - let k=1
do{
//code to be executed
}while(condition);
*/
console.log("******Do while loop********")
let attempts = 1
do{
 console.log(`Attempt = ${attempts+1}`);
  attempts++ 
}
while (attempts>=3);

console.log("******nested loop********")
for(let i=1; i<=3;i++){
  for(j=1;j<=3;j++){
    console.log(i+"  "+j);
    
  }
}
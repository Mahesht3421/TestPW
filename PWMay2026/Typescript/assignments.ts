//Find sum of first 25 number
//1. Find sum of first 25 number
//2. Count digit in a number. Example - 12345 output - 5
//3. Generate a multiplication table for 5, like 5 *1 =5, 5 *2 = 10,.....
//4. Print the star pyramid:


console.log("***********Find sum of first 25 number***************")
let sum: number = 0;
for (let i = 0; i<=25; i++){
      sum = sum + i  
       }
       console.log("Sum of first 25 number is: " + sum);

console.log("***********Count digit in a number***************")
let num = 12345
let count = 0
while(num>0){
   num=Math.floor(num/10)
   count++
}
console.log("number of digits = " + count);
//other way/////
let num3 = 123456
let count1 = num3.toString().length
console.log("number of digits = " + count1);

console.log("*********** Generate a multiplication table for 5***************")
let number: number =5
for(let j =1; j<=10; j++){
   let result = number *j
   console.log((`${number} * ${j} = ${result}`));
}

console.log("*********** Print the star pyramid***************")
let row = 5
for (let i=1; i<=row; i++){
   let pattern =""
      for (let j=1; j<=row;j++){
         pattern += " "
      }
         for (let k=1;k<=i;k++){
            pattern = pattern + "* "
         }
         console.log(pattern);         
}


console.log("****Optional Function Assignment*********");
//Complete the display fucntion by writing the logic to print only 
// name if age paramenter is not given any value and print both name and age 
// if age value also been given at the time calling the fucntion
function display3(name:string, age?:number){
    if(age!= undefined){
        console.log(name, age);        
    }
    else{
        console.log(name); 
    }
}
display3("mahesh")
display3("mahesh", 30)

//To find out all index of 10 available inside arr10 - 0,7,9
console.log("****Arrays IndexOf method*********")
let arr100=[10,20,30,40,50,10,60,70,80,10,90]
for (let i=0; i<arr100.length;i++){
   let indexvalue = arr100.indexOf(10,i)
   if (indexvalue != -1){
      console.log(indexvalue)
      i = indexvalue
   }
}
//Another way
for (let j=0; j<arr100.length;j++){
   if (arr100[j]  == 10){
      console.log(j)
   }
}

console.log("***********Sum of Array Elements****************");

let Arr100  = [10,20,30,40]
let b =0
for (let i=0; i<Arr100.length;i++){
   let a= Arr100[i]
    b=b+a
}
console.log("Sum = ", b);

console.log("***********reverse a number****************");
let n =12345
let rev =0
while(n>0){
   let digit = n%10
   rev = rev*10+digit
   n = Math.floor(n/10)
}
console.log(rev);


//Operators - Operators  is a symbol that performs various operations


//1. Arithmetic Operators
//2. Comparision Operators
//3. Logical  Operators
//4. Assignment operartors
//5. Ternary Operators - If else statement


    //1.  Arithmetic Operators - Which used to perform mathametical calculations 
            //1. Addition (+) - Addition or concatenation
            //2. Subtraction (-)
            //3. Multiplication (*)
            //4. Division (/)
            //5. Modulus (%) - Reminder
            //6. Exponentional (**) -  Power
            //7. Incremental  (++) - Increase the value by 1
            //8.  Decremental  (--) - Descrease the value by 1
    let number1 =10
    let number2 =3
    let number4=10
    let number5="50"
            //1. Addition (+) - Addition or concatenation
                console.log(number1+number2)
                console.log(number4+number5)                                
            //2. Subtraction (-)
                console.log(number1-number2);                
            //3. Multiplication (*)
                console.log(number1*number2);                
            //4. Division (/)
                console.log(number1/number2);                
            //5. Modulus (%) - Reminder after the division - 100 % 30 = 
                console.log(number1 % number2);                
            //6. Exponentional (**) -  Power =  10 ** 3 = 10*10*10 =  1000
                console.log(number1**number2);                
            //7. Incremental  (++) - Increase the value by 1
                    let num5 = 10    
                    //a.pre-increment (++number4)  - First the value of the variable will get incremented
                    //and then the action will be performed
                           // console.log(++num5)
                    //b.post-increment(number4++)  - First the action will be performed and the 
                    // variable will be incremented
                            console.log(num5++)
                            console.log(num5)
            //8.  Decremental  (--) - Descrease the value by 1
                    let num6  = 100        
            //a.pre-decrement (++number4)  - First the value of the variable will get decrement
                    //and then the action will be performed
                            console.log(--num6)
                    //b.post-decrement(number4++)  - First the action will be performed and the 
                    // variable will be decemented
                            console.log(num6--)
                            console.log(num6)
            //  Loops - for, while, do while    
    //2. Comparision Operators  - Used to compare the 2 values and return the result 
        // in the form of boolean (true/false)
        //1. Equal to (==)
        //2. Not Equal to (!=)
        //3. Strict Equal to (===) - only in JS and TS
        //4. Strict Not Equal to (!==)
        //5. Grater than (>)
        //6. Greater than or equal to (>=)
        //7. Lesser than (<)
        //8. Less than or eqlual to (<=)

        // What is difference between =, ==,  ===?
        // What is difference between Type conversion and Type coercion?

            //1.Equal to (==) - check if the two values are same or not 
                let num01 = 10
                let num02 = 10
                console.log(num01 == num02)  //  10 == 10 
                
                let num003 = 10
                let num004 = "10"
                console.log(num003 == num004)  //  10 == 10 
                console.log(num003 === num004)

//Type coercion - Implicite conversion of one data type into another datatype 
                // is know as Type coercion
                let num008 = 10
                let num009 = "10"
                console.log(num008 == num009)
//Type conversion = Explicitly conversion of one data type into another datatype 
                // is know as Type coercion 
                let num006 = 10
                let num005 = Number("10") 
                let num007 = Number("TS")  
                let num010 = String("10") 
                console.log(num006 == num005);
                console.log(num006 == num007);

            //2.Not Equal to
                console.log(num006 != num005);
            //3. Strict Equal to = Checks if the two variables along with datatype
                        // of the variable are same or not
                console.log(num006 === num007);
            //4. Strict NOt Equal to
                console.log(num006 !== num007);
                
                
     //3. Logical  Operators - it used to combine multiple conditions to get the final results.
            //   it will compare two expressions and returs the results in the boolena (true/false)
            
        //1. and (&&) - Both of the conditions are true then only it will return as true
        //2. or (||) - Either of the condition is true then it will return as true
        //3. Logical NOT (!) - it will  reverse the result from true to flase and viceversa

            console.log("****************************");
            
        //1.  AND (&&)
            //  true && true - true
                console.log("AND (&&)", (10>6) && (10>5)); - true                
            //  true && false - false
                console.log("AND (&&)", (10>6) && (10>50)); - false
            //  false && true - false
                console.log("AND (&&)", (10>60) && (100>50)); - false
            //  false && false - false
                console.log("AND (&&)", (10>60) && (10>50)); - false

        //2.  OR (||)
            //  true || true - true
                console.log("OR (||)", (10>6) || (10>5)); - true
            //  true || false - true
                console.log("OR (||)", (10>6) || (10>50)); - true
            //  false || true - true
                console.log("OR (||)", (10>60) || (100>50)); - true
            //  false && false - false
                console.log("OR (||)", (10>60) || (10>50)); - true

        //3. Logical NOT (!) - Reverse the result
            console.log(!(23>12)); //   !true - false
            console.log("OR (||)", !((10>60) || (10>50))); - true
            console.log("OR (||)", !((10>60)) || !((10>50))); - true
            
    //4. Assignment operartors - Assign the value to a variable
    
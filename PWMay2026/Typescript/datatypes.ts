//Data type = which defines what type of data a variable is storing 

// Java
// int i = 10
//  string s=  "TS"

//  Syntax:
// keyword(var/let/const) variableName :datatype(optional) = value

//  There are 2 types  of datatypes are  avialble
// 1.Primitive data type -  only have a single value (let i=10)
    //1. number
    //2. string
    //3. boolean
    //4. null
    //5. undefined
    //6. union (|) - Combination of other data type (number | string)
    //7. any
    //8. void - Function


    // 1. number -  Combination of integer (98, -10) and floting point number (12.999, -12.008)
    let num9 :number  = 90.45
    let num2 = "45"
    console.log(typeof num9);
    console.log(typeof num2);
    
        //  what is difference between Type Annotation and Type inference

        //whenever we define the datatype of a variable explicitly is known as Type Annotation
        let num7 :number  = 90.45
        //whenever JS&TS is able  to identify the datatype of a variable implicitly is known as Type inference 
        let num3 = "45"

    //2.  string - sequence of charecters - string,text,word

        //1. Single quote('') - String Literal - 
        //2. Double quote("") - String Literal
        //3. Backtick (``)  - Template Literal

        let singlequote = 'This is a single quoate string'
        let doublequote = "This is a double quote string"
        let Backtick = `This is a Backtick`


        //There are 2 main purpose of defining the string by using backtick
            //1.multi line string
            let multiline = `this
            can be used for multiline string`
            //2.string parameterisation - ${variableName} - Calling a variable inside a string.
                // Data driven testing PW
            let age = 30
            let message = `Your age is ${age}`
            console.log(message);
            
            let char = 'c'

    //3.boolean - true/false
        let isAdmin =false
        let isEmployee = true
        console.log(5>2);
    
    //4.null - Intentional absence of a value
            //  defined a value 
        let num :null = null

    //5.undefined - You have defined a varaible but have not assigned any valueto it
        let num4:undefined = undefined
        let num100 //   Declared
        //Note1:  By default any type of varaible will have a value as "undefined"
        //Note2: By default the datatype  of varaible will be "any"
    //6.Union -  (|)
        let num101 :(number|string) = "TS"
        num101 = 100
    //7.any - it is free to accept any type of datatype
        let num03 :any = 10
        num03 = "Test"
        num03 = true
        num03 = null
        num03 = undefined 
        console.log(num03);
        
    //8. void is nothing but a fucntion
        function name3(){
            var name2 = "python"
                        }


// 2.Non Primitive data type - can store more than one value (let i = [12,202,30])
    //1. Array
    //2. Function
    //3. Object - {key : value}
    //4. 
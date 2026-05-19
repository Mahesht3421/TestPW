// Arrays - []
let arr = [10]

/*

1.Array is a collection of data which can have different data types
2.Array is an ordered collection. Means we can access the elements from the 
    array by using the positin(index)
3.Index starts with 0 in an array
4.Array is dynamic in size.

Synatx:
arrayName[index] - It will return the value at the specified index
*/
let array =[10, "Java", true, null,  undefined,  12.567]
console.log(typeof array)
//  [0:10, 1:"Java", 2:true,......] it stored in key and value in the array
console.log(array);
console.log(array[4]);

// Declaration of an array:
    //1.Using Array Literal [] - directly defing the value iside the brackets
    //2.Using Array Constructor - new Array()

//1.Using Array Literal - []
//Syntax:
//  let arrayName:datatype[] = [value1, value2, value3,....]

let arr1:number[] = [10,20,30,40]
let arr2:(number|string|boolean)[] = [10,"Teja", true]
let Arr1 =[10, "Java", true, null,  undefined,  12.567]
console.log(arr2);
console.log(Arr1);

//2.Using Array Constructor - new Array()
//Syntax:
//let arrayName - new Array<datatype>(value1,value2,value3, ....)
//let arr4 = new Array(12 ,"Test", 12.456) -- //what ever first datatype is 
// there then the array will take same
let arr5 = new Array<any>(12 ,"Test", 12.456)

let arr6 = [10,20,30,40,50,"Pink", "Oragne", "TS"]

// length - It return the total number of elements 
// that are available inside an array

// Using the loop to iterate through the element of any array
    //1.Traditional for loop

        console.log(arr6.length);
        for (let i=0;i<arr6.length;i++){
        console.log(arr6[i]);
                }

console.log("********************************");

    //2.for off loop - directly intractive with the element of an array
        //Syntax
    /*
    
    for(let element of arrayName)
    {
     //body
    }
    */
let arr7 = [10,20,30,40,50,"Pink", "Oragne", "TS"]
    for(let z of arr7){
        console.log(z)        
    }

console.log("**************Methods of an array**********************");

let arr8 = ["Test", "Teja", 10, 30, true, 12.8766]

//1.push(ele1,ele2, ele3, ...) - It adds the element to the ned of the array
//synatx:
// arrayname.push(ele1,ele2, ele3, ...)
console.log(arr8);
arr8.push(40,"JS")
console.log(arr8);

//2.pop() - It will removed the last element from the array and it returns
//syntax
// arrayname.pop()
let lastele = arr8.pop()
console.log(lastele);
console.log(arr8);

//1.  what is difference between push() and unshift() in an array?
//2.  what is difference between pop() and shift() in an array?

//3. unshift(ele1,ele2,...) - It adds  the element at the beginning of array
//Synatx
// arrayname.unshift(ele1.ele2....)
arr8.unshift("java", 50)
console.log(arr8);

//4. shift() - It removes the first element of the array and it returns
//syntax
// arrayname.shift()

arr8.shift()
console.log(arr8);

//splice(), slice(), indexOf(), lastIndexOf(), includes(), joint(), 

//5. splice() - it add/remove the element from the array at a specified index
//Syntax
//  arrayname.splice(startindex,  deletCount, ele1.  ele2, ele3)

//Startindex - the position where you want to add/delete the element from an array
//delecteCount- the no of element to be deleted from an array
//ele1.  ele2,... The element that you want to add at the startindex
console.log("************Splice*************");

let arr9= [10,20,30,40,50,"TS", 60,  70]
arr9.splice(2, 3, "Java", "JS", 100,  200, 300,  400 ) // 2 (from where to start), 
// 3 (how many u want to delete)  , other will  add in that place  )
console.log(arr9); 
arr9.splice(3,0, "Teja")
console.log(arr9);

// what is difference between slice() and splice() method in an array

//6.   Slice ()- It will return the portion of an element from start index to endindex
//syntax 
    //  slice(startindex?, endindex? )
//startindex - the postion where you want to start the slice
//endindex - the postion where you want to end the slice.

arr9.slice(2,8)   // from index 2 to index 7
console.log(arr9.slice(2,8));

//7 indexOf(element, startindex?)  - Returns the index of the first occurence of an element inside the array
// or -1 if no element not avilable

//arrayname.indexOf(element, startindex?)
let arr10 =[10,20,30,40,50,60,70,10,50,10]
let index = arr10.indexOf(10) 
console.log(index);
console.log("*********Assignment***********")

//To find out all index of 10 available inside arr10 - 0,7,9
for (let i=0; i<arr10.length; i++){
    let index1 = arr10.indexOf(10,i)
    if(index1 != -1){
        console.log(index1);
        i = index1
    }                          
}

        
console.log("*********Assignment***********")   

// 8. lastIndexOf(element, startIndex?) - Returns the index of the last occurances
// of an element inside an array

// arrayName.lastIndexOf(element, startIndex?)

console.log(arr10.lastIndexOf(10, 5))

// 9. includes(element, startIndex?) - Returns true if the element is found in the array
// otherwise false

console.log(arr10.includes(70))
console.log(arr10.includes(30, 3));

// 10.join(seperater?)  - It will join all the elements in the array and return as a string
let arr11=[20, 11, 2026 ] // convert like this dd-mm-yyyy
let joinresult = arr11.join("-")
console.log(joinresult);

//11.  toString()- convert the array into string
console.log(arr11.toString());



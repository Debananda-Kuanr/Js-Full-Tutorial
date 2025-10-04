const userEmail = "debananda@gmail.com"

if(userEmail){
    console.log("Got User Email");
    
}
else{
    console.log("Don't have User Email");
}

//if userEmail have Empty String then output will =>Don't have User Email
//if userEmail have some string/Empty array then output will =>Got User Email

// falsy values 
// =>false,0,-0,BigInt 0n,"",null,undefined,NaN

//Truthy Values
// =>"0",'False',"  ",[], {},function(){}

if(userEmail.length === 0){
    console.log("Array is Empty");   
}

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
console.log("Object is Empty");
}


//REMEMBER:
/*
false == 0 => True
false == '' => True
0 == '' => True
*/


//Nullish Coalescing operator (??):Null/undefine 

let val1;
//val1 = 5 ?? 10  //5
//val1 = null ?? 10 //10
//val1 = undefined ?? 15 //15
//val1 = null ?? undefined//undefined
val1 = null ?? 10 ?? 20//10
//console.log(val1);


//Ternary Operrator 
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice>=80 ? console.log("greater than 80"):console.log("Less than 80");




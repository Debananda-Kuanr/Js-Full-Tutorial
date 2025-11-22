//primitive data types

/*
7 types :String ,Number, BigInt, Boolean, undefined, null, Symbol
*/
const Score = 100; //Number
const ScoreValue = null; //null

const isLoggedIn = false; //Boolean
const outsideTemp = null;//This is completely empty
let userEmail; //undefined
const id =Symbol('123')//symbol
const anotherId=Symbol('123')//symbol
console.log(id===anotherId);//false because symbol is unique

const bigNumber= 3456789012345678901234567890n;//BigInt data type (at last we have to use n for make the number as bigint data type)
console.log(bigNumber);


//referance data types(Non-primitive data types)
//3 types:arrays ,Objects ,Functions

//array
const heros = ['shaktiman','nagraj','doga'];
console.log(heros);

//object
let myObj = {
    name:"Debananda",
    age:18   
}

//function
const myFunction = function(){
    console.log("Hello World");
}


//how to check data types of any variable
console.log(typeof Score);//number
console.log(typeof ScoreValue);//object (this is bug in javascript)

console.log(typeof myFunction);//function


/****************************************************/

//Type of Memory 
//1.stack(Primitive data types use this memory)
/* jo vi hum variabe use karte hein uska ek copy hii milta hai */

//2.Heap(Non Primitive data types use this memory)
/* yahan pe hum jo bhi change karenge bo original value se change ho jata hai...*/


//Example of stack memory
 let myInstagram="itz_debananda_99";

 let anotherName= myInstagram;

 console.log(anotherName);//itz_debananda_99

    anotherName="CodeNextLab";
    console.log(anotherName);//CodeNextLab
    console.log(myInstagram);//itz_debananda_99
//yahan pe humne anotherName ko change kiya lekin myInstagram pe koi effect nahi hua


//Example of heap memory
let UserOne = {
    email:"debanandakuanr453@gmail.com",
    upi:"debanandakuanr453@ybl.com"
}

let Usertwo = UserOne;

Usertwo.email="debanandakuanr89@gmail.com"

console.log(Usertwo);//debanandakuanr89@gmail.com
console.log(UserOne);//debanandakuanr89@gmal.com

  
/*
********Output of Usertwo************
{
  email: 'debanandakuanr89@gmail.com',
  upi: 'debanandakuanr453@ybl.com'
}


********Output of UserOne************
{
  email: 'debanandakuanr89@gmail.com',
  upi: 'debanandakuanr453@ybl.com'
}
*/

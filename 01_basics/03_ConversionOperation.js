let score = 33;
let score2="45";

/* This is use to know the data type (2 methods) */
console.log(typeof score);//number
console.log(typeof(score2));//string


let valueInNumber= Number(score2);
console.log(typeof(valueInNumber));//now it is converted into number


let score3="15abc"//ofc it is a string 
let valueInNumber2= Number(score3);
console.log(typeof(valueInNumber2));//output will number
console.log(valueInNumber2);// O/P= NaN


let score4=null
let valueInNumber3= Number(score4);
console.log(typeof(valueInNumber3));//output will number
console.log(valueInNumber3);// O/P= 0


let score5=null
let valueInNumber4= Number(score5);
console.log(typeof(valueInNumber4));//output will number
console.log(valueInNumber4);// O/P= 0


let score6=true
let valueInNumber5= Number(score6);
console.log(typeof(valueInNumber5));//output will number
console.log(valueInNumber5);// O/P= 1


let score7="Debananda"
let valueInNumber6= Number(score7);
console.log(typeof(valueInNumber6));//output will String
console.log(valueInNumber6);// O/P= NaN


//"33" => 33
//"33abc" =>NaN
//true => 1; false=> 0

let isLoggedIn=1
let booleanLoggedIn=Boolean(isLoggedIn);
console.log(booleanLoggedIn)




let someNumber =33;
let stringNumber= String(someNumber);

console.log(typeof stringNumber);//output:  string



//*****************operation***************************


let value =3
let NegVel= -value
console.log(NegVel);//it will show 

console.log(2*2);//4
console.log(2**3)   //2 to the power 3 = 8
console.log(5%2) //output will 1

let str1  ="Hello"
let str2 =" Debananda"
let str3= str1+str2;
console.log(str3);//Output: Hello Debananda 


console.log("1" + 2) //ouput will 12
console.log(1+"2")//ouput will 12
console.log("1"+"2")//output will 12 
console.log("1" + 2 + 2)//output will 122
console.log(1+2+"2")//output will 32


console.log(true);//true
console.log(+true);//1 bcz it is not on Boolean

console.log(+"");//output will 0

let num1 ,num2,num3
num1 = num2 = num3 = 2 + 2

 let gameCounter=100;
//  gameCounter++;//it will be 101
++gameCounter;//output will be 101
console.log(gameCounter);

//prefer MDN referance....increment



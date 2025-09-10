const name = "Debananda"
const repoCount=18;

// console.log(name + repoCount +" Values");

console.log(`Hello my Name is ${name} and my repo Count is ${repoCount}`);

const gameName= new String('CodenextLab');//string

//here this also provide the lenght of the string like
/*
gameName[0]:C
gameName[1]:o
gameName[2]:d
.
.
.
gameName[9]:a
gameName[10]:b
*/

console.log(gameName[0]);//output will be C
console.log(gameName.__proto)//undefined

console.log(gameName.length);//output will be 11
console.log(gameName.toUpperCase());//output will be CODENEXTLAB
console.log(gameName.toLowerCase());//output will be codenextlab

console.log(gameName.charAt(2));//output will d
console.log(gameName.indexOf('L'));//output will be 8

const newString=gameName.substring(0,4);//it will take the string from index 0 to index 4-1=3
//substring(a,b) we cannot use negative index in substring

console.log(newString);//output will be Code


let Name="Debananda";
const anotherString=Name.slice(-9,3);//we can also use negative index
console.log(anotherString);//output will be Deb

const newStringOne= "     Debananda     ";
console.log(newStringOne);
console.log(newStringOne.trim());//it will remove the extra spaces from starting and ending

const url="https://www.codenextlab.com/about?name=deb%20job=developer";

console.log(url.replace('%20','-'));//it will replace %20 with -

console.log(url.includes('codenextlab'));//it will return true if the string is present otherwise false

//how to convert string to array
const text="Debananda-Kunar";
const myArray = text.split('-');
console.log(myArray); // Output: [ 'Debananda', 'Kunar' ]


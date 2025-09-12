//arrays 

const myArr=[0,1,2,3,4,5];
console.log(myArr[2]);//output 2

//myArr[2]=100;
console.log(myArr);//output [ 0, 1, 100, 3, 4, 5 ]

const MyHeros =["spiderman","ironman","thor"];

const myArr2= new Array(1,2,3,4,5);
console.log(myArr2);//output [ 1, 2, 3, 4, 5 ]

//Array Methods

myArr.push(6);//add 6 at the end of array
myArr.push(7);
myArr.pop();//remove last element from array
//console.log(myArr);//output [ 0, 1, 2, 3, 4, 5, 6 ]

myArr.unshift(9);//Yehan jo 9 hain wo array ke starting me add ho jayega
//at the place of 9 can be add any other string or number
console.log(myArr);//output [ 9, 0, 1, 2, 3, 4, 5, 6 ]

myArr.shift();//remove first element from array
console.log(myArr);//output [ 0, 1, 2, 3, 4, 5, 6 ]

console.log(myArr.includes(5));//output true
console.log(myArr.includes(15));//output false
//=> .include()checks whether the element is present in the array or not

console.log(myArr.indexOf(5));//output 5
//=> .indexOf()gives the index of the element
console.log(typeof myArr);//output object

const newArr = myArr.join();
//we will do this because if we want to convert array into string then we will use .join()method
console.log(typeof newArr);//string


console.log(newArr);//output 0,1,2,3,4,5,6
console.log(myArr);//output [ 0, 1, 2, 3, 4, 5, 6 ]



//Remember:(important)
      //Sclice(),splice()

const Array1 =[0,1,2,3,4,5];
console.log("A ",Array1);//output A  [ 0, 1, 2, 3, 4, 5 ]

const newArray = Array1.slice(1,4);
//slice()method is used to copy a part of an array into a new array
console.log(newArray);//output  [ 1, 2, 3 ]
console.log("B ",Array1);//output B  [ 0, 1, 2, 3, 4, 5 ]

const newArray2 = Array1.splice(1,4);
//splice()method is used to remove or replace existing elements and/or add new elements in place

console.log("C ",Array1);//output C  [ 0, 5 ]
console.log(newArray2);//output  [ 1, 2, 3, 4 ]


// 🔵 slice()
// - Copy karta hai array ka ek hissa (part).
// - Original array same rehta hai (change nahi hota).
// - Syntax: array.slice(start, end)   // end index include nahi hota
//
// 👉 Example:
// const newArray = Array1.slice(1,4);
// // index 1 se lekar 3 tak ke element copy karega
// // Result: [1, 2, 3]
// // Original: [0,1,2,3,4,5]
//
//
// 🔴 splice()
// - Direct original array ko change karta hai.
// - Aap specify karte ho kahaan se start karna hai aur kitne elements remove karne hain.
// - Syntax: array.splice(start, deleteCount)
//
// 👉 Example:
// const newArray2 = Array1.splice(1,4);
// // index 1 se start karke 4 elements hata dega
// // Result (removed items): [1,2,3,4]
// // Original array ab: [0,5]



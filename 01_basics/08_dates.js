//in js dates are calculate in miliseconds 
//from 1 jan 1970

let myDate = new Date();
console.log(myDate.toString());//output current date and time
//Thu Sep 11 2025 18:20:50 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString());//output current date and time in local format
//   11/9/2025, 6:20:50 pm
console.log(myDate.toISOString());//output current date and time in ISO format
//2025-09-11T12:50:50.990Z
console.log(myDate.toDateString());//output current date
//Thu Sep 11 2025
console.log(myDate.toTimeString());//output current time
//18:20:50 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString());//output date and time in UTC format
//Thu, 11 Sep 2025 12:50:50 GMT 
console.log(myDate.getTime());//output miliseconds from 1 jan 1970  
//1757595134278

console.log(myDate.getFullYear());//output current year
//2025
console.log(myDate.getMonth());//output current month (0-11) 

console.log(typeof myDate);//output object

//creating date using different ways
let d1 = new Date(2025,8,11);
console.log(d1.toDateString());
//Thu Sep 11 2025

let d2 = new Date("September 11, 2025 13:20:00");
console.log(d2.toLocaleString());
//11/9/2025, 1:20:00 pm

console.log(`Hey Everyone, today is ${myDate.toDateString()}`);

let myCreatedDate = new Date("2025-08-09");
console.log(myCreatedDate.toDateString());
//Sat Aug 09 2025


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());
console.log(newDate.getDay());//day of week 0-6 (0 is sunday and 6 is saturday)

newDate.toLocaleString('default',{
    weekday:'long',
    timeZone:'Asia/Kolkata'
})




// For Of Loop (Array Specific loop)

const arr =[1,2,3,4,5]

for (const num of arr) {
   //console.log(num);
}

const greetings = "Hello World !!"
for (const greet of greetings) {
    //console.log(greet);
    
}


//Maps
const map =  new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('IN',"India")
//console.log(map);

//Output :
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United State of America',
//   'Fr' => 'France'
// }

for (const [key, value] of map) {
   // console.log(key ,':- ',value);
    
}
//output
// IN :-  India
// USA :-  United State of America
// Fr :-  France


/* const myObject = {
    'game1' : 'NFS',
    'game2' : 'SpiderMan'
} */

//for (const [key ,value] of myObject) {
    //console.log(key ,':- ',value);
    //TypeError: myObject is not iterable
//}


//************Object*****************//

//for in loop starts here
const myObject = {
    js:'JavaScript',
    cpp:'C++',
    rb:'Rubi'
}
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop for array 

const Programming =['java','python','c++',]

for (const key in Programming) {
    //console.log(Programming[key]); 
}










const marvel_Heroes = ["thor", "ironman", "spiderman"];
const dc_Heroes =["superman","batman","flash"];

// marvel_Heroes.push(dc_Heroes);
// console.log(marvel_Heroes);


//output [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
//here dc_Heroes array is added as a single element in the marvel_Heroes array

// console.log(marvel_Heroes.length);//output 4

//This type of merging of two arrays is not a good practice


const all_Hero= marvel_Heroes.concat(dc_Heroes);
console.log(all_Hero);
//this will give output as a single array
//output [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

/* Sprade */
const all_Hero2=[...marvel_Heroes,...dc_Heroes];
console.log(all_Hero2);
//this will also give output as a single array
//output [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

//most of the time we use sprade operator(...) for merging two arrays

const another_Arr=[1,2,3,[4,5,6],7,[8,4,[1,2,3,4]]];

const real_another_Arr= another_Arr.flat(Infinity);
console.log(real_another_Arr);
//output [ 1, 2, 3, 4, 5, 6, 7, 8, 4, 1, 2, 3, 4 ]
//. flat() method is used to convert a multi-dimensional array into a single-dimensional array
//Infinity is used to flatten the array to any depth level


console.log(Array.isArray("Debananda"));//output false
console.log(Array.from("Debananda"));//output [ 'D', 'e', 'b', 'a', 'n', 'a', 'n', 'd', 'a' ]
//Array.from() method is used to convert a string into an array

console.log(Array.from({Name:"Debananad a"}));//intresting case

let Score1=100;
let Score2=200;
let Score3=300;

console.log(Array.of(Score1,Score2,Score3));
//output [ 100, 200, 300 ]
//Array.of() method creates a new array instance from a variable number of arguments, regardless of number or type of the arguments.


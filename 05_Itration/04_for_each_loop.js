const coding = ["JavaScript", "Python", "Java", "C++", "Ruby", "Go", "C#"];

// here three different methods to write for each loop

//method 1
coding.forEach(function (item) {
  //console.log(item);
});

//ye function ko call back kaha gaya he to yahan function ka naam nahi hota hain

//method 2
coding.forEach((item) => {
  //console.log(item);
});

//method 3
function printMe(item) {
  //console.log(item);
}
coding.forEach(printMe);

/****************************************/
coding.forEach((item, index, arr) => {
  // console.log(`Item at index ${index} is ${item} in array ${arr}`);
});

const myCoding = [
  {
    languageName: "JavaScript",
    fileName: "js",
  },
  {
    languageName: "Java",
    fileName: "java",
  },
  {
    languageName: "Python",
    fileName: "py",
  },
];

myCoding.forEach((item) => {
  // console.log(item.languageName,':-',item.fileName );
});

//const coding = ["JavaScript", "Python", "Java", "C++","Ruby","Go","C#"];

//const values= coding.forEach((item)=>{
//console.log(item);
//return item;
//})

//forEach loop Do not return any value

//console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//filter bhi callback leta hain aur value return bhi karta hain but forEach nahi karta hain
const newNums = myNums.filter((num) => {
  return num > 4;
  //{} scope ke andar return karna jaruri hain
});
//console.log(newNums);
//Output : [ 5, 6, 7, 8, 9, 10 ]

const newNums2 = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums2.push(num);
  }
});
//console.log(newNums2);
//Output : [ 5, 6, 7, 8, 9, 10 ]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 2010 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
//console.log(userBooks);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const newNumbers = myNumbers.map( (num)=>num+10 )

const newNumbers = myNumbers.map((num)=> num*10)
.map((num)=> num +1 )
.filter( (num)=> num > 40 )

//console.log(newNumbers);


/* Here starts the Reduce Method */

const myNumber = [1, 2, 3];

// const myTotal = myNumber.reduce(function(acc,cur_val){
//     console.log(`acc: ${acc} , Cur_val: ${cur_val}`);
    
//     return acc + cur_val;
// },0)


// we will do it using arrow function
const myTotal = myNumber.reduce((acc, cur_val) => acc + cur_val, 0);

console.log(myTotal);
/* 
Output:
acc: 0 , Cur_val: 1
acc: 1 , Cur_val: 2
acc: 3 , Cur_val: 3
6
*/

const shoppingCart = [
    {
        itemName : 'Hp 15s Laptop',
        price : 30000,
        quantity : 1
    },
    {
        itemName : 'HP victus Laptop',
        price : 82000,
        quantity : 1
    },
    {
        itemName : 'Hp Povilion Laptop',
        price : 62000,
        quantity : 1
    },
    {
        itemName : 'ASUS vivoBook',
        price : 75000,
        quantity : 1
    }
]

const totalAmount = shoppingCart.reduce((acc , item) => acc + item.price,0)

console.log(totalAmount);

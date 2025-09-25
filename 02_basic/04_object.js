//const tinderUser = new Object();//single term object 

const tinderUser = {}//This is a multi term object 

tinderUser.id="123abc"
tinderUser.name="Deba"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser = {
    email:"debananda2gmail.com",
    fullname: {
        userfullname:{
            firstname:"Debananda",
            lastname:"Kuanr"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={
    1:"a",2:"b"
}
const obj2 ={
    3:"a",4:"b"
}
const obj4 ={
    5:"a",6:"b"
}

//const obj3 ={obj1,obj2}  //wrong way 
//const obj3 =Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3);


const users = [
    {
        id:1,
        email:"debananda@gmail.com"
    },
    {
        id:2,
        email:"rohan@gmail.com"
    },
    {
        id:3,
        email:"hitesh@gmail.com"
    },
    {
        id:4,
        email:"harry@gmail.com"
    },
    
    {
        id:5,
        email:"ramesh@gmail.com"
    }

]

//console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
//[ 'id', 'name', 'isLoggedIn' ]
//Datatype: Array

console.log(Object.values(tinderUser));
//[ '123abc', 'Deba', false ]

console.log(Object.entries(tinderUser));
//[ [ 'id', '123abc' ], [ 'name', 'Deba' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//True


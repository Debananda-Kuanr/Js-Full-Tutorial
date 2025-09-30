//Global and Local Scope 

//{} =>This is called Scope 

var c = 300;
let a =3000;//this is global Scope 
if(true){
    let a =10;
    const b=20;
    var c= 30;
    //console.log("INNER: ",a);//This is block Scope
}
//console.log(a)//a is not defined
//console.log(b)//b is not defined
//console.log(c)//30

//so that we have to avoid the var data type 

//console.log(a);
/*
output:
INNER: 10
3000
*/

function one(){
    const Username="Debananda"

    function two(){
        const website= "Youtube"
        //console.log(Username);
    }
    //console.log(website)//scope completed so that give you error 
    two();
}
one()

if(true){
    const Username ="Debananda"
    if(Username==="Debananda"){
        const website =" Youtube"
        //console.log(Username + website)
    }
    //console.log(website);//scope completed so that give you error 
}
//console.log(Username);//it will give an error bcz the block scope is end.

/********something special**************/

//in this method we cann add "addone(5)" this before making the function .It also give the output
function addone(num){
    return num+1;
}
//console.log(addone(5));


//if we will write this "addTwo(5)" before the function it will give Error bcz it will store in a var
const addTwo = function(num){
    return num+2;
}
//console.log(addTwo(5));

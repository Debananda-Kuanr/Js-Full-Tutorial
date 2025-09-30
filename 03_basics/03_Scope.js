//Global and Local Scope 

//{} =>This is called Scope 

var c = 300;
let a =3000;//this is global Scope 
if(true){
    let a =10;
    const b=20;
    var c= 30;
    console.log("INNER: ",a);//This is block Scope
}
//console.log(a)//a is not defined
//console.log(b)//b is not defined
//console.log(c)//30

//so that we have to avoid the var data type 

console.log(a)

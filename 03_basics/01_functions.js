function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("B");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("A");
}

//sayMyName() //this is the referance of function


// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }

// addTwoNumber(2,4);//6
// addTwoNumber(2,"8");//28

function addTwoNumber(num1,num2){
    let result = num1+num2;
    return result;
    //console.log("Debananda");//after the return statement nothing will execute....

    //we can make like without using result variable 
    //return num1 + num2;
}
const Output = addTwoNumber(2,3);
//console.log("Output Will be ",Output);

function logInUseMessage(username){
    if(!username){
        console.log("Please Enter a Username.");
        return
    }
    
    return `${username} just logged in`
}

/*
    username === undefined 
    username === ""

    we can use without this 
    if(!username)
*/

console.log(logInUseMessage("Debananda"))
console.log(logInUseMessage(""))//Please Enter a Username.
console.log(logInUseMessage())//Please Enter a Username.

/*
function logInUseMessage(username = "Debananda")

if someone return use"" ,undefined  then ot will go give you default name as Debananda not go for if condition 
*/





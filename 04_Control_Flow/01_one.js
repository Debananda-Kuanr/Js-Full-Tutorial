//if
const isUserLoggedIn = true
if (isUserLoggedIn) {
console.log("Executed");
}else{
    console.log("Not Executed");
}

// > , < , >= , <= , == , === , != ,!==

/*
const score = 200
if (score >100)
{
    const power = "Fly";//donot use var 
    console.log(`User Power: ${power}`);
}
*/

const balance = 1000;
//if(balance>500)console.log("Test1"),console.log("Debananda");


/*
if(balance<500){
    console.log("Less than 500");
}
else if(balance<750){
     console.log("Less than 750");
}
else if(balance<950){
     console.log("Less than 950");
}
else{
    console.log("Less than 1200");
    
}
*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail=true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}
if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("User LoggedIn");
    
}

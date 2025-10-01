const user ={
    username:"Debananda",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},Welcome to Website`);
    //console.log(this);
     
    }
}
// user.welcomeMessage()
// user.username="Deba"
// user.welcomeMessage()


/* Here starts Arrow Function */

/* Method 1 */
// const addTwo =(num1 ,num2) => {
//     return num1 + num2;
// }


/* Method 2 */
const addTwo = (num1 ,num2) => (num1 + num2)

console.log(addTwo(3,2));

/*         Note:         */
// {} ismein warp kiya to reaturn keyword likna padega 
// () ismein warp kiya to reaturn keyword likna nehi padega


/* Object ko return karne keliya....  */
const addTwo2 = (num1 ,num2) => ({username:"Debananda"})
console.log(addTwo2(3,2));
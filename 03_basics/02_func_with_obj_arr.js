function calculateCardPrice(...num1) {
    return num1
}
//console.log(calculateCardPrice(200, 400 ,500))

const user ={
    username:"Debananda",
    price:199
}
//it is not compulsary to make like this we can directly call in that function like code 2.0

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user);

/*-----------------code 2.0----------------- */
// handleObject({
//     username:"Debananda",
//     price:199
// })
/*-------------------------------------------  */

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([100,200,300,400]));


const accountId =144553;//we can not change after assign const datatype
let accountEmail ="debanandakuanr453@gmail.com"
var accountPassword="123456"
accountCity="Jaipur"//it is possible but donot use like this 

let accountState;//ouput will undefined

// accountId=2 //not allowed

accountEmail="www.Deba.com"
accountPassword="2542652"
accountCity="Bhadrak"

/*
prefer not to use var
because of issue block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);//here we can console more that one item by tabular format...


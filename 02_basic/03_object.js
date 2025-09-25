//singleton 
//object literal

const mysys= Symbol("Key1")

const JsUser = {
    name: "Debananda",
    "full name": "Debananda Kuanr",
    age: 18,
    [mysys]:"mykey1",
    location: "India",
    email:"debananda@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Friday"]
}

//how to access the data from the object
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);

console.log(JsUser[mysys]); 
//Object.freeze(JsUser)
JsUser.email="debananda2025@gmail.com";//updating the email is not possible because of Object.freeze()
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser")
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this["full name"]}`);
    console.log(`Hello JS User,${this.name}`); 
}

console.log(JsUser.greetingTwo());
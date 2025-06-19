

const mysym = Symbol("key1") // when the interviewer said , make a symbol and add in the object and print

const user = {
    name : "nikhil",
    [mysym] : "mykey1", // it ia a symbol
    email : "paulnikhil@.com",
    college : "sd college",
    "dob" : 5_8_2001,

}
// console.log(user.email); // it is the simple way to print the object value
// console.log(user.dob);
// console.log(user["dob"]);//it is the second way to print the object value

console.log(user[mysym]);// this is way to print the symbol

// we can change the object value
user.email= "nikhil@mysym.com"
// console.log(user["email"]);


// we can freeje our object
// Object.freeze(user)
// user.name="aman"
// console.log(user);


//we can reference object value by the function
user.greeting = function(){
    console.log("hey js user");
    
}

user.greetingTwo = function(){
    console.log(`hey js user ${this.name}`);
    
}

console.log(user.greeting());
console.log(user.greetingTwo());










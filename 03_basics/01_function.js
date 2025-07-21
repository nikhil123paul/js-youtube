// function nik(num1 , num2){
//     console.log(num1 + num2);
    
// }
// nik(5,8)

/////////// 2nd way////////////////////////////////////////////////////////////////////

// function nik(num1 , num2){
//     return(num1 + num2);
    
// }
// console.log(nik(5,9));


/////3rd way///////////////////////////////////////////////////////////////////////////
// function nik(num1 , num2){
//     let result=(num1 + num2);
//     return result
    
// }
// const result = nik(89,87)
// console.log(result);

//////////4th way ///////////
// function loginUserMessage(userName){
//     return`${userName}just logged in`
// }
// const result = loginUserMessage("nikhil")
// console.log(result);

// if we can't define the argument value than print is undefined
// function loginUserMessage(userName){
//     return`${userName}just logged in`
// }
// const result = loginUserMessage()
// console.log(result);


// function loginUserMessage(userName){
     
//     if(userName===undefined){
//         console.log("please enter the name ");
//         return
        
//     }
//     return`${userName}just logged in`
// }
// const result = loginUserMessage()

///// another way 
// function loginUserMessage(userName = "nik" ){
//     if(!userName){
//         console.log("please enter the name");
        
//     }
     
    
//     return`${userName} just logged in`
// }
// const result = loginUserMessage("nikhil")
// console.log(result);

// calculate the shopcart value

function calculateShopCartValue(...num){
    return num
}
console.log(calculateShopCartValue(200 ,300 ,500));



//// how to call object by the function

// const user= {
//     name: "nikhil",
//     course: "Btech",
// }

function handleObject(anyObject){
    console.log(`"my name is  ${anyObject.name} and i done my graduation in ${anyObject.course}`);
    
}
// handleObject(user)
handleObject({
    name:"rohan",
    course:"m.com"
})

//how to call array from array

// const myArray=[200, 766, 988, 900]

function handleArray(anyArray){
    return anyArray[2]

}
// console.log(handleArray(myArray));
console.log(handleArray(
    [100,200,300,400])
);

















//IIFE is Immediately invoked function expression
// it is the way how to run the IIFE function
(function chai(){
    console.log(`DB connected`);
    
})(); 

//special note - when we run two function of IIFE ,than  remmember , when we can not stop the first function
// with the semi coloum[;] we can not run the next IIFE function 

( (name) => {
    console.log(`db connected two${name}`);
    
})("nikhil")


// note- defination is , "global scope k  polution se bachane k liye hum is function ka use krte hai" 
// Primitive data types
    //7 types : string, number, boolean, null , undefined , symbol , BigInt
     const score= 100
     const scoreValue= 100.3

     const isLoggedIn= false
     const outSideTemp= null
     let userEmail;

     const id = Symbol("123")
     const anotherId= Symbol("123")
     console.log(id === anotherId);

     const bigNumber = 53465423567n
     

    
// Reference (non premitive)
    // Array , Objects , Functions  
    // note = data types of non primitive data types is always object

    const heros=[ "shakyiman" , "naagraj" , "nik"]

    let  myObj = {
        name: "nikhil",
        age: 24
    }

     const myFunction = function(){
         console.log("hello nikhil");
         
    }
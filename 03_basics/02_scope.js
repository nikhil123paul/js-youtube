// let a=900
// // iit is a global scope
// if (true){
//     //in the curli bracket scope is a "block scope"

//     let a=90
//     const b= 80
//     console.log(`"inner:  ${a}`);
    
// }
// console.log(a);
// console.log(b);


/// talk abiut the nested scope
// note= closure are , when we can't access the parent variable value, but child can access the
// parent variable value, it is the closure

// function one (){
//     const userName="nikhil"
//     function two(){
//         const website="youtube"
//           console.log(userName)
//     }
//     // console.log(website);
//     two()
    
// }
// one()

//________________interesting___________

//it is accessable 
console.log(addone(9))
function addone(num){
    return num +1
}

// it is interesting when we store the function in a const variable than we can't access from first to the declaration,
//after that we declare in the last of the function
console.log(addTwo(89)); //its not working

const addTwo= function (num){
    return num +1
}
console.log(addTwo(89));// it is working


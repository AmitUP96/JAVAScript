// function addtwonum (num1 , num2){
//     // return num1 + num2
//     return `${num1 + num2}`


// }
// console.log(addtwonum(5,5))


// function loginMassage(username){
//     if(!username){
//         console.log("enter username")
//         return
//     }
//     return `${username} just logged in` 
// }
// // loginMassage()
// console.log(loginMassage())

//********************************************************************* */

// function calculatecartPrice(val1 , val2,...num1){
//     return num1
// }
// console.log(calculatecartPrice(10,20,30,110,50))

// object and function relations

let user = {
    username : "Amit singh",
    price : 99
}
function handleobject(anyObject){
    return `username is ${anyObject.username} and price is ${anyObject.price}`
}
console.log(handleobject(user))
// //   // 1. Object.create (constructor method) 
// //   // singleton object
// //   // let user = new Object()
  
// //   //let user = {} ** non singleton Object


// //   // 2. leteral method

// //   const mysym = Symbol("key1")



//   let details = {
//     name : 'AMIT SINGH',
//     "FULL Name" : "amit singh chandel",
//     Branch : 'CSE (AI & ML)',
//     ROLLNO : 2201921530032,

//    // [mysym] : "mykey1",
 
//   }
// //   console.log(details.Branch)
// //   console.log(details["FULL Name"]) // another method while spacing is there. 
// //   //or symbol data type me bhi essi tarikr se acces karna h
// //   console.log(details[mysym])

// //   details.name = "ashmit singh"
// // //   Object.freeze(details) // **
// //   console.log(details.name)

// //     details.name = "ashmit singh chandel"
// //     console.log(details.name)

// //     // like variable
// //     details.greeting = function(){
// //         console.log(`he is the best, ${this.name}`) // ** 

// //     }
// //     console.log(details.greeting())

// //  //************************************************** */

// // let user = {}
// // user.id = "csaiml22098"
// // user.name = "Amit Singh"

// // console.log(user)


// // // concatination
// // let obj1 = {1 : 'A', 2: 'B'}
// // let obj2 = {3:"c" , 4:"D"}
// // // const obj3 = Object.assign({},obj1,obj2)

// // const obj3 = {...obj1, ...obj2}

// // console.log(obj3)
 

// console.log(Object.keys(details))
// console.log(Object.values(details))
// console.log(details.hasOwnProperty("Branch")) 


//************************************************************ */

//destructuring
// let course = { 
//     coursename : "javaScript",
//     price : 239,
//     courseInstructor : "Amit Singh"
// }
// // course.courseInstructor
// const {courseInstructor : Ins} = course. // : Ins is optional

// //console.log(courseInstructor)

// console.log(Ins)

// pahle files xml me hoti thi ab JSON me 

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let user ={
//     username : "Amit",
//     age : 56,
// // this current context ko print karta h
//     welcomemassage : function(){
//         console.log(`${this.username}, welcome to website`)
//     }
// }
// user.welcomemassage()

// agar ham alag se
// console.log(this)
// likhte h to browser me window likh kr aata h  or yahan empty object
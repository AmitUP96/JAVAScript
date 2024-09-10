
// //forOf Loop

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(`array list ${num}`)
// }

// const greeting = "Amit Singh"
// for (const greet of greeting) {
//     console.log(`char is ${greet}`)
// }

//Map

let map = new Map()
map.set ('1', 'india')
map.set ('2' , 'japan')
map.set ('3',"Nepal")

// console.log(map)

//map me forof ka use.    forin is not possible in map
for (const [key,value] of map) {
    //console.log(value)
   // console.log(key)
}

// object me forof ka use nhi ke sakte (iteration)

// object me forin ka use karenge

const myobject = {
    UP96 : "Chitrakoot",
    UP70 : "Prayagraj",
    UP32 : "Lakhnow"
}
for (const key in myobject) {
    //console.log(`${key} no.plate of  ${myobject[key]} District`)
}

// forin loop in array me use kr sakte h

// forEach loop

let learn = ["js","py","C", "C++"]

learn.forEach(function(item){
   // console.log(item)
})

// .filter

let num = [1,2,3,4,5,6,8,97,0]
let newnum = num.filter((num) => num > 3)
//console.log(newnum)



// let arr1 = [1,2,3,4,5,67]
// console.log(arr1.includes(7)) // false if element is not present in array
// console.log(arr1.indexOf(5))

// let arr2 = arr1.join()
// console.log(arr2) // type is string

let arr1 = [1,2,3,4,5,6,7]
// console.log("A" , arr1)

// console.log(arr1.slice(1,4)) // it does not manipulate the original array
// console.log(arr1)

let arr2 = arr1.splice(0,3)
console.log(arr2)
console.log( "B", arr1) // it manipulates the originals array



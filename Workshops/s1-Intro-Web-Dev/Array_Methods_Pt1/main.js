console.log("Hello humans!");

let data = ["Aaron","Mike","Dolby","Jennifer","Adam","Zorban",
            "Betty","Aria","Ned","Cerce","Geoffery","Jamie","Hodor","Sansa",
          "The Mountain","The Hound","Danerys","Khal Drogo","Tyrion",
          "Little Finger","Rob","Aaron"]

//console.log("MY DATA",data)

// for(let i=0; i<data.length; i+=1){
//   console.log(data[i])
// }

// Finds all matching entries in array that start with a
// given first letter
function basicFirstFinder(dataIn,searchLetter){
  let results = []
  for(let i=0; i<dataIn.length; i+=1){
    if(dataIn[i][0] === searchLetter){
      results.push(dataIn[i])
    }
  }
  return results
}

console.log(basicFirstFinder(data, "A"))

// The above as an ES6 "Arrow Function"
const modernFirstFinder = (dataIn, searchLetter) => {
  let results = []
  for(let i=0; i<dataIn.length; i+=1){
    if(dataIn[i][0] === searchLetter){
      results.push(dataIn[i])
    }
  }
  return results
}

console.log(modernFirstFinder(data,"C"))

// let searchLetter = "A"
// let results = []
// data.forEach((name) => {
//   if(name[0] === searchLetter){
//     results.push(name)
//   }
// })
// console.log(results)

// ES6 Arrow Function using forEach method with inline ternary if
// forEach loops through a array, takes a function as argument, and said
// argument takes at least one argument which represents the items in the array
// (the elements) being iterated over.
const finder = (dataIn, searchLetter) => {
  let results = []
  dataIn.forEach((name) => (name[0] === searchLetter) ? results.push(name) : null)
  return results
}

// forEach call using ES5 syntax
data.forEach(function(name){console.log("Hi, my name is",name)})

console.log(finder(data,"T"))

data.forEach((name) => console.log(name.toLowerCase()))




let numbers = [1, 9, 8, 2, 22, 0, 14, 99, 65, 23, 55, 71, 4, 5, 66, 49, 33]

let sumNumber = 0

// SUM FUNCTION
const sum = (numbers) => numbers.forEach((number) => sumNumber += number)
sum(numbers)

console.log("SUM IS",sumNumber)


// GREATEST NUMBER
let maxNum = 0

const max = (numbersIn) => numbersIn.forEach((number) => maxNum = (number > maxNum) ? number : maxNum)
max(numbers)
console.log("MAX IS",maxNum)


// MINIMUM NUMBER
let minNum = 0

const min = (numbersIn) => numbersIn.forEach((number) => minNum = (number < minNum) ? number : minNum)
min(numbers)
console.log("MIN IS",minNum)


// DUPLICATE REMOVAL
let duplicateDanger = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,0,0,0]

// indexOf returns the *first* index at which the argument passed to the method
// call occurs in a given array, otherwise it returns -1 (if the argument is not
// found).

// splice takes three arguments, the index at which we are "splicing", the number of items
// we want to remove/replace, and any elements/items we want to insert at that index in
// place of any removed items. Splice modifies the array upon which it is called *in place*,
// meaning that the array is changed "at runtime".

let results = []
const removeDuplicate = (dataIn) => dataIn.forEach((element,index) => (dataIn.indexOf(element) === index && element === dataIn[index]) ? results.push(element) : null)
removeDuplicate(duplicateDanger)
console.log(results)


// SEACH FUNCTION

const search = (dataIn, query) => (dataIn.indexOf(query) > -1) ?  dataIn.splice(dataIn.indexOf(query),1) : "Not found"
console.log(search(data,"Khal Drogo"))

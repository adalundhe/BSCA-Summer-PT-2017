let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


let oddNumbers = []

for(let i=0; i<numbers.length; i+=1){
  if(numbers[i]%2 !== 0){
    oddNumbers.push(numbers[i])
  }
}

//console.log("Odd numbers only",oddNumbers)

let oddNumbersTwo = []

numbers.forEach((number) => (number%2 !== 0) ? oddNumbersTwo.push(number) : null)
//console.log("Odd numbers forEach",oddNumbersTwo)



// ONE
// Map is an array method that takes a function as argument. This argument takes
// a minimum of two arguments, the first being the item/element being iterated
// over, the second being the index of the item/element being iterated over.
// Map returns a *new* array based upon what the function passed to the method
// returns.

let mappedOddNumbers = numbers.map((number) => (number%2 !== 0) ? number : (number + 1))
//console.log("Mapped odd numbers",mappedOddNumbers)


// Ex: [{num: 1},{num: 2}, ....}]

let numObjects = []
for(let i=0; i<numbers.length; i+=1){
  numObjects.push({ num: numbers[i] })
}

//console.log("Number objects",numObjects)

// Number objects array via map
let numMappedObjects = numbers.map((number) => ({ num: number }))
//console.log("Mapped number objects", numMappedObjects)
// Explicit return example
let explicitMappedObjects = numbers.map((number) => { return {num: number} })
//console.log("Mapped number objects w/ explicit return",explicitMappedObjects)




// FILTER

let lessThanFour = []
for(let i=0; i<numbers.length; i+=1){
  if(numbers[i] < 4){
    lessThanFour.push(numbers[i])
  }
}

//console.log("Numbers less than four", lessThanFour)

// Filter is an array method that takes a function as argument and based upon the
// truthiness of the conditional that the function returns for each item
// iterated over, returns a new array of the original array's elements if and
// only if that element being iterated over meets the conditional in the
// function.

let filteredLessThanFour = numbers.filter((number) => number < 4)
//console.log("Filtered numbers less than four",filteredLessThanFour)

let filteredEvenNumbers = numbers.filter(number => number%2 === 0)
console.log("Filtered even numbers",filteredEvenNumbers)


// a.blah().bleh()
let filteredLessThanFive = numbers.filter((number) => number < 5).map((number) => ({ num: number }))
console.log("Mapped and filtered numbers less than five",filteredLessThanFive)

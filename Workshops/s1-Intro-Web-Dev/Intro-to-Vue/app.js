let greetingApp = new Vue({
  'el': '#greeting',
  'data': {
    message: 'I love to code!',
    cta: 'JS is essential for web development.'
  }
})

let numbersContainer = new Vue({
  'el': '#numbersList',
  'data': {
    title: 'Yay numbers!',
    numbers: [3.1428, 1.5126, 9, 6, 2, 16, 200000]
  }
})


var dogs = [
  { name: "Fido", breed: "miniateur schnauzer", img: "http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23252_dogue-de-bordeaux-dog-breed.jpg" },
  { name: "Susie", breed: "golden retriever", img: "http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23252_dogue-de-bordeaux-dog-breed.jpg" },
  { name: "Buddy", breed: "pug", img: "http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23252_dogue-de-bordeaux-dog-breed.jpg" },
  { name: "Paully", breed: "siberian husky", img: "http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23252_dogue-de-bordeaux-dog-breed.jpg" },
  { name: "Skip", breed: "german shepard", img: "http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23252_dogue-de-bordeaux-dog-breed.jpg" },
  { name: "Fido", breed: "rottweiler", img: "http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23252_dogue-de-bordeaux-dog-breed.jpg" },
]

let dogBreedContainer = new Vue({
  'el': '#dogApp',
  'data': {
    dogs: dogs
  }
})

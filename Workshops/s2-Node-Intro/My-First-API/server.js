const express = require('express')
const bodyParser = require('body-parser')
const app = express()
let port = 3000
let data = []

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/',express.static('public'))

// GET ALL
app.get('/api',(req,res) => res.json({ message: "Pulling all customer data.", data: data }))


// GET ONE
app.get('/api/:customer', (req,res) => {
  let searchName = data.indexOf(req.params.customer)

  if(searchName !== -1){
    res.json({ message: `I found the customer ${data[searchName]}`, data: data[searchName] })
  }
  else{
    res.json({ message: "Oh no, that customer doesn't exist!", data: null })
  }
})


// CREATE NEW CUSTOMER
app.post('/api', (req,res) => {
  data.push(req.body.name)
  console.log(`Successfully added data: ${data}`)
  res.json({message: "Successfully submitted new customer.", data: data})
})


// UPDATE EXISTING CUSTOMER
app.put('/api/:customer',(req,res) => {
  let searchName = data.indexOf(req.params.customer)

  if(searchName !== -1){
    data[searchName] = req.body.newCustomer
    res.json({ message: `Successfully modified customer: ${req.params.customer}`, data: data[searchName] })
  }
  else{
    res.json({ message: `Couldn't find customer: ${req.params.customer}`, data: null })
  }
})


// DELETE EXISTING CUSTOMER
app.delete('/api/:customer',(req,res) => {
  let searchName = data.indexOf(req.params.customer)

  if(searchName !== -1){
    data.splice(searchName, 1)
    res.json({ message: `Customer succesfully deleted: ${req.params.customer}`, data: data })
  }
  else{
    res.json({ message: `Could not find customer: ${req.params.customer}`, data: null })
  }
})


// SERVE SERVER HOT
app.listen(port,() => console.log(`Listening on port: ${port}`))

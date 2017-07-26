const express = require('express')
const bodyParser = require('body-parser')
const app = express()
let port = 3000
let data = []

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// GET ALL
app.get('/api',(req,res) => res.json({ message: "Pulling all customer data.", data: data }))

app.listen(port,() => console.log(`Listening on port: ${port}`))

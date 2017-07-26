const express = require('express')
const bodyParser = require('body-parser')
const app = express()
let port = 3000
let data = []

app.listen(port,() => console.log(`Listening on port: ${port}`))

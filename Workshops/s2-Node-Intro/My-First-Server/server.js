const http = require("http")
let port = 3000

http.createServer((request, response) => {

  // Send HTTP header
  // HTTP Status: 200 (OK)
  // Content Type: text/plain -> We're sending back a string
  response.writeHead(200,{'Content-Type': 'text/plain'})

  // If everything checks out send response "body" (data) "Hello humans!"
  response.end("Hello humans\n")
}).listen(port, () => console.log(`Server running at: ${port}`))

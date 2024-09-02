const express = require('express')
const app = express()
const port = process.env.port || 3004 // const port = 3000

app.use(express.static('../.next/static'))

app.get('*', (req, res) => {
  const handle = require('../node_modules/next/dist/server/lib/start-server.js');
    handle(req, res);
})

// app.get("/", function(req, res) { 
//   res.send("This is a get request!!\n"); 
// }); 

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
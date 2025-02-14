console.log("server")
import express from "express"
const app = express()
const port = 4000
// 192.168.228.126:4000 my laptop
app.get('/', (req, res) => {
    console.log(req.ip) // get ip of users
  res.send('Hello World! server revision') //showing response to user
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

import express from "express"
const app = express()
const port = 3000
//  192.168.228.126

app.get('/', (req, res) => {
    console.log(req.ip)
  res.send('Hello World today!' )
  
})

app.listen(port, ipAdd,() => {
  console.log(`Example app listening on port ${port} : ${ipAdd}`)
})
import express from "express"
const app = express()
const port = 3000
// const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello get requests!')
})

// 192.168.228.126:3000 check get requests

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
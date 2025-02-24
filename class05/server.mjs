import express from "express"
const app = express()
const port =  process.env.PORT || 5000 

// 192.168.228.126:3000 check get requests
app.get('/', (req, res) => {
  res.send('Hello get requests!')
})


app.get("/allusers", (req, res)=>{
    res.send("get all users!")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
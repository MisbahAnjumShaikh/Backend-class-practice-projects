import express from "express"
import cors from "cors"
const app = express()
const port =  process.env.PORT || 5000 

app.use(express.json())
app.use(cors())

// 192.168.228.126:3000 check get requests
app.get("/", (req, res) => {
  res.send('Hello get requests!')
})

app.get("/users", (req, res)=>{
  res.send(users)
})

// app.get("/allusers", (req, res)=>{
//     res.send("get all users!")
// })
  
const users = []

app.post("/newuser", (req, res)=>{
  console.log(req.body)
  users.push({...req.body, id: users.length + 1})
  res.send({msg : "post requests"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express=require('express');
const connect = require('./conn');
const cors=require("cors")
const app=express();
app.use(cors())
connect()

app.use(require('./router'))
app.use(express.json())
app.use(express.Router())
// app.get("/",async(req,res)=>{
//     try{
//         res.send('yes i am')
//         console.log("yes booi")
//     }
//     catch(err){
//         console.log(err)
//     }
// })

app.listen(3000,(req,res)=>{
    console.log(`Running At port`,3000)
})
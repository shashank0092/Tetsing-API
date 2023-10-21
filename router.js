const express=require("express")
const router=express.Router();
const empModel=require("./model")
router.use(express.json())
router.get("/",async(req,res)=>{
    try{
        console.log("HA BHAI BOL")
        res.send("YES").status(200)

    }

    catch(err){
        res.send(err);
    }
})


router.post("/emp",async(req,res)=>{
    try{
        const {name,age,email,id}=req.body;

        console.log(name,age,email,id,"this is data in backend")

        const newEmp=new empModel({
            name:name,
            age:age,
            email:email,
            id:id
        })

        const data=await newEmp.save();
        res.send({
            data:data,
            message:'Succesfully Stored'
        }).status(200)
    }
    catch(err){
        console.log("THIS IS ERROR IN DATA STORING",err)
    }
})

module.exports=router;
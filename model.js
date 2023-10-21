const mongoose=require("mongoose")

const EmpSchema=new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:String
    },
    email:{
        type:String
    },
    id:{
        type:String
    }
})

const EmpModel=new mongoose.model('Employee',EmpSchema)
module.exports=EmpModel;
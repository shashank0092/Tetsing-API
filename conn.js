const mongoose=require("mongoose")

const connect=async()=>{
    try{
        console.log("connecting")
        await mongoose.connect(`mongodb+srv://shashank:Ss123456@cluster0.wt9gfwk.mongodb.net/?retryWrites=true&w=majority`)
        console.log("Connected To DataBase Succesfully")
    }

    catch(err){
        console.log("THIS IS ERROR WHILE CONNECTION TO DB->",err)
    }
}

module.exports=connect;
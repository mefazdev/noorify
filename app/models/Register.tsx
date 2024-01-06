 
import mongoose from "mongoose";

const regsiterSchema = new mongoose.Schema({
    name:{
        type:String
    },
    place:{
       type:String
    },
    whatsApp:{
        type:String
    },
    course:{
        type:Array
    },
    timeStamp:{
        type:String
    }
})



// module.exports =

export default mongoose.models.Register || mongoose.model("Register", regsiterSchema);
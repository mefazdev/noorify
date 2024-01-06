 import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name:{
        type:String
    },
    relation:{
       type:String
    },
    
    country:{
        type:String
    },
    message:{
        type:String
    },
    timeStamp:{
        type:String
    }
})



// module.exports =

export default mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);
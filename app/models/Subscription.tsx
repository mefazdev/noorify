import mongoose from "mongoose";

const subSchema = new mongoose.Schema({
    email:{
        type:String
    },
     timeStamp:{
        type:String
    }
})



// module.exports =

export default mongoose.models.Subscription || mongoose.model("Subscription", subSchema);
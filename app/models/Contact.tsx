import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
   subject:{
        type:String
    },
   message:{
        type:Object
    },
    timeStamp:{
        type:String
    }
})



// module.exports =

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);